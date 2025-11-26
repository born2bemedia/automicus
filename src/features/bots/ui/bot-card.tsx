import { useTranslations } from 'next-intl';

import { getCart } from '@/features/cart/api/get-cart';
import { useCartStore } from '@/features/cart/model/cart-store';

import { lsWrite } from '@/shared/lib/browser';
import { cn } from '@/shared/lib/utils';
import { Button, Chip, Text } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

import type { Bot, BotBundleType } from '../model';

export const BotCard = ({
  id,
  description,
  name,
  price,
  discount,
  layoutClassName,
  slug,
  excerpt,
  deals,
  variant = 'simplify',
  showSaleBanner = true,
  deal = false,
}: Bot & {
  variant?: 'simplify' | 'full';
  layoutClassName?: string;
  showSaleBanner?: boolean;
  deal?: boolean;
}) => {
  const t = useTranslations('catalog.botCard');

  const { setCart } = useCartStore();

  const buyHandle = () => {
    const cart = getCart();
    lsWrite(
      'cart',
      JSON.stringify([
        ...cart,
        { id, name, price, discount, quantity: 1, total: price },
      ]),
    );
    setCart([
      ...cart,
      {
        id: 0,
        name,
        price,
        bots: [],
        discount,
        quantity: 1,
        description: '',
        type: 'bundle' as BotBundleType,
      },
    ]);
  };

  return variant === 'simplify' ? (
    <article
      className={cn(
        'flex h-full flex-col gap-6 rounded-lg bg-[#E5E5E5] p-10 max-md:gap-10',
        layoutClassName,
      )}
    >
      <section className="flex flex-col gap-2">
        <Text size="4xl" weight="bold">
          {name}
        </Text>
        <Text weight="medium">{description}</Text>
      </section>
      <section className="flex justify-between gap-2.5 max-md:flex-col">
        <Text size="4xl" weight="bold">
          €{price.toLocaleString()}
        </Text>
        <div className="flex items-center gap-2.5">
          <Button onClick={buyHandle} fullWidth>
            {t('buy', { fallback: 'Buy' })}
          </Button>
          <NavButton
            url={`/catalog/${slug}`}
            variant="secondary"
            size="md"
            fullWidth
          >
            {t('explore', { fallback: 'Explore' })}
          </NavButton>
        </div>
      </section>
    </article>
  ) : (
    <article
      className={cn(
        'z-10 flex h-auto flex-1 flex-col rounded-b-lg bg-[#E5E5E5]/10 backdrop-blur-[15px]',
        layoutClassName,
      )}
    >
      {showSaleBanner ? (
        <span className="w-full rounded-t-lg bg-[#CBFF00] px-10 py-2.5 text-center">
          <Text color="primary" size="xl">
            {t('todayOnly', { fallback: 'TODAY ONLY!' })}
          </Text>
        </span>
      ) : null}
      <section className="flex h-full flex-col gap-6 p-10 max-md:p-6">
        <div className="flex flex-col gap-2">
          <Text size="4xl" className="text-[28px]" weight="bold" color="light">
            {name}
          </Text>
          <Text weight="medium" color="light">
            {deal ? deals : excerpt}
          </Text>
        </div>
        <div className="mt-auto flex gap-2.5">
          <Text size="4xl" weight="bold" color="light">
            €{price.toLocaleString()}
          </Text>
          {discount ? (
            <Chip>
              {t('save', { fallback: 'Save' })} €{discount}!
            </Chip>
          ) : null}
        </div>
        <div className="flex items-center gap-2.5">
          <Button onClick={buyHandle} fullWidth>
            {t('buy', { fallback: 'Buy' })}
          </Button>
          <NavButton
            url={`/catalog/${slug}`}
            size="md"
            variant="secondary"
            fullWidth
          >
            {t('explore', { fallback: 'Explore' })}
          </NavButton>
        </div>
      </section>
    </article>
  );
};
