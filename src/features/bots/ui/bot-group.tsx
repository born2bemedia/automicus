'use client';

import { Fragment, useMemo } from 'react';

import { Divider, Title } from '@/shared/ui/components/atoms';

import type { Bot, BotType } from '../model';
import { BotCard } from './bot-card';

const botTitles: Record<string, string> = {
  forex: 'Forex Bot Deals',
  'ai-powered': 'AI-Powered Bot Deals',
  gold: 'Gold Bot Deals',
};

export const BotGroup = ({ bots }: { bots: Bot[] }) => {
  const groupedBundles = useMemo(
    () =>
      bots.reduce<Record<BotType, Bot[]>>(
        (acc, bundle) => {
          (acc[bundle.type] ||= []).push(bundle);
          return acc;
        },
        {
          forex: [],
          'ai-powered': [],
          gold: [],
        },
      ),
    [bots],
  );

  return (
    <section className="flex flex-col gap-20 px-10 pt-10 pb-20 max-md:p-6">
      {Object.entries(groupedBundles).map(([type, bots]) => (
        <Fragment key={type}>
          <section className="flex flex-col gap-10">
            <Title as="h2" color="light" uppercase>
              {botTitles[type]}
            </Title>
            <section className="grid grid-cols-3 gap-1 max-md:grid-cols-1">
              {bots.map((bot, i) => (
                <BotCard
                  key={bot.name + i}
                  variant="full"
                  layoutClassName="max-w-[100%]"
                  {...bot}
                />
              ))}
            </section>
          </section>
          {Object.entries(groupedBundles).slice(-1)[0][0] !== type && (
            <Divider />
          )}
        </Fragment>
      ))}
    </section>
  );
};
