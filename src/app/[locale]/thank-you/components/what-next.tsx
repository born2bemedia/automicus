'use client';

import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';

export const WhatNext = () => {
  const t = useTranslations('thankYouWire.whatNext');

  return (
    <section className="m-1 flex gap-1 max-lg:flex-col-reverse">
      <section className="h-[192px] w-1/2 rounded-lg bg-[linear-gradient(0deg,rgba(40,40,40,0.50)_0%,rgba(40,40,40,0.50)_100%)] max-lg:w-full max-md:h-[285px] max-md:w-full">
        <video
          src="/videos/bot-page/summary.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full rounded-lg object-cover [filter:brightness(0.4)]"
        />
      </section>
      <section className="flex h-[192px] w-1/2 flex-col gap-5 rounded-lg bg-[#282828] p-10 max-lg:w-full max-md:h-full">
        <Title size="5xl" as="h2" weight="bold" color="light">
          {t('title', { fallback: "What's Next?" })}
        </Title>
        <Text color="light" weight="medium">
          {t('text', {
            fallback:
              "You'll receive a confirmation email shortly with your bot files, installation guide, and access to tutorials.",
          })}
        </Text>
      </section>
    </section>
  );
};
