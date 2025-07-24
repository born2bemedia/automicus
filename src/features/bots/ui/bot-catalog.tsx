'use client';

import { Divider, Text, Title } from '@/shared/ui/components/atoms';

import type { Bot, BotType } from '../model';
import { BotCard } from './bot-card';

export const BotCatalog = ({ bots }: { bots: Bot[] }) => {
  return (
    <section className="flex flex-col gap-20 px-10 pt-10 pb-20 max-md:p-6">
      <DealBot
        bots={bots}
        type="forex"
        title="Forex Bots"
        desc="Automated trading bots designed for major currency pairs. Optimize your forex strategy with precision execution, low risk, and adaptive performance across various market conditions."
      />
      <Divider />
      <DealBot
        title="Scalping Bots"
        bots={bots}
        desc="Capture quick profits by leveraging fast market movements with bots optimized for high-frequency scalping."
        type="scalping"
      />
      <Divider />
      <DealBot
        title="Gold Bots"
        bots={bots}
        desc="Specialised EAs for trading XAU/USD, combining precision entry strategies with adjustable risk settings for steady gold market performance."
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
    <section className="flex flex-col gap-10 max-md:gap-5">
      <div className="flex w-1/2 flex-col gap-5 max-md:w-full">
        <Title as="h2" size="4xl" color="light" weight="bold" uppercase>
          {title}
        </Title>
        <Text color="light" weight="medium">
          {desc}
        </Text>
      </div>
      <div className="flex items-stretch gap-1">
        {bots
          .filter(bot => bot.type === type)
          .slice(0, 2)
          .map(bot => (
            <BotCard
              key={bot.name}
              variant="full"
              showSaleBanner={false}
              layoutClassName="min-h-[582px]"
              {...bot}
            />
          ))}
      </div>
    </section>
  );
};
