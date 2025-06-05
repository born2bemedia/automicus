'use client';

import { Button, Chip } from '@/shared/ui/components/atoms';
import { Text } from '@/shared/ui/components/atoms';

import type { BotBundle } from '../model';
import { BotPreview } from './bot-preview';

export const BotBundleCard = ({
  name,
  description,
  price,
  discount,
  bots,
}: BotBundle) => {
  return (
    <article className="flex items-center gap-20 rounded-lg bg-[rgba(229,229,229,0.1)] p-10 backdrop-blur-[15px] max-md:flex-col max-md:gap-10">
      <section className="flex w-[376px] flex-col gap-2 max-md:w-full">
        <Text size="3xl" color="light" weight="bold">
          {name}
        </Text>
        <Text color="light" weight="medium">
          {description}
        </Text>
      </section>
      <section className="flex w-full flex-col gap-10">
        <section className="flex gap-6 max-md:flex-col">
          {bots.map((bot, i) => (
            <BotPreview key={bot.name + i} {...bot} />
          ))}
        </section>
        <section className="flex gap-20 max-md:flex-col max-md:gap-6">
          <div className="flex gap-2.5">
            <Text size="5xl" weight="bold" color="light">
              €{price}
            </Text>
            <Chip>Save €{discount}!</Chip>
          </div>
          <Button fullWidth>Buy</Button>
        </section>
      </section>
    </article>
  );
};
