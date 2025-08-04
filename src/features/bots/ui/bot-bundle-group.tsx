'use client';

import { Fragment, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { Divider, Title } from '@/shared/ui/components/atoms';

import type { BotBundle, BotBundleType } from '../model';
import { BotBundleCard } from './bot-bundle-card';

// const bundleTitles: Record<string, string> = {
//   'high-frequency': 'High-Frequency & Scalping Bot Bundles',
//   'trend-following': 'Trend-Following & Momentum Bot Bundles',
//   mixed: 'Mixed Strategy Bot Bundles',
// };

const getBundleTitles = (t: ReturnType<typeof useTranslations>) => ({
  'high-frequency': t('high-frequency', {
    fallback: 'High-Frequency & Scalping Bot Bundles',
  }),
  'trend-following': t('trend-following', {
    fallback: 'Trend-Following & Momentum Bot Bundles',
  }),
  mixed: t('mixed', { fallback: 'Mixed Strategy Bot Bundles' }),
});

export const BotBundleGroup = ({ bundles }: { bundles: BotBundle[] }) => {
  const t = useTranslations('botBundles.botBundleGroup');

  const groupedBundles = useMemo(
    () =>
      bundles.reduce<Record<BotBundleType, BotBundle[]>>(
        (acc, bundle) => {
          (acc[bundle.type] ||= []).push(bundle);
          return acc;
        },
        {
          mixed: [],
          'high-frequency': [],
          'trend-following': [],
        },
      ),
    [bundles],
  );

  const bundleTitles = getBundleTitles(t);

  return (
    <section className="flex flex-col gap-20 px-10 pt-10 pb-20 max-md:p-6">
      {Object.entries(groupedBundles).map(([type, bundles]) => (
        <Fragment key={type}>
          <section className="flex flex-col gap-10">
            <Title as="h2" color="light" uppercase>
              {bundleTitles[type as BotBundleType]}
            </Title>
            {bundles.map((bundle, i) => (
              <BotBundleCard key={bundle.name + i} {...bundle} />
            ))}
          </section>
          {Object.entries(groupedBundles).slice(-1)[0][0] !== type && (
            <Divider />
          )}
        </Fragment>
      ))}
    </section>
  );
};
