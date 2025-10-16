'use client';

import { useTranslations } from 'next-intl';

import { Divider, Text, Title } from '@/shared/ui/components/atoms';

import type { Bot, BotType } from '../model';
import { BotCard } from './bot-card';

export const BotCatalog = ({ bots }: { bots: Bot[] }) => {
  const t = useTranslations('botCatalog');

  return (
    <section className="flex flex-col gap-20 px-10 pt-10 pb-20 max-md:p-6">
      <DealBot
        bots={bots}
        type="forex"
        title={t('forex.title', { fallback: 'Forex Bots' })}
        desc={t('forex.desc', {
          fallback:
            'Automated trading bots designed for major currency pairs. Optimize your forex strategy with precision execution, low risk, and adaptive performance across various market conditions.',
        })}
      />
      <Divider />
      <DealBot
        title={t('scalping.title', { fallback: 'Scalping Bots' })}
        bots={bots}
        desc={t('scalping.desc', {
          fallback:
            'Capture quick profits by leveraging fast market movements with bots optimized for high-frequency scalping.',
        })}
        type="scalping"
      />
      <Divider />
      <DealBot
        title={t('gold.title', { fallback: 'Gold Bots' })}
        bots={bots}
        desc={t('gold.desc', {
          fallback:
            'Specialised EAs for trading XAU/USD, combining precision entry strategies with adjustable risk settings for steady gold market performance.',
        })}
        type="gold"
      />
      <DealBot
        title={t('multi-assets.title', { fallback: 'Multi-Assets Bots' })}
        bots={bots}
        desc={t('multi-assets.desc', {
          fallback:
            'Versatile EAs designed for trading multiple assets, from forex pairs to indices, gold, and crypto, delivering adaptive performance across diverse market conditions.',
        })}
        type="multi-assets"
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
          .slice(0, 3)
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
