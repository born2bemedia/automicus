'use client';

import { ContactForm } from '@/features/contact-form/ui/form';

import { Title } from '@/shared/ui/components/atoms';

export const ContactUs = () => {
  return (
    <section className="flex w-1/2 flex-col justify-center gap-10 rounded-lg bg-[#181818] p-20 max-lg:w-full max-md:p-6">
      <Title color="light">Request Assistance</Title>
      <ContactForm />
    </section>
  );
};
