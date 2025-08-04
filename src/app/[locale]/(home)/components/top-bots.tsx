'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import type { Bot } from '@/features/bots/model';
import { BotCard } from '@/features/bots/ui';

import { Button, Text } from '@/shared/ui/components/atoms';

export const TopBots = ({ bots }: { bots: Bot[] }) => {
  const t = useTranslations('home.topBots');

  return (
    <section className="flex gap-1 p-1 max-md:flex-col-reverse">
      <section className="flex w-1/2 flex-col gap-1 max-md:w-full">
        {bots.map(bot => (
          <BotCard key={bot.name + bot.price} {...bot} />
        ))}
      </section>
      <div className="relative w-1/2 max-md:h-[374px] max-md:w-full">
        <section className="flex flex-col gap-6 p-11 max-md:h-full max-md:justify-end max-md:p-6">
          <Text size="4xl" weight="bold" color="light" zIndex="1" uppercase>
            {t('title', { fallback: 'Automicus Top Bots' })}
          </Text>
          <Link href="/catalog">
            <Button variant="secondary" zIndex="1">
              {t('btn', { fallback: 'All Bots' })}
            </Button>
          </Link>
        </section>
        <video
          src="/videos/home/top-bots.mp4"
          autoPlay
          loop
          muted
          className="absolute right-0 bottom-0 h-full w-full rounded-lg object-cover grayscale filter"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};
