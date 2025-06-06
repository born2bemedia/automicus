'use client';

import { Chip, Text } from '@/shared/ui/components/atoms';

import type { Bot } from '../model';

export const BotPreview = ({ name, price, discount }: Bot) => {
  return (
    <article className="border-stroke flex w-full items-center justify-between rounded-lg border p-6 max-md:flex-col max-md:items-start">
      <Text size="3xl" weight="bold" color="light">
        {name}
      </Text>
      <div className="flex gap-2.5 max-md:flex-col">
        <Text size="3xl" weight="bold" color="light">
          €{price}
        </Text>
        <Chip>Save €{discount}!</Chip>
      </div>
    </article>
  );
};
