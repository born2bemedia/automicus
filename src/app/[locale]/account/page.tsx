import { getUserOrders } from '@/features/orders/api/get-orders';

import { AccountContainer } from './components';
import { Header } from '@/core/user/ui/header';
import { Sidebar } from '@/core/user/ui/sidebar';

export default async function AccountPage() {
  const { orders, bots } = await getUserOrders();
  console.log(bots);

  return (
    <main className="relative m-2 flex items-start gap-6 max-lg:flex-col">
      <Sidebar />
      <Header />
      <AccountContainer orders={orders} bots={bots} />
    </main>
  );
}
