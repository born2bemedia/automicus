import { useTranslations } from 'next-intl';

import { CubesFooter } from '@/shared/ui/components/organisms';

import { BankTransferInfo, WhatNext } from './components';

export default function ThankYouWire() {
  const t = useTranslations('thankYouWire.footer');

  return (
    <main>
      <BankTransferInfo />
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
