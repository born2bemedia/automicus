'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Title } from '@/shared/ui/components/atoms';

export const CompareBots = () => {
  const t = useTranslations('compareBots.table');

  const items = [
    {
      title: t('0.title', { fallback: 'Feature' }),
      children: [
        t('0.children.0', { fallback: 'Trading Pairs' }),
        t('0.children.1', { fallback: 'Timeframe' }),
        t('0.children.2', { fallback: 'Trading Strategy' }),
        t('0.children.3', { fallback: 'Risk Management' }),
        t('0.children.4', { fallback: 'Scalping Capabilities' }),
        t('0.children.5', { fallback: 'Hedging' }),
        t('0.children.6', { fallback: 'AI/Algorithmic Trading' }),
        t('0.children.7', { fallback: 'Profitability' }),
        t('0.children.8', { fallback: 'Customization' }),
        t('0.children.9', { fallback: 'System Requirements' }),
        t('0.children.10', { fallback: 'Min. Account Balance' }),
        t('0.children.11', { fallback: 'Trade Execution Method' }),
        t('0.children.12', { fallback: 'Time-Specific Trading' }),
      ],
    },
    {
      title: t('1.title', { fallback: 'ProfitPulse FX' }),
      children: [
        t('1.children.0', { fallback: 'Major and minor pairs' }),
        t('1.children.1', { fallback: 'M15' }),
        t('1.children.2', { fallback: 'Scalping, Trend, Breakout' }),
        t('1.children.3', { fallback: 'Adjustable SL/TP, Auto risk' }),
        t('1.children.4', { fallback: 'Yes' }),
        t('1.children.5', { fallback: 'No' }),
        t('1.children.6', { fallback: 'No' }),
        t('1.children.7', { fallback: 'High monthly returns' }),
        t('1.children.8', { fallback: 'High (Customizable settings)' }),
        t('1.children.9', { fallback: 'MT4/MT5, VPS' }),
        t('1.children.10', { fallback: '$150' }),
        t('1.children.11', { fallback: 'Multi-strategy execution' }),
        t('1.children.12', { fallback: 'No' }),
      ],
    },
    {
      title: t('2.title', { fallback: 'SpreadMaster FX' }),
      children: [
        t('2.children.0', { fallback: 'Major and minor pairs' }),
        t('2.children.1', { fallback: 'M1, M5' }),
        t('2.children.2', { fallback: 'Customizable strategies' }),
        t('2.children.3', { fallback: 'SL/TP, Auto risk management' }),
        t('2.children.4', { fallback: 'Yes' }),
        t('2.children.5', { fallback: 'No' }),
        t('2.children.6', { fallback: 'No' }),
        t('2.children.7', { fallback: 'Steady, low-risk profits' }),
        t('2.children.8', { fallback: 'High (Customizable strategies)' }),
        t('2.children.9', { fallback: 'MT4/MT5, VPS' }),
        t('2.children.10', { fallback: '$100' }),
        t('2.children.11', { fallback: 'Customizable execution' }),
        t('2.children.12', { fallback: 'No' }),
      ],
    },
    {
      title: 'Night Scalper',
      children: [
        t('3.children.0', { fallback: 'XAUUSD' }),
        t('3.children.1', { fallback: 'M1' }),
        t('3.children.2', { fallback: 'Mean-Reversion' }),
        t('3.children.3', { fallback: 'TP, SL, Trailing Stop' }),
        t('3.children.4', { fallback: 'Yes' }),
        t('3.children.5', { fallback: 'No' }),
        t('3.children.6', { fallback: 'Yes' }),
        t('3.children.7', { fallback: 'High-probability trades' }),
        t('3.children.8', { fallback: 'Medium (adjustable settings)' }),
        t('3.children.9', { fallback: 'MT4, VPS' }),
        t('3.children.10', { fallback: '$100' }),
        t('3.children.11', { fallback: 'Single trade at a time' }),
        t('3.children.12', { fallback: 'Yes (American session)' }),
      ],
    },
    {
      title: t('4.title', { fallback: 'HedgeMaster Scalper' }),
      children: [
        t('4.children.0', { fallback: 'XAUUSD, EUR/USD' }),
        t('4.children.1', { fallback: 'M1, M5' }),
        t('4.children.2', { fallback: 'AI-powered, Hedging, Scalping' }),
        t('4.children.3', {
          fallback: 'Hedging strategies and risk management',
        }),
        t('4.children.4', { fallback: 'Yes' }),
        t('4.children.5', { fallback: 'Yes' }),
        t('4.children.6', { fallback: 'Yes' }),
        t('4.children.7', { fallback: 'Low-risk, high-frequency trades' }),
        t('4.children.8', { fallback: 'High (Customizable risk, lot size)' }),
        t('4.children.9', { fallback: 'MT4/MT5, VPS' }),
        t('4.children.10', { fallback: '$100' }),
        t('4.children.11', { fallback: 'Multi-strategy, Hedging' }),
        t('4.children.12', { fallback: 'Yes (specific time frames)' }),
      ],
    },
    {
      title: t('5.title', { fallback: 'GoldTrade Master' }),
      children: [
        t('5.children.0', { fallback: 'XAUUSD' }),
        t('5.children.1', { fallback: 'Daily (D1)' }),
        t('5.children.2', { fallback: 'Support & Resistance Breakout' }),
        t('5.children.3', { fallback: 'SL/TP, Trailing Stop' }),
        t('5.children.4', { fallback: 'No' }),
        t('5.children.5', { fallback: 'No' }),
        t('5.children.6', { fallback: 'No' }),
        t('5.children.7', { fallback: 'Low-risk, steady growth' }),
        t('5.children.8', { fallback: 'Low (focused on Gold)' }),
        t('5.children.9', { fallback: 'MT4/MT5, VPS' }),
        t('5.children.10', { fallback: '$200' }),
        t('5.children.11', { fallback: 'Single trade at a time' }),
        t('5.children.12', { fallback: 'Yes (Daily timeframe)' }),
      ],
    },
    {
      title: t('6.title', { fallback: 'GoldHunter Bot' }),
      children: [
        t('6.children.0', { fallback: 'XAUUSD' }),
        t('6.children.1', { fallback: 'M1' }),
        t('6.children.2', { fallback: 'Mean-Reversion' }),
        t('6.children.3', { fallback: 'SL/TP, Risk management' }),
        t('6.children.4', { fallback: 'Yes' }),
        t('6.children.5', { fallback: 'No' }),
        t('6.children.6', { fallback: 'No' }),
        t('6.children.7', { fallback: 'Steady, low-risk profits' }),
        t('6.children.8', { fallback: 'Medium (adjustable settings)' }),
        t('6.children.9', { fallback: 'MT4, VPS' }),
        t('6.children.10', { fallback: '$300' }),
        t('6.children.11', { fallback: 'Automated, market-driven' }),
        t('6.children.12', { fallback: 'Yes (specific time frames)' }),
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-10 px-10 pt-10 pb-20 max-md:p-6">
      <Title size="4xl" color="light" uppercase>
        {t('title', { fallback: 'Compare All Automicus Bots' })}
      </Title>
      <section className="flex gap-[6px] overflow-x-auto rounded-lg bg-[rgba(229,229,229,0.10)] p-10 backdrop-blur-[15px] max-md:p-5">
        {items.map(item => (
          <div key={item.title} className="flex flex-col gap-[6px]">
            <Item type="heading">{item.title}</Item>
            {item.children.map((child, index) => (
              <Item type="content" key={index}>
                {child}
              </Item>
            ))}
          </div>
        ))}
      </section>
    </section>
  );
};

const Item = ({
  children,
  type,
}: {
  children: ReactNode;
  type: 'heading' | 'content';
}) => {
  return (
    <section
      className={cn(
        'h-[85px] w-[186px] shrink-0 rounded-lg px-5 py-2.5 text-base',
        type === 'heading'
          ? 'bg-[#CBFF00] font-medium text-[#010101]'
          : 'bg-[#212121] text-[rgba(255,255,255,0.70)]',
      )}
    >
      {children}
    </section>
  );
};
