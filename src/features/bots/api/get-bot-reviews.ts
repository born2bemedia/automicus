'use server';

import { SERVER_URL } from '@/shared/config/env';

export async function getBotReviews() {
  const res = await fetch(`${SERVER_URL}/api/reviews`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return { data: data.docs };
}
