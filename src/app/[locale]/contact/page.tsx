import type { Metadata } from 'next';

import { Hero } from './components';

export const metadata: Metadata = {
  title: 'Contact | Automicus',
  description:
    'Get in touch with the Automicus support team. Reach out for assistance, inquiries, or to learn more about our trading bots.',
  openGraph: {
    title: 'Contact | Automicus',
    description:
      'Get in touch with the Automicus support team. Reach out for assistance, inquiries, or to learn more about our trading bots.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Automicus',
    description:
      'Get in touch with the Automicus support team. Reach out for assistance, inquiries, or to learn more about our trading bots.',
  },
};

export default function ContactPage() {
  return (
    <main>
      <Hero />
      {/* <InfoBlock /> */}
    </main>
  );
}
