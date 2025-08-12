import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CompareBots } from '@/features/compare-bots/ui/compare-bots';

import { CubesFooter, VideoHero } from '@/shared/ui/components/organisms';

export const metadata: Metadata = {
  title: 'Trading Bots Comparison | Automicus',
  description:
    'Discover and compare features of Automicus trading bots to find the perfect fit for your trading style. Explore detailed comparisons and make informed choices today.',
  openGraph: {
    title: 'Trading Bots Comparison | Automicus',
    description:
      'Compare Automicus trading bots side by side. Discover key features, performance metrics, and user reviews to make an informed decision.',
    images: ['https://automicus.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trading Bots Comparison | Automicus',
    description:
      'Compare Automicus trading bots side by side. Discover key features, performance metrics, and user reviews to make an informed decision.',
    images: ['https://automicus.com/meta.jpg'],
  },
};

export default async function CompareBotsPage() {
  const t = await getTranslations('compareBots');

  return (
    <main>
      <VideoHero
        title={t('hero.title', { fallback: 'Compare Our Top Trading Bots.' })}
        text={t('hero.text', {
          fallback:
            'Explore key features and find the perfect bot for your trading style and goals.',
        })}
        metaButton={{
          label: t('hero.btn', { fallback: 'Explore Bots' }),
          url: '/catalog',
        }}
        videoUrl="/videos/compare-bots/hero.mp4"
      />
      <CompareBots />
      <CubesFooter
        title={t('footer.title', { fallback: 'Special Deals & Bundles' })}
        text={t('footer.text', {
          fallback:
            'Automicus offers exclusive discounts and curated bot bundles to help you save more while automating your trading.',
        })}
        metaButtons={[
          {
            label: t('footer.btn', { fallback: 'Check Deals' }),
            url: '/deals',
            variant: 'primary',
          },
          {
            label: t('footer.btn2', { fallback: 'Check Bundles' }),
            url: '/bot-bundles',
            variant: 'secondary',
          },
        ]}
        altVideoUrl="/videos/compare-bots/footer.mp4"
      />
    </main>
  );
}
