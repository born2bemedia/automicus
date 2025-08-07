import type { useTranslations } from 'next-intl';
import type { ColumnDef } from '@tanstack/react-table';

import { Text } from '@/shared/ui/components/atoms';

import { OrderStatus } from '../ui/order-status';
import type { Order } from './types';

export const getColumns = (
  t: ReturnType<typeof useTranslations>,
): ColumnDef<Order>[] => [
  {
    accessorKey: 'orderId',
    header: () => (
      <Text color="light" weight="medium">
        {t('columns.orderId', { fallback: 'Order ID' })}
      </Text>
    ),
    cell: info => (
      <Text color="light" weight="medium">
        #{info.getValue<string>()}
      </Text>
    ),
  },
  {
    accessorKey: 'name',
    header: () => (
      <Text color="light" weight="medium">
        {t('columns.name', { fallback: 'Bot name' })}
      </Text>
    ),
    cell: info => (
      <Text color="light" weight="medium">
        {info.getValue<string[]>().join(', ')}
      </Text>
    ),
  },
  {
    accessorKey: 'price',
    header: () => (
      <Text color="light" weight="medium">
        {t('columns.price', { fallback: 'Price' })}
      </Text>
    ),
    cell: info => (
      <Text color="light" weight="medium">
        €{info.getValue<number>()}
      </Text>
    ),
  },
  {
    accessorKey: 'orderDate',
    header: () => (
      <Text color="light" weight="medium">
        {t('columns.date', { fallback: 'Order date' })}
      </Text>
    ),
    cell: info => {
      const date = new Date(info.getValue<string>());
      return (
        <Text color="light" weight="medium">
          {date.toISOString().split('T')[0]}
        </Text>
      );
    },
  },
  {
    accessorKey: 'orderStatus',
    header: () => (
      <Text color="light" weight="medium">
        {t('columns.orderStatus', { fallback: 'Order status' })}
      </Text>
    ),
    cell: info => (
      <OrderStatus
        value={info.getValue<string>() as 'completed' | 'pending' | 'failed'}
      />
    ),
  },
];
