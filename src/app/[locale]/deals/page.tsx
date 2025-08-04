import { getTranslations } from 'next-intl/server';

import { getBots } from '@/features/bots/api';
import { BotGroup } from '@/features/bots/ui';

import { VideoHero } from '@/shared/ui/components/organisms';

export default async function DealsPage() {
  const { data } = await getBots();

  const t = await getTranslations('deals.hero');

  return (
    <main>
      <VideoHero
        title={t('title', { fallback: 'Exclusive Deals' })}
        text={t('text', {
          fallback:
            'Unlock massive savings with our limited-time offers and exclusive discounts.',
        })}
        videoUrl="/videos/deals/hero.mp4"
        metaButton={{
          label: t('btn', { fallback: 'Get Assistance' }),
          url: '/contact',
        }}
      />
      <BotGroup bots={data.docs} />
    </main>
  );
}
