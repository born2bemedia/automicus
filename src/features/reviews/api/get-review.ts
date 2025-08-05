'use server';

import { SERVER_URL } from '@/shared/config/env';

export async function getReview({
  slug,
  locale = 'en',
}: {
  slug: string;
  locale?: string;
}) {
  const res = await fetch(
    `${SERVER_URL}/api/reviews?where[slug][equals]=${slug}&locale=${locale}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = await res.json();
  return { data: data.docs[0] };
}
