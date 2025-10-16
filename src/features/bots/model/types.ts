import type { Response } from '@/shared/api';

export type Bot = {
  id: number;
  name: string;
  description: string;
  discount: number;
  price: number;
  type: BotType;
  excerpt: string;
  deals: string;
  slug: string;
  summary: string;
  howItWorks: BotTextBlock[];
  suitableFor: BotTextBlock[];
  features: BotTextBlock[];
  pin?: boolean;
};

export type BotTextBlock = { id: string; title: string; description: string };

export type BotType = 'forex' | 'scalping' | 'gold' | 'multi-assets';

export type BotResponse = {
  docs: Bot[];
} & Response;

export type BotBundle = {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  bots: Bot[];
  type: BotBundleType;
};

export type BotBundleType = 'high-frequency' | 'trend-following' | 'mixed';

export type BotBundleResponse = {
  docs: BotBundle[];
} & Response;

export type BotReview = {
  id: string;
  bot: Bot;
  title: string;
  slug: string;
  excerpt: string;
  content: unknown;
};
