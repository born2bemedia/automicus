import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyList } from '@/features/policies/ui/policy-list';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import {
  PolicySection,
  PolicyText,
} from '@/features/policies/ui/policy-section';

export const metadata: Metadata = {
  title: 'Refund Policy | Automicus',
  openGraph: {
    title: 'Refund Policy | Automicus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | Automicus',
  },
  robots: {
    index: false,
  },
};

export default async function RefundPolicyPage() {
  const t = await getTranslations('policies.refundPolicy');

  return (
    <PolicyRender title={t('title')}>
      <PolicySection>
        <PolicyText>{t('0.text')}</PolicyText>
      </PolicySection>
      <PolicySection heading={t('1.title')}>
        <PolicyText>
          {t('1.text.0')} <span className="font-bold">{t('1.text.1')}</span>{' '}
          {t('1.text.2')}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('2.title')}>
        <PolicyText>{t('2.text.0')}</PolicyText>
        <PolicyText>
          <span className="font-bold">{t('2.text.1')}</span> <br />
          {t('2.text.2')}{' '}
          <span className="font-bold">[insert contact email]</span> <br />
          {t('2.text.3')} <span className="font-bold">{t('2.text.4')}</span>
        </PolicyText>
        <PolicyText>{t('2.text.5')}</PolicyText>
        <PolicyList
          values={[
            t('2.list.0'),
            t('2.list.1'),
            t('2.list.2'),
            t('2.list.3'),
            t('2.list.4'),
          ]}
        />
        <PolicyText>
          <span className="font-bold">{t('2.text.6')}</span> <br />
          {t('2.text.7')}
        </PolicyText>
        <PolicyText>
          <span className="font-bold">{t('2.text.8')}</span> <br />
          {t('2.text.9')}
        </PolicyText>
        <PolicyText>{t('2.text.10')}</PolicyText>
      </PolicySection>
      <PolicySection heading={t('3.title')}>
        <PolicyList
          values={[
            <span key={0}>
              {t('3.list.0.0')}{' '}
              <span className="text-primary font-bold">Automicus</span>{' '}
              {t('3.list.0.1')}
            </span>,
            t('3.list.1'),
            t('3.list.2'),
          ]}
        />
      </PolicySection>
      <PolicySection heading={t('4.title')}>
        <PolicyText>{t('4.text')}</PolicyText>
      </PolicySection>
    </PolicyRender>
  );
}
