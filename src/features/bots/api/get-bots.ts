'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { BotResponse } from '../model';

export const getBots = async ({
  id,
  params = { limit: 10 },
}: {
  id?: number;
  params?: { limit?: number };
}) => {
  const res = await fetch(
    `${SERVER_URL}/api/bots${id ? `/${id}` : ''}?limit=${params.limit}`,
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
