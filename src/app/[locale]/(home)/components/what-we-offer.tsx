'use client';

import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';

export const WhatWeOffer = () => {
  const t = useTranslations('home.whatWeOffer');

  return (
    <section className="flex h-[420px] gap-1 p-1 max-md:h-full max-md:flex-col">
      <section className="flex h-full w-1/2 rounded-lg bg-[#E5E5E5] p-10 text-right max-md:h-[194px] max-md:w-full max-md:items-end max-md:text-center">
        <Title as="h3">{t('title', { fallback: 'What We Offer' })}</Title>
      </section>
      <section className="flex w-1/2 items-end rounded-lg bg-[#E5E5E5] p-10 max-md:min-h-[224px] max-md:w-full">
        <Text weight="medium">
          {t('description', {
            fallback:
              'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
          })}
        </Text>
      </section>
    </section>
  );
};
