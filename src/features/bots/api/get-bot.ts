'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { BotResponse } from '../model';

export async function getBot(params: { slug: string; locale: string }) {
  const res = await fetch(
    `${SERVER_URL}/api/bots?where[slug][equals]=${params.slug}&locale=${params.locale}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data: BotResponse = await res.json();
  const bot = data.docs[0];
  return { data: bot };
}
