'use client';

import type { ReactNode } from 'react';

import { Title } from '@/shared/ui/components/atoms';

import { ContactUs } from './contact-us';

export const PolicyRender = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <section className="mx-auto flex w-[832px] flex-col gap-10 py-[80px] max-lg:w-full max-lg:px-6 max-lg:py-[64px]">
      <Title
        color="secondary"
        as="h1"
        weight="bold"
        className="text-center"
        size="4xl"
        uppercase
      >
        {title}
      </Title>
      <span className="h-[1px] w-full bg-white/15" />
      {children}
      <ContactUs />
    </section>
  );
};
