'use client';

import type { Bot } from '@/features/bots/model';
import { BotCard } from '@/features/bots/ui';

import { Button, Title } from '@/shared/ui/components/atoms';

export const Deals = ({ bots }: { bots: Bot[] }) => {
  return (
    <section className="relative m-1 flex flex-col gap-10 overflow-hidden px-10 py-20">
      <Title color="light" align="center" zIndex="1" uppercase>
        Deals
      </Title>
      <section className="flex justify-center gap-1 max-md:flex-col">
        {bots.map((bot, i) => (
          <BotCard key={bot.name + i} {...bot} />
        ))}
      </section>
      <section className="flex justify-center">
        <Button variant="secondary" zIndex="1">
          All Deals
        </Button>
      </section>
      <video
        src="/videos/home/particles.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-[-300px] h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};
