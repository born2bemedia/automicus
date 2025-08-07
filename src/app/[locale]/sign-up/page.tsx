import type { Metadata } from 'next';

import { SignUpForm } from '@/core/auth/ui/sign-up-form';

export const metadata: Metadata = {
  title: 'Sign Up | Automicus',
  openGraph: {
    title: 'Sign Up | Automicus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Up | Automicus',
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
      <SignUpForm />
    </main>
  );
}
