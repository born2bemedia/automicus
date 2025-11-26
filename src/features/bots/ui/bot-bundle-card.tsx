'use client';

import { useTranslations } from 'next-intl';

import { getCart } from '@/features/cart/api/get-cart';
import { useCartStore } from '@/features/cart/model/cart-store';

import { lsWrite } from '@/shared/lib/browser';
import { Button, Chip } from '@/shared/ui/components/atoms';
import { Text } from '@/shared/ui/components/atoms';

import type { BotBundle, BotBundleType } from '../model';
import { BotPreview } from './bot-preview';

export const BotBundleCard = ({
  name,
  description,
  price,
  discount,
  bots,
}: BotBundle) => {
  const t = useTranslations('home.botBundleCard');

  const { setCart } = useCartStore();

  const onBuyHandle = () => {
    const cart = getCart();
    lsWrite(
      'cart',
      JSON.stringify([
        ...cart,
        { name, price, bots, discount, quantity: 1, total: price },
      ]),
    );
    setCart([
      ...cart,
      {
        id: 0,
        name,
        price,
        bots,
        discount,
        quantity: 1,
        description: '',
        type: 'bundle' as BotBundleType,
      },
    ]);
  };

  return (
    <article className="flex items-center justify-between gap-20 rounded-lg bg-[rgba(229,229,229,0.1)] p-10 backdrop-blur-[15px] max-md:flex-col max-md:gap-10">
      <section className="flex w-[376px] flex-col gap-2 max-md:w-full">
        <Text size="3xl" color="light" weight="bold">
          {name}
        </Text>
        <Text color="light" weight="medium">
          {description}
        </Text>
      </section>
      <section className="flex w-full max-w-[815px] flex-col gap-10">
        {bots.length % 2 === 0 ? (
          <section className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {bots.map((bot, i) => (
              <BotPreview key={bot.name + i} {...bot} />
            ))}
          </section>
        ) : (
          <>
            <section className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
              {bots.slice(0, -1).map((bot, i) => (
                <BotPreview key={bot.name + i} {...bot} />
              ))}
            </section>
            <section className="w-full">
              <BotPreview {...bots[bots.length - 1]} />
            </section>
          </>
        )}
        <section className="flex gap-20 max-md:flex-col max-md:gap-6">
          <div className="flex gap-2.5">
            <Text size="5xl" weight="bold" color="light">
              €{price.toLocaleString()}
            </Text>
            <Chip>
              {t('save', { fallback: 'Save' })} €{discount}!
            </Chip>
          </div>
          <Button onClick={onBuyHandle} fullWidth>
            {t('buy', { fallback: 'Buy' })}
          </Button>
        </section>
      </section>
    </article>
  );
};
