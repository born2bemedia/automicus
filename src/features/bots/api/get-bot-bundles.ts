'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { BotBundleResponse } from '../model';

export const getBotBundles = async ({
  id,
  params = { limit: 10, locale: 'en' },
}: {
  id?: number;
  params?: { limit?: number; locale?: string };
} = {}) => {
  const res = await fetch(
    `${SERVER_URL}/api/bundles${id ? `/${id}` : ''}?limit=${params.limit}&locale=${params.locale}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 60 * 15,
      },
    },
  );
  const data: BotBundleResponse = await res.json();

  return { data };
};
