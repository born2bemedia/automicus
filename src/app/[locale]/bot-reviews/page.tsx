import { getTranslations } from 'next-intl/server';

import { getBotReviews } from '@/features/bots/api';
import { BotsReviewPreview } from '@/features/bots/ui';

import { VideoHero } from '@/shared/ui/components/organisms';

import { NeedHelp } from './components';

export default async function BotReviewsPage() {
  const { data } = await getBotReviews();

  const t = await getTranslations('botReviews.hero');

  return (
    <main>
      <VideoHero
        title={t('title', {
          fallback: 'In-Depth Reviews of Top Trading Bots',
        })}
        text={t('text', {
          fallback:
            'Compare, evaluate, and learn about the performance of the leading trading bots',
        })}
        videoUrl="/videos/bot-reviews/hero.mp4"
        metaButton={{
          label: t('btn', { fallback: 'Explore Bots' }),
          url: '/catalog',
        }}
        disableFilter
      />
      <BotsReviewPreview data={data} />
      <NeedHelp />
    </main>
  );
}
