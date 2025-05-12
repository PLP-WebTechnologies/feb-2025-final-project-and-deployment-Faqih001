import { SignUp } from '@clerk/nextjs';

// Sign up page component that uses the Clerk SignUp component to render the sign up form on the page
export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
}
