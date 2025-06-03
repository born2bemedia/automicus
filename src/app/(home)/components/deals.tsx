'use client';

import { Button, Chip, Text, Title } from '@/shared/ui/components/atoms';

const bots = [
  {
    title: '[BOT NAME]',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '€100',
    discount: '€117',
  },
  {
    title: '[BOT NAME]',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '€100',
    discount: '€117',
  },
  {
    title: '[BOT NAME]',
    description:
      'Expert-crafted trading bots that automate your strategies with precision — no martingale, no grid, just consistent, controlled performance. From low-risk scalpers to thoughtful, pair-specific EAs, each bot is tested and built to work reliably, even with small deposits.',
    price: '€100',
    discount: '€117',
  },
];

export const Deals = () => {
  return (
    <section className="relative m-1 flex flex-col gap-10 overflow-hidden px-10 py-20">
      <Title color="light" align="center" zIndex="1" uppercase>
        Deals
      </Title>
      <section className="flex justify-center gap-1 max-md:flex-col">
        {bots.map((bot, i) => (
          <Card key={bot.title + i} {...bot} />
        ))}
      </section>
      <section className="flex justify-center">
        <Button variant="secondary" zIndex="1">
          All Deals
        </Button>
      </section>
      <video
        src="/videos/home/particles.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-[-300px] h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};

const Card = ({
  title,
  description,
  price,
  discount,
}: {
  title: string;
  description: string;
  price: string;
  discount: string;
}) => {
  return (
    <article className="z-10 flex h-[582px] max-w-[350px] flex-col justify-between rounded-lg bg-[rgba(229,229,229,0.1)] p-10 backdrop-blur-[15px] max-md:w-full">
      <section className="flex flex-col gap-2">
        <Text size="3xl" color="light" weight="bold">
          {title}
        </Text>
        <Text color="light" weight="medium">
          {description}
        </Text>
      </section>
      <section className="flex flex-col gap-9">
        <div className="flex gap-2.5">
          <Text size="5xl" color="light" weight="bold">
            {price}
          </Text>
          <Chip>Save {discount}!</Chip>
        </div>
        <div className="flex items-center gap-2.5">
          <Button>Buy</Button>
          <Button variant="secondary">Explore</Button>
        </div>
      </section>
    </article>
  );
};
