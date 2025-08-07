'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms';
import { Title } from '@/shared/ui/components/atoms/title';

import type { Order } from '../model/types';
import { OrderStatus } from './order-status';

export const OrderCard = ({ value }: { value: Order }) => {
  const t = useTranslations('account.orders.card');

  const date = new Date(value.orderDate);

  return (
    <article className="flex flex-col gap-5 rounded-sm border border-[rgba(255,255,255,0.10)] p-6">
      <Title size="xl" color="light" weight="bold">
        {value.name.join(', ')}
      </Title>
      <Row>
        <Text color="muted">ID:</Text>
        <Text color="light">{value.orderId}</Text>
      </Row>
      <Row>
        <Text color="muted">{t('price', { fallback: 'Price' })}:</Text>
        <Text color="light">{value.price}</Text>
      </Row>
      <Row>
        <Text color="muted">{t('date', { fallback: 'Date' })}:</Text>
        <Text color="light">{date.toISOString().split('T')[0]}</Text>
      </Row>
      <OrderStatus
        value={value.orderStatus as 'completed' | 'pending' | 'failed'}
      />
    </article>
  );
};

const Row = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center justify-between">{children}</div>
);
