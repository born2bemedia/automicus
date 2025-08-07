import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getBotReviews } from '@/features/bots/api';
import { BotsReviewPreview } from '@/features/bots/ui';

import { VideoHero } from '@/shared/ui/components/organisms';

import { NeedHelp } from './components';

export const metadata: Metadata = {
  title: 'Bot Reviews | Automicus',
  description:
    'Explore detailed reviews of Automicus trading bots. Discover features, benefits, and user experiences to choose the right bot for you.',
  openGraph: {
    title: 'Bot Reviews | Automicus',
    description:
      'Explore detailed reviews of Automicus trading bots. Discover features, benefits, and user experiences to choose the right bot for you.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bot Reviews | Automicus',
    description:
      'Explore detailed reviews of Automicus trading bots. Discover features, benefits, and user experiences to choose the right bot for you.',
  },
};

export default async function BotReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data } = await getBotReviews(locale);

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
