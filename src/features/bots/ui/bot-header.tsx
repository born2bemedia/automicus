'use client';

import { useTranslations } from 'next-intl';

import { getCart } from '@/features/cart/api/get-cart';

import { notifySuccess } from '@/shared/lib/toast';
import { lsWrite } from '@/shared/lib/utils/browser';
import { Button, Divider, Text, Title } from '@/shared/ui/components/atoms';
import { FeatureList } from '@/shared/ui/components/molecules';

import type { Bot } from '../model';
import { BotTitle } from './bot-title';

export const BotHeader = ({
  description,
  excerpt,
  features,
  name,
  price,
  id,
  discount,
}: Pick<
  Bot,
  'name' | 'description' | 'features' | 'price' | 'excerpt' | 'id' | 'discount'
>) => {
  const t = useTranslations('botPage');

  const buyHandle = () => {
    const cart = getCart();
    lsWrite(
      'cart',
      JSON.stringify([
        ...cart,
        { id, name, price, discount, quantity: 1, total: price },
      ]),
    );
    notifySuccess('Bot added to cart');
  };
  return (
    <header className="flex items-center gap-10 p-10 max-md:flex-col max-md:p-6">
      <BotTitle name={name} excerpt={excerpt} />
      <section className="flex w-[58%] flex-col gap-10 max-md:w-full">
        <div className="flex flex-col gap-2.5">
          <Title color="light">{name}</Title>
          <Text color="light" weight="medium">
            {description}
          </Text>
        </div>
        <Divider />
        <Title as="h3" color="light" weight="bold">
          €{price}
        </Title>
        <Divider />
        <section className="flex flex-col gap-4">
          <Text size="xl" weight="bold" color="light">
            {t('header.subtitle', { fallback: 'Technical Features:' })}
          </Text>
          <FeatureList values={features} />
        </section>
        <Button size="md" onClick={buyHandle}>
          {t('header.btn', { fallback: 'Add to Cart' })}
        </Button>
      </section>
    </header>
  );
};
