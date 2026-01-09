'use client';

import { useTranslations } from 'next-intl';

import { Chip, Text } from '@/shared/ui/components/atoms';

import type { Bot } from '../model';

export const BotPreview = ({ name, price, discount }: Bot) => {
  const t = useTranslations('home.botBundleCard');
  return (
    <article className="border-stroke flex w-full items-center justify-between gap-6 rounded-lg border p-6 max-md:flex-col max-md:items-start max-md:gap-2">
      <Text size="3xl" weight="bold" color="light">
        {name}
      </Text>
      <div className="flex flex-col gap-2.5 max-md:flex-col">
        <Text size="3xl" weight="bold" color="light">
          €{price.toLocaleString()}
        </Text>
        {discount && <Chip>{t('save', { fallback: 'Save' })} €{discount}!</Chip>}
      </div>
    </article>
  );
};
