'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';
import { Title } from '@/shared/ui/components/atoms';

export const CompareBots = () => {
  const items = [
    {
      title: 'Feature',
      children: [
        'Trading Pairs',
        'Timeframe',
        'Trading Strategy',
        'Risk Management',
        'Scalping Capabilities',
        'Hedging',
        'AI/Algorithmic Trading',
        'Profitability',
        'Customization',
        'System Requirements',
        'Min. Account Balance',
        'Trade Execution Method',
        'Time-Specific Trading',
      ],
    },
    {
      title: 'ProfitPulse FX',
      children: [
        'Major and minor pairs',
        'M15',
        'Scalping, Trend, Breakout',
        'Adjustable SL/TP, Auto risk',
        'Yes',
        'No',
        'No',
        'High monthly returns',
        'High (Customizable settings)',
        'MT4/MT5, VPS',
        '$150',
        'Multi-strategy execution',
        'No',
      ],
    },
    {
      title: 'SpreadMaster FX',
      children: [
        'Major and minor pairs',
        'M1, M5',
        'Customizable strategies',
        'SL/TP, Auto risk management',
        'Yes',
        'No',
        'No',
        'Steady, low-risk profits',
        'High (Customizable strategies)',
        'MT4/MT5, VPS',
        '$100',
        'Customizable execution',
        'No',
      ],
    },
    {
      title: 'Night Scalper',
      children: [
        'XAUUSD',
        'M1',
        'Mean-Reversion',
        'TP, SL, Trailing Stop',
        'Yes',
        'No',
        'Yes',
        'High-probability trades',
        'Medium (adjustable settings)',
        'MT4, VPS',
        '$100',
        'Single trade at a time',
        'Yes (American session)',
      ],
    },
    {
      title: 'HedgeMaster Scalper',
      children: [
        'XAUUSD, EUR/USD',
        'M1, M5',
        'AI-powered, Hedging, Scalping',
        'Hedging strategies and risk management',
        'Yes',
        'Yes',
        'Yes',
        'Low-risk, high-frequency trades',
        'High (Customizable risk, lot size)',
        'MT4/MT5, VPS',
        '$100',
        'Multi-strategy, Hedging',
        'Yes (specific time frames)',
      ],
    },
    {
      title: 'GoldTrade Master',
      children: [
        'XAUUSD',
        'Daily (D1)',
        'Support & Resistance Breakout',
        'SL/TP, Trailing Stop',
        'No',
        'No',
        'No',
        'Low-risk, steady growth',
        'Low (focused on Gold)',
        'MT4/MT5, VPS',
        '$200',
        'Single trade at a time',
        'Yes (Daily timeframe)',
      ],
    },
    {
      title: 'GoldHunter Bot',
      children: [
        'XAUUSD',
        'M1',
        'Mean-Reversion',
        'SL/TP, Risk management',
        'Yes',
        'No',
        'No',
        'Steady, low-risk profits',
        'Medium (adjustable settings)',
        'MT4, VPS',
        '$300',
        'Automated, market-driven',
        'Yes (specific time frames)',
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-10 px-10 pt-10 pb-20 max-md:p-6">
      <Title size="4xl" color="light" uppercase>
        Compare All Automicus Bots
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
