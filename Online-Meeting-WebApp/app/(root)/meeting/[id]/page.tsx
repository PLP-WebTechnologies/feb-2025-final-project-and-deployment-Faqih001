'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';

import { useGetCallById } from '@/hooks/useGetCallById';
import Alert from '@/components/Alert';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';

// MeetingPage component that uses the StreamCall, StreamTheme, Loader, useGetCallById, Alert, MeetingSetup, and MeetingRoom components to display the meeting page
const MeetingPage = () => {

  // Get the call ID from the URL parameter to display the correct meeting
  const { id } = useParams();

  // Get the current user and check if the user is loaded
  const { isLoaded, user } = useUser();

  // Get the call and check if the call is loading to display the correct content
  const { call, isCallLoading } = useGetCallById(id);
  
  // Set the state of the setup completion to display the correct content on the meeting page
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  // Return the meeting page component with the correct content based on the user and call information
  if (!isLoaded || isCallLoading) return <Loader />;

  // If the call is not found, display an error message to the user that the call was not found
  if (!call) return (
    <p className="text-center text-3xl font-bold text-white">
      Call Not Found
    </p>
  );

  // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
  const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user.id));

  // If the user is not allowed to join the meeting, display an error message to the user that they are not allowed to join the meeting
  if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

  // Return the meeting page component with the correct content based on the setup completion state
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>

        {!isSetupComplete ? (
          <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
        ) : (
          <MeetingRoom />
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
