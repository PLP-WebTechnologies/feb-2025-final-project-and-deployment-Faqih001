"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Table with title, description with type string as props 
const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

// PersonalRoom component that uses the useUser, useStreamVideoClient, useRouter, useGetCallById, and useToast hooks
const PersonalRoom = () => {

  // useUser hook to get the user object
  const router = useRouter();

  // useStreamVideoClient hook to get the client object
  const { user } = useUser();
  const client = useStreamVideoClient();

  // useRouter hook to get the router object
  const { toast } = useToast();

  // meetingId variable that stores the user's id
  const meetingId = user?.id;

  // useGetCallById hook to get the call object
  const { call } = useGetCallById(meetingId!);

  // startRoom function that starts the room if the client and user objects are not null
  const startRoom = async () => {

    // If the client or user object is null, return
    if (!client || !user) return;

    // newCall variable that stores the client call with the default meetingId
    const newCall = client.call("default", meetingId!);

    // If the call object is null, create a new call object with the starts_at property set to the current date
    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    // Redirect the user to the meeting page with the personal flag set to true
    router.push(`/meeting/${meetingId}?personal=true`);
  };

  // meetingLink variable that stores the meeting link with the meetingId
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-xl font-bold lg:text-3xl">Personal Meeting Room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s Meeting Room`} />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invite Link" description={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-blue-1" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-dark-3"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
