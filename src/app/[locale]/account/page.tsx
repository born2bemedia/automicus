import type { Metadata } from 'next';

import { getUserOrders } from '@/features/orders/api/get-orders';

import { AccountContainer } from './components';
import { Header } from '@/core/user/ui/header';
import { Sidebar } from '@/core/user/ui/sidebar';

export const metadata: Metadata = {
  title: 'Account | Automicus',
  description:
    'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
  openGraph: {
    title: 'Account | Automicus',
    description:
      'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Account | Automicus',
    description:
      'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
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
