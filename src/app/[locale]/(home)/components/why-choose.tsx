'use client';

import { type ReactNode, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';

const getReasons = (t: ReturnType<typeof useTranslations>) => [
  {
    number: '001',
    title: t('reasons.0.title', {
      fallback: 'Smart Automation for Every Strategy',
    }),
    description: t('reasons.0.description', {
      fallback:
        'From steady low-risk scalping to pair-specific systems, our bots are built to suit diverse goals without using dangerous tactics like martingale or grid.',
    }),
  },
  {
    number: '002',
    title: t('reasons.1.title', {
      fallback: 'Easy MT5 Integration',
    }),
    description: t('reasons.1.description', {
      fallback:
        'All bots work seamlessly with MetaTrader 5. Set up quickly and start trading without technical hurdles — ideal even for non-tech users.',
    }),
  },
  {
    number: '003',
    title: t('reasons.2.title', {
      fallback: 'Safe, Tested, and Proven',
    }),
    description: t('reasons.2.description', {
      fallback:
        'Every bot is stress-tested using months of historical data to ensure consistent results and low drawdowns, even on small accounts.',
    }),
  },
  {
    number: '004',
    title: t('reasons.3.title', {
      fallback: 'Control and Customization',
    }),
    description: t('reasons.3.description', {
      fallback:
        'Adjust lot sizing, risk levels, and trading logic to match your style — with documentation and support included.',
    }),
  },
  {
    number: '005',
    title: t('reasons.4.title', {
      fallback: 'Ongoing Improvements',
    }),
    description: t('reasons.4.description', {
      fallback:
        'We regularly update bot algorithms to reflect changing market conditions, and you get those upgrades automatically, free of charge.',
    }),
  },
];

export const WhyChoose = () => {
  const t = useTranslations('home.whyChoose');

  const reasons = useMemo(() => getReasons(t), [t]);

  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#E5E5E5] p-10 max-md:p-6">
      <Title>{t('title', { fallback: 'Why Choose Automicus Bots' })}</Title>
      <section className="flex flex-col gap-1">
        <CardsLayout>
          {reasons.slice(0, 3).map(reason => (
            <Card key={reason.number} {...reason} />
          ))}
        </CardsLayout>
        <CardsLayout>
          {reasons.slice(3, 5).map(reason => (
            <Card key={reason.number} {...reason} />
          ))}
        </CardsLayout>
      </section>
    </section>
  );
};

const Card = ({
  description,
  number,
  title,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <article className="flex flex-col gap-2 rounded-lg bg-white p-6">
      <Text size="4xl" weight="bold" opacity="veryLow">
        [{number}]
      </Text>
      <Text size="xl" weight="medium">
        {title}
      </Text>
      <Text>{description}</Text>
    </article>
  );
};

const CardsLayout = ({ children }: { children: ReactNode }) => (
  <section className="flex gap-1 max-md:flex-col">{children}</section>
);
