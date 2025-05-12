import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';

// RootLayout component that uses the StreamVideoProvider component to wrap the main content of the app
const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
