import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicyList } from '@/features/policies/ui/policy-list';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import {
  PolicySection,
  PolicyText,
} from '@/features/policies/ui/policy-section';

export const metadata: Metadata = {
  title: 'Cookie Policy | Automicus',
  description:
    'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
  openGraph: {
    title: 'Cookie Policy | Automicus',
    description:
      'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Automicus',
    description:
      'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
  },
  robots: {
    index: false,
  },
};

export default async function CookiePolicyPage() {
  const t = await getTranslations('policies.cookiePolicy');

  return (
    <PolicyRender title={t('title')}>
      <PolicySection>
        <PolicyText>{t('0.text')}</PolicyText>
      </PolicySection>
      <PolicySection heading={t('1.title')}>
        <PolicyText>{t('1.text.0')}</PolicyText>
        <PolicyList
          values={[
            <span key={0}>
              <span className="font-bold">{t('1.list.0.label')}</span>
              {t('1.list.0.value')}
            </span>,
            <span key={1}>
              <span className="font-bold">{t('1.list.1.label')}</span>
              {t('1.list.1.value')}
            </span>,
            <span key={2}>
              <span className="font-bold">{t('1.list.2.label')}</span>
              {t('1.list.2.value')}
            </span>,
            <span key={3}>
              <span className="font-bold">{t('1.list.3.label')}</span>
              {t('1.list.3.value')}
            </span>,
          ]}
        />
        <PolicyText>
          {t('1.text.1')} <span className="font-bold">{t('1.text.2')}</span>{' '}
          {t('1.text.3')}{' '}
          <span className="font-bold">{t('1.text.4')}</span>{' '}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('2.title')}>
        <PolicyList
          values={[
            <span key={0}>
              <span className="font-bold">{t('2.list.0.label')}</span>{' '}
              {t('2.list.0.value')}
            </span>,
            <span key={1}>
              <span className="font-bold">{t('2.list.1.label')}</span>{' '}
              {t('2.list.1.value')}
            </span>,
            <span key={2}>
              <span className="font-bold">{t('2.list.2.label')}</span>{' '}
              {t('2.list.2.value')}
            </span>,
            <span key={3}>
              <span className="font-bold">{t('2.list.3.label')}</span>{' '}
              {t('2.list.3.value')}
            </span>,
          ]}
        />
      </PolicySection>
      <PolicySection heading={t('3.title')}>
        <PolicyText>
          <span className="font-bold">{t('3.text.0')}</span>
        </PolicyText>
        <PolicyList values={[t('3.list.0'), t('3.list.1'), t('3.list.2')]} />
        <PolicyText>{t('3.text.1')}</PolicyText>
      </PolicySection>
      <PolicySection heading={t('4.title')}>
        <PolicyText>
          {t('4.text.0')}{' '}
          <Link href="/privacy-policy" className="text-primary underline">
            {t('4.text.1')}
          </Link>
          .
        </PolicyText>
      </PolicySection>
    </PolicyRender>
  );
}
