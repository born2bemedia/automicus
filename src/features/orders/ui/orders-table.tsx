'use client';

import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';
import { Table } from '@/shared/ui/components/atoms/table';

import { getColumns } from '../model/get-columns';
import type { Order } from '../model/types';
import { OrderCard } from './order-card';

export const OrdersTable = ({ values }: { values: Order[] }) => {
  const t = useTranslations('account.orders');

  const columns = getColumns(t);

  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Title size="3xl" color="light" weight="bold">
          {t('title', { fallback: 'Your Orders' })}
        </Title>
        <Text color="muted" weight="medium">
          {t('text', {
            fallback:
              'Track your order history. Here you can view all your completed, pending, and failed bot orders—across all time.',
          })}
        </Text>
      </div>
      <div className="max-md:hidden">
        <Table<Order> data={values} columns={columns} />
      </div>
      <div className="hidden flex-col gap-6 max-md:flex">
        {values.map(value => (
          <OrderCard key={value.orderId} value={value} />
        ))}
      </div>
    </section>
  );
};
