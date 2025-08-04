'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('steps.0.title', { fallback: 'Choose Your Bot' }),
    description: t('steps.0.description', {
      fallback:
        'Browse our collection of trading bots, each tailored to different strategies, risk levels, and asset classes.',
    }),
  },
  {
    title: t('steps.1.title', { fallback: 'Register & Fund Your Account' }),
    description: t('steps.1.description', {
      fallback:
        'Sign up with a supported broker and deposit funds — starting from as little as $100.',
    }),
  },
  {
    title: t('steps.2.title', { fallback: 'Set Up MetaTrader' }),
    description: t('steps.2.description', {
      fallback:
        'Install the free MetaTrader 5 platform — our bots are fully compatible and easy to connect.',
    }),
  },
  {
    title: t('steps.3.title', { fallback: 'Add the Bot' }),
    description: t('steps.3.description', {
      fallback:
        'Follow our clear integration guide to install the bot on your MT5 terminal.',
    }),
  },
  {
    title: t('steps.4.title', { fallback: 'Configure Settings' }),
    description: t('steps.4.description', {
      fallback:
        'Adjust key parameters like lot size, risk level, and trading frequency to match your strategy.',
    }),
  },
  {
    title: t('steps.5.title', { fallback: 'Let It Trade' }),
    description: t('steps.5.description', {
      fallback:
        'Once activated, your bot will trade automatically — 24/5 — while you monitor, refine, or relax.',
    }),
  },
];

export const HowItWorks = () => {
  const t = useTranslations('home.howItWorks');

  return (
    <section className="m-1 flex h-full gap-1 max-md:flex-col">
      <section className="border-stroke relative w-1/2 rounded-lg border p-6 max-md:h-[500px] max-md:w-full">
        <Title color="light" as="h2" uppercase>
          {t('title', { fallback: 'How It Works' })}
        </Title>
        <Image
          className="rounded-br-lg object-cover"
          src="/images/home/robot.png"
          alt="how-it-works"
          unoptimized
          fill
        />
      </section>
      <section className="flex flex-col gap-1 max-md:w-full">
        {getSteps(t).map((step, index) => (
          <Card key={step.title} {...step} number={index + 1} />
        ))}
      </section>
    </section>
  );
};

const Card = ({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      onClick={() => setIsOpen(prev => !prev)}
      className="border-stroke flex cursor-pointer items-center gap-2 rounded-lg border p-6"
    >
      <div className="flex h-[60px] w-[60px] shrink-0 rotate-90 transform items-center justify-center">
        <Text size="4xl" weight="bold" color="light" opacity="veryLow">
          0{number}
        </Text>
      </div>
      <section className="flex flex-col gap-2 overflow-hidden">
        <Text size="xl" weight="medium" color="light">
          {title}
        </Text>
        <div
          className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen
              ? 'max-h-40 translate-x-0 opacity-100'
              : 'max-h-0 -translate-x-4 opacity-0'
          }`}
        >
          <Text color="light">{description}</Text>
        </div>
      </section>
    </article>
  );
};
