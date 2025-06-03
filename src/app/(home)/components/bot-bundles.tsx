'use client';

import { Button, Chip, Text, Title } from '@/shared/ui/components/atoms';

const bundles = [
  {
    name: 'Bot Bundle 1',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '€100',
    discount: '€117',
    bots: [
      { name: 'Bot 1', price: '€100', discount: '€117' },
      { name: 'Bot 2', price: '€100', discount: '€117' },
    ],
  },
  {
    name: 'Bot Bundle 2',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '€100',
    discount: '€117',
    bots: [
      { name: 'Bot 1', price: '€100', discount: '€117' },
      { name: 'Bot 2', price: '€100', discount: '€117' },
    ],
  },
  {
    name: 'Bot Bundle 3',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '€100',
    discount: '€117',
    bots: [
      { name: 'Bot 1', price: '€100', discount: '€117' },
      { name: 'Bot 2', price: '€100', discount: '€117' },
    ],
  },
];

export const BotBundles = () => {
  return (
    <section className="flex flex-col gap-10 px-10 pt-10 pb-20 max-md:p-6">
      <header className="flex items-center justify-between">
        <Title color="light" uppercase>
          Bot Bundles
        </Title>
        <div className="max-md:hidden">
          <Button variant="secondary">All Bot Bundles</Button>
        </div>
      </header>
      <section className="flex flex-col gap-1">
        {bundles.map(bundle => (
          <BundleCard key={bundle.name} {...bundle} />
        ))}
      </section>
    </section>
  );
};

const BundleCard = ({
  name,
  description,
  price,
  discount,
  bots,
}: {
  name: string;
  description: string;
  price: string;
  discount: string;
  bots: { name: string; price: string; discount: string }[];
}) => {
  return (
    <article className="flex items-center gap-20 rounded-lg bg-[rgba(229,229,229,0.1)] p-10 backdrop-blur-[15px] max-md:flex-col max-md:gap-10">
      <section className="flex w-[376px] flex-col gap-2 max-md:w-full">
        <Text size="3xl" color="light" weight="bold">
          {name}
        </Text>
        <Text color="light" weight="medium">
          {description}
        </Text>
      </section>
      <section className="flex w-full flex-col gap-10">
        <section className="flex gap-6 max-md:flex-col">
          {bots.map((bot, i) => (
            <BotCard key={bot.name + i} {...bot} />
          ))}
        </section>
        <section className="flex gap-20 max-md:flex-col max-md:gap-6">
          <div className="flex gap-2.5">
            <Text size="5xl" weight="bold" color="light">
              {price}
            </Text>
            <Chip>Save {discount}!</Chip>
          </div>
          <Button fullWidth>Buy</Button>
        </section>
      </section>
    </article>
  );
};

const BotCard = ({
  name,
  price,
  discount,
}: {
  name: string;
  price: string;
  discount: string;
}) => {
  return (
    <article className="border-stroke flex w-full items-center justify-between rounded-lg border p-6">
      <Text size="3xl" weight="bold" color="light">
        {name}
      </Text>
      <div className="flex gap-2.5">
        <Text size="3xl" weight="bold" color="light">
          {price}
        </Text>
        <Chip>Save {discount}!</Chip>
      </div>
    </article>
  );
};
