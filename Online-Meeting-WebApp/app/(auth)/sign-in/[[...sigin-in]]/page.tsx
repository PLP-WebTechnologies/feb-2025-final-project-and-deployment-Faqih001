import { SignIn } from '@clerk/nextjs';

// Sign in page component that uses the Clerk SignIn component to render the sign in form on the page 
export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
}
