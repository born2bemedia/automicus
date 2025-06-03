'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Text, Title } from '@/shared/ui/components/atoms';

const steps = [
  {
    title: 'Choose Your Bot',
    description:
      'Browse our collection of trading bots, each tailored to different strategies, risk levels, and asset classes.',
  },
  {
    title: 'Register & Fund Your Account',
    description:
      'Sign up with a supported broker and deposit funds — starting from as little as $100.',
  },
  {
    title: 'Set Up MetaTrader',
    description:
      'Install the free MetaTrader 5 platform — our bots are fully compatible and easy to connect.',
  },
  {
    title: 'Add the Bot',
    description:
      'Follow our clear integration guide to install the bot on your MT5 terminal.',
  },
  {
    title: 'Configure Settings',
    description:
      'Adjust key parameters like lot size, risk level, and trading frequency to match your strategy.',
  },
  {
    title: 'Let It Trade',
    description:
      'Once activated, your bot will trade automatically — 24/5 — while you monitor, refine, or relax.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="m-1 flex h-full gap-1 max-md:flex-col">
      <section className="border-stroke relative w-1/2 rounded-lg border p-6 max-md:h-[500px] max-md:w-full">
        <Title color="light" as="h2" uppercase>
          How It Works
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
        {steps.map((step, index) => (
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
