import type { Metadata } from 'next';

import { LoginForm } from '@/core/auth/ui/login-form';

export const metadata: Metadata = {
  title: 'Login | Automicus',
  openGraph: {
    title: 'Login | Automicus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login | Automicus',
  },
  robots: {
    index: false,
  },
};

export default function SignUpPage() {
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center p-10 max-md:p-6">
      <video
        src="/videos/auth/sign-up.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full rounded-lg object-cover grayscale filter"
      />
      <LoginForm />
    </main>
  );
}
