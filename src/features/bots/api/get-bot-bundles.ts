'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { BotBundleResponse } from '../model';

export const getBotBundles = async ({
  id,
  params = { limit: 10 },
}: {
  id?: number;
  params?: { limit?: number };
} = {}) => {
  const res = await fetch(
    `${SERVER_URL}/api/bundles${id ? `/${id}` : ''}?limit=${params.limit}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data: BotBundleResponse = await res.json();
  return { data };
};
