'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import type { Bot } from '@/features/bots/model';
import { BotCard } from '@/features/bots/ui';

import { Button, Title } from '@/shared/ui/components/atoms';

export const Deals = ({ bots }: { bots: Bot[] }) => {
  const t = useTranslations('home.deals');

  return (
    <section className="relative m-1 flex flex-col gap-10 overflow-hidden px-10 py-20">
      <Title color="light" align="center" zIndex="1" uppercase>
        {t('title', { fallback: 'Deals' })}
      </Title>
      <section className="flex items-stretch gap-6 max-md:flex-col">
        {bots.map((bot, i) => (
          <BotCard key={bot.name + i} variant="full" {...bot} />
        ))}
      </section>
      <section className="z-10 flex justify-center">
        <Link href="/deals">
          <Button variant="secondary" zIndex="1">
            {t('allDeals', { fallback: 'All Deals' })}
          </Button>
        </Link>
      </section>
      <video
        src="/videos/home/particles.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-[-300px] h-full w-full object-cover brightness-40"
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};
