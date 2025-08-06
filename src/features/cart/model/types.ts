import type { Bot, BotBundle } from '@/features/bots/model';

export type CartItem =
  | (Bot & { quantity: number })
  | (BotBundle & { quantity: number });
