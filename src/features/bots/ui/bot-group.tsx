'use client';

import { Divider, Text, Title } from '@/shared/ui/components/atoms';

import type { Bot, BotType } from '../model';
import { BotCard } from './bot-card';

export const BotGroup = ({ bots }: { bots: Bot[] }) => {
  return (
    <section className="flex flex-col gap-20 px-10 pt-10 pb-20 max-md:p-6">
      <DealBot
        bots={bots}
        type="forex"
        title="Forex Bot Deals"
        desc="Maximize your forex trading with exclusive discounts on automated bots designed for the major currency pairs. These deals give you access to top-performing bots for less."
      />
      <Divider />
      <DealBot
        title="Scalping Bot Deals"
        bots={bots}
        desc="Capture quick profits by leveraging fast market movements with bots optimized for high-frequency scalping."
        type="scalping"
      />
      <Divider />
      <DealBot
        title="Gold Bot Deals"
        bots={bots}
        desc="Take advantage of exclusive offers on bots tailored for Gold trading. These bots are designed to optimize your entry strategies and manage risk for steady performance in the Gold market."
        type="gold"
      />
    </section>
  );
};

const DealBot = ({
  bots,
  type,
  title,
  desc,
}: {
  bots: Bot[];
  type: BotType;
  title: string;
  desc: string;
}) => {
  return (
    <section className="flex gap-10 max-md:flex-col max-md:gap-5">
      <div className="flex w-1/2 flex-col gap-5 max-md:w-full">
        <Title as="h2" size="4xl" color="light" weight="bold" uppercase>
          {title}
        </Title>
        <Text color="light" weight="medium">
          {desc}
        </Text>
      </div>
      <BotCard
        variant="full"
        layoutClassName="w-1/2 max-md:w-full"
        {...(bots.find(item => item.type === type && item.pin) ?? bots[0])}
      />
    </section>
  );
};
