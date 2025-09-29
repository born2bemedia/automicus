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
  title: 'Privacy Policy | Automicus',
  openGraph: {
    title: 'Privacy Policy | Automicus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Automicus',
  },
  robots: {
    index: false,
  },
};

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('policies.privacyPolicy');

  return (
    <PolicyRender title={t('title', { fallback: 'Privacy Policy' })}>
      <PolicySection>
        <PolicyText>{t('0.text.0')}</PolicyText>
        <PolicyText>{t('0.text.1')}</PolicyText>
        <PolicyText>{t('0.text.2')}</PolicyText>
      </PolicySection>
      <PolicySection
        heading={t('1.title', { fallback: 'Information We Collect' })}
      >
        <PolicyText>
          <span className="text-primary">AQM Global Ltd</span> {t('1.text.1')}{' '}
          <Link
            href="https://automicus.com/"
            className="text-primary underline"
          >
            https://automicus.com/
          </Link>
        </PolicyText>
        <PolicyList
          heading={t('1.text.3')}
          values={[
            `${t('1.list.0.label')} AQM Global Ltd`,
            `${t('1.list.1.label')} 16735132`,
            `${t('1.list.2.label')} 2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE`,
            `${t('1.list.3.label')} 5th Floor, Office 502, 70 Brompton Road, London SW3 1ER, United Kingdom`,
            `${t('1.list.4.label')} info@automicus.com`,
            `${t('1.list.6.label')} Automicus`,
          ]}
        />
      </PolicySection>
      <PolicySection heading={t('2.title')}>
        <PolicyText>
          <span className="font-bold">{t('2.text.0')}</span> <br />
          {t('2.text.1')}
        </PolicyText>
        <PolicyText>
          <span className="font-bold">{t('2.text.2')}</span> <br />
          {t('2.text.3')}
        </PolicyText>
        <PolicyText>
          <span className="font-bold">{t('2.text.4')}</span> <br />
          {t('2.text.5')}
        </PolicyText>
        <PolicyText>
          <span className="font-bold">{t('2.text.6')}</span> <br />
          {t('2.text.7')}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('3.title')}>
        <PolicyText>
          <span className="font-bold">{t('3.text.0')}</span> <br />
          {t('3.text.1')}
        </PolicyText>
        <PolicyText>
          <span className="font-bold">{t('3.text.2')}</span> <br />
          {t('3.text.3')}
        </PolicyText>
        <PolicyText>
          <span className="font-bold">{t('3.text.4')}</span> <br />
          {t('3.text.5')}
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('4.title')}>
        <PolicyText>{t('4.text.0')}</PolicyText>
        <PolicyList
          values={[
            t('4.list.0'),
            t('4.list.1'),
            t('4.list.2'),
            t('4.list.3'),
            t('4.list.4'),
            t('4.list.5'),
          ]}
        />
        <PolicyText>{t('4.text.1')}</PolicyText>
      </PolicySection>
      <PolicySection heading={t('5.title')}>
        <PolicyText>{t('5.text')}</PolicyText>
      </PolicySection>
      <PolicySection heading={t('6.title')}>
        <PolicyText>{t('6.text.0')}</PolicyText>
        <PolicyList
          values={[
            t('6.list.0'),
            t('6.list.1'),
            t('6.list.2'),
            t('6.list.3'),
            t('6.list.4'),
            t('6.list.5'),
            t('6.list.6'),
            t('6.list.7'),
          ]}
        />
        <PolicyText>
          {t('6.text.1')}{' '}
          <Link
            href="mailto:info@automicus.com"
            className="text-primary underline"
          >
            info@automicus.com
          </Link>
        </PolicyText>
      </PolicySection>
      <PolicySection heading={t('7.title')}>
        <PolicyText>{t('7.text.0')}</PolicyText>
        <PolicyList
          values={[t('7.list.0'), t('7.list.1'), t('7.list.2'), t('7.list.3')]}
        />
        <PolicyText>{t('7.text.1')}</PolicyText>
      </PolicySection>
      <PolicySection heading={t('8.title')}>
        <PolicyText>{t('8.text.0')}</PolicyText>
        <PolicyList
          heading={t('8.text.1')}
          values={[t('8.list.0'), t('8.list.1')]}
          headingBold
        />
        <PolicyList
          heading={t('8.text.2')}
          values={[t('8.list.2'), t('8.list.3')]}
          headingBold
        />
        <PolicyText>{t('8.text.3')}</PolicyText>
      </PolicySection>
    </PolicyRender>
  );
}
