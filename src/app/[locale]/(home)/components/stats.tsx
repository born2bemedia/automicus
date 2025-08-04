'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms';

const getStats = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('monthlyRoi.title', { fallback: 'Monthly ROI' }),
    value: t('monthlyRoi.value', { fallback: 'up to +17%' }),
  },
  {
    title: t('drawdownReduced.title', { fallback: 'Drawdown reduced' }),
    value: t('drawdownReduced.value', { fallback: 'by 65%' }),
  },
  {
    title: t('timeSaved.title', { fallback: 'Time Saved:' }),
    value: t('timeSaved.value', { fallback: '20+ hours/week' }),
  },
  {
    title: t('setupIn.title', { fallback: 'Setup in' }),
    value: t('setupIn.value', { fallback: 'under 10 minutes' }),
  },
  {
    title: t('winRate.title', { fallback: 'Win Rate of' }),
    value: t('winRate.value', { fallback: '70% per session' }),
  },
];

export const Stats = () => {
  const t = useTranslations('home.stats');

  const stats = useMemo(() => getStats(t), [t]);

  return (
    <section className="m-1 flex justify-between gap-1 max-md:flex-col">
      {stats.map(stat => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
};

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <article className="border-stroke flex w-full flex-col rounded-lg border p-6">
    <Text size="xl" weight="medium" color="light">
      {title}
    </Text>
    <Text size="xl" weight="medium" color="secondary">
      {value}
    </Text>
  </article>
);
