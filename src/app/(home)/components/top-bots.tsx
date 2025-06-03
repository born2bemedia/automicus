'use client';

import { Button, Text } from '@/shared/ui/components/atoms';

const bots = [
  {
    name: 'Bot name',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '$100',
  },
  {
    name: 'Bot name',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '$100',
  },
  {
    name: 'Bot name',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '$100',
  },
];

export const TopBots = () => {
  return (
    <section className="flex gap-1 p-1 max-md:flex-col-reverse">
      <section className="flex w-1/2 flex-col gap-1 max-md:w-full">
        {bots.map((bot, i) => (
          <Card key={bot.name + i} {...bot} />
        ))}
      </section>
      <div className="relative w-1/2 max-md:h-[374px] max-md:w-full">
        <section className="flex flex-col gap-6 p-11 max-md:h-full max-md:justify-end max-md:p-6">
          <Text size="4xl" weight="bold" color="light" zIndex="1" uppercase>
            Automicus Top Bots
          </Text>
          <Button variant="secondary" zIndex="1">
            All Bots
          </Button>
        </section>
        <video
          src="/videos/home/top-bots.mp4"
          autoPlay
          loop
          muted
          className="absolute right-0 bottom-0 h-full w-full rounded-lg object-cover grayscale filter"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};

const Card = ({
  description,
  name,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) => {
  return (
    <article className="flex flex-col gap-6 rounded-lg bg-[#E5E5E5] p-10 max-md:gap-10">
      <section className="flex flex-col gap-2">
        <Text size="4xl" weight="bold">
          {name}
        </Text>
        <Text weight="medium">{description}</Text>
      </section>
      <section className="flex justify-between gap-2.5 max-md:flex-col">
        <Text size="4xl" weight="bold">
          {price}
        </Text>
        <div className="flex items-center gap-2.5">
          <Button>Buy</Button>
          <Button variant="secondary">Explore</Button>
        </div>
      </section>
    </article>
  );
};
