'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { BotResponse } from '../model';

export const getBots = async ({
  params = { limit: 10, locale: 'en' },
}: {
  params?: { limit?: number; locale?: string };
} = {}) => {
  const res = await fetch(
    `${SERVER_URL}/api/bots?limit=${params.limit}&locale=${params.locale}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data: BotResponse = await res.json();
  return { data };
};
