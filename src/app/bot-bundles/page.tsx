import { getBotBundles } from '@/features/bots/api';
import { BotBundleGroup } from '@/features/bots/ui';

import { ContactUs, Hero } from './components';

export default async function BotBundlesPage() {
  const { data } = await getBotBundles();

  return (
    <main>
      <Hero />
      <BotBundleGroup bundles={data.docs} />
      <ContactUs />
    </main>
  );
}
