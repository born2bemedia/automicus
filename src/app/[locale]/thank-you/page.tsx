import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CubesFooter } from '@/shared/ui/components/organisms';

import { BankTransferInfo, WhatNext } from './components';

export const metadata: Metadata = {
  title: 'Thank You Wire',
  openGraph: {
    title: 'Thank You Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You Wire',
  },
  robots: {
    index: false,
  },
};

import { notFound } from 'next/navigation';

export default async function ThankYouWire({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; date?: string; total?: string }>;
}) {
  const { orderId, date, total } = await searchParams;

  if (!orderId || !date || !total) {
    notFound();
  }

  const t = await getTranslations('thankYouWire.footer');

  return (
    <main>
      <BankTransferInfo orderId={orderId} date={date} total={total} />
      <WhatNext />
      <CubesFooter
        title={t('title', { fallback: 'Need Assistance?' })}
        text={t('text', {
          fallback: 'Have questions about your order or setup?',
        })}
        metaButtons={[
          {
            label: t('btn', { fallback: 'Contact Support' }),
            url: '/contact',
            variant: 'primary',
          },
        ]}
      />
    </main>
  );
}
