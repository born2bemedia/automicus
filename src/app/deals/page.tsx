import { getBots } from '@/features/bots/api';
import { BotGroup } from '@/features/bots/ui';

import { VideoHero } from '@/shared/ui/components/organisms';

import { NoDeals } from './components';

export default async function DealsPage() {
  const { data } = await getBots();

  return (
    <main>
      <VideoHero
        title="Exclusive Deals"
        text="Unlock massive savings with our limited-time offers and exclusive discounts."
        videoUrl="/videos/deals/hero.mp4"
        metaButton={{
          label: 'Get Assistance',
          url: '/contact',
        }}
      />
      <BotGroup bots={data.docs} />
      <NoDeals />
    </main>
  );
}
