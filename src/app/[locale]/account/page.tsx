import type { Metadata } from 'next';

import { getUserOrders } from '@/features/orders/api/get-orders';

import { AccountContainer } from './components';
import { Header } from '@/core/user/ui/header';
import { Sidebar } from '@/core/user/ui/sidebar';

export const metadata: Metadata = {
  title: 'Account | Automicus',
  openGraph: {
    title: 'Account | Automicus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Account | Automicus',
  },
  robots: {
    index: false,
  },
};

export default async function AccountPage() {
  const { orders, bots } = await getUserOrders();

  return (
    <main className="relative m-2 flex items-start gap-6 max-lg:flex-col">
      <Sidebar />
      <Header />
      <AccountContainer orders={orders} bots={bots} />
    </main>
  );
}
