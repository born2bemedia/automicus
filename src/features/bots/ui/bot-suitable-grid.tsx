'use client';

import { GridCards } from '@/shared/ui/components/molecules';

import type { Bot } from '../model';

export const BotSuitableGrid = ({ suitableFor }: Pick<Bot, 'suitableFor'>) => (
  <GridCards values={suitableFor} />
);
