import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getBots } from '@/features/bots/api';
import { BotGroup } from '@/features/bots/ui';

import { VideoHero } from '@/shared/ui/components/organisms';

export const metadata: Metadata = {
  title: 'Deals | Automicus',
  description:
    'Discover limited-time deals and special offers on top trading bots. Save now and boost your automated trading performance.',
  openGraph: {
    title: 'Deals | Automicus',
    description:
      'Discover limited-time deals and special offers on top trading bots. Save now and boost your automated trading performance.',
    images: ['https://automicus.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deals | Automicus',
    description:
      'Discover limited-time deals and special offers on top trading bots. Save now and boost your automated trading performance.',
    images: ['https://automicus.com/meta.jpg'],
  },
};

export default async function DealsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data } = await getBots({ params: { locale } });

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
      <BotGroup bots={data.docs} deal />
    </main>
  );
}
