'use client';

import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/components/atoms/tag';

export const OrderStatus = ({
  value,
}: {
  value: 'completed' | 'pending' | 'failed';
}) => {
  const t = useTranslations('account.orders.status');

  return (
    <Tag
      intent={value === 'completed' ? 'success' : value}
      className="min-w-[200px] flex-col max-md:min-w-full"
    >
      <span className="capitalize">{value}</span>
      {value === 'pending' && (
        <span className="text-xs">
          ({t('waiting', { fallback: 'waiting your payment' })})
        </span>
      )}
      {value === 'failed' && (
        <span className="text-xs">
          ({t('failed', { fallback: 'your payment failed' })})
        </span>
      )}
    </Tag>
  );
};
