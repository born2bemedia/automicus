import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getBots } from '@/features/bots/api';
import { BotCatalog } from '@/features/bots/ui/bot-catalog';

import { CubesFooter, VideoHero } from '@/shared/ui/components/organisms';

export const metadata: Metadata = {
  title: 'Trading Bots Catalog | Automicus',
  description:
    'Explore our full catalog of advanced trading bots for Forex and Gold – compare strategies, features, and find your perfect match.',
  openGraph: {
    title: 'Trading Bots Catalog | Automicus',
    description:
      'Explore our full catalog of advanced trading bots for Forex and Gold – compare strategies, features, and find your perfect match.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trading Bots Catalog | Automicus',
    description:
      'Explore our full catalog of advanced trading bots for Forex and Gold – compare strategies, features, and find your perfect match.',
  },
};

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data } = await getBots({ params: { locale } });

  const t = await getTranslations('catalog');

  return (
    <main>
      <VideoHero
        title={t('hero.title', { fallback: 'Explore Our Bots' })}
        text={t('hero.text', {
          fallback: 'Advanced automation for smarter, faster trading.',
        })}
        videoUrl="/videos/catalog/hero.mp4"
        metaButton={{
          label: t('hero.btn', { fallback: 'Get Assistance' }),
          url: '/contact',
        }}
      />
      <BotCatalog bots={data.docs.reverse()} />
      <CubesFooter
        title={t('footer.title', { fallback: 'Special Deals & Bundles' })}
        text={t('footer.text', {
          fallback:
            'Automicus offers exclusive discounts and curated bot bundles to help you save more while automating your trading.',
        })}
        metaButtons={[
          {
            label: t('footer.btn', { fallback: 'Check Deals' }),
            url: '/catalog',
            variant: 'primary',
          },
          {
            label: t('footer.btn2', { fallback: 'Check Bundles' }),
            url: '/bot-bundles',
            variant: 'secondary',
          },
        ]}
      />
    </main>
  );
}
