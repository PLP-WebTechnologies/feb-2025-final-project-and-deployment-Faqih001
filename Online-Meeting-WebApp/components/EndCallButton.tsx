'use client';

import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

// EndCallButton component that uses the useCall and useCallStateHooks hooks to render the end call button component
const EndCallButton = () => {

  // Use the useCall hook to get the call from the StreamCall component
  const call = useCall();
  const router = useRouter();

  // If there is no call, throw an error with the message "useStreamCall must be used within a StreamCall component."
  if (!call)
    throw new Error(
      'useStreamCall must be used within a StreamCall component.',
    );

  // https://getstream.io/video/docs/react/guides/call-and-participant-state/#participant-state-3
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  // If the localParticipant is not the call owner, return null
  const isMeetingOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  // endCall function that ends the call and pushes the router to the home page
  const endCall = async () => {
    await call.endCall();
    router.push('/');
  };

  return (
    <Button onClick={endCall} className="bg-red-500">
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
