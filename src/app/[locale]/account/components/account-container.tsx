'use client';

import { useTranslations } from 'next-intl';

import type { Bot } from '@/features/bots/model';
import { ChangePasswordForm } from '@/features/change-password/ui/form';
import type { Order } from '@/features/orders/model/types';
import { OrdersTable } from '@/features/orders/ui/orders-table';
import { PurchasedBots } from '@/features/orders/ui/purchased-bots';

import { Title } from '@/shared/ui/components/atoms';
import { Separator } from '@/shared/ui/components/atoms/separator';

import { useTabsStore } from '@/core/user/model/tabs.store';
import { EditUserForm } from '@/core/user/ui/edit-user-form';

export const AccountContainer = ({
  orders,
  bots,
}: {
  orders: Order[];
  bots: Bot[];
}) => {
  const { activeTab } = useTabsStore();

  const t = useTranslations('account');

  return (
    <section className="flex w-full flex-col gap-12 py-6">
      <Title
        color="light"
        size="4xl"
        weight="bold"
        className="max-md:text-center"
      >
        {t('title', { fallback: 'Welcome to Your Automicus Account' })}
      </Title>
      <section className="rounded-lg bg-[#101010] p-6">
        {activeTab === 'data' && (
          <div className="flex flex-col gap-6">
            <EditUserForm />
            <Separator />
            <ChangePasswordForm />
          </div>
        )}
        {activeTab === 'orders' && <OrdersTable values={orders} />}
        {activeTab === 'bots' && <PurchasedBots values={bots} />}
      </section>
    </section>
  );
};
