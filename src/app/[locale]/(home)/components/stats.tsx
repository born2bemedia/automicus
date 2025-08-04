'use client';

import { Text } from '@/shared/ui/components/atoms';

const stats = [
  { title: 'Monthly ROI', value: 'up to +17%' },
  { title: 'Drawdown reduced', value: 'by 65%' },
  { title: 'Time Saved:', value: '20+ hours/week' },
  { title: 'Setup in', value: 'under 10 minutes' },
  { title: 'Win Rate of', value: '70% per session' },
];

export const Stats = () => {
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
