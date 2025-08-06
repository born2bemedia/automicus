import { AccountContainer } from './components';
import { Header } from '@/core/user/ui/header';
import { Sidebar } from '@/core/user/ui/sidebar';

export default function AccountPage() {
  return (
    <main className="relative m-2 flex items-start gap-6 max-md:flex-col">
      <Sidebar />
      <Header />
      <AccountContainer />
    </main>
  );
}
