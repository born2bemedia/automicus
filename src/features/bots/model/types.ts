import type { Response } from '@/shared/api';

export type Bot = {
  id: number;
  name: string;
  description: string;
  discount: number;
  price: number;
};

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
};

export type BotBundleResponse = {
  docs: BotBundle[];
} & Response;
