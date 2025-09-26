'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { ConvertIcon } from '@/shared/ui/icons/fill/convert';
import { UrlIcon } from '@/shared/ui/icons/fill/url';

export const ContactUs = () => {
  const t = useTranslations('policies.contactUs');

  const pathname = usePathname();
  const locale = useLocale();

  return (
    <section className="flex flex-col gap-4">
      <Title as="h2" color="secondary" size="2xl" weight="bold" uppercase>
        {pathname === `/${locale}/refund-policy` ? t('needHelp') : t('title')}
      </Title>
      <Text color="light" weight="medium">
        {t('description', {
          fallback:
            'If you have any questions or require assistance regarding these Terms of Use, please contact us at:',
        })}
      </Text>
      <div className="flex flex-col gap-5 p-10">
        <ItemLayout>
          <ConvertIcon />
          <Link href="mailto:info@automicus.com">
            <Text color="light" weight="medium">
              info@automicus.com
            </Text>
          </Link>
        </ItemLayout>
        {/* <ItemLayout>
          <PhoneIcon />
          <Link href="tel:+1000000000">
            <Text color="light" weight="medium">
              +1 000 000 000
            </Text>
          </Link>
        </ItemLayout> */}
        <ItemLayout>
          <UrlIcon />
          <Link href="https://automicus.com/en/contact">
            <Text color="light" weight="medium">
              https://automicus.com/en/contact
            </Text>
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

const ItemLayout = ({ children }: { children: ReactNode }) => (
  <span className="flex w-max items-center gap-2">{children}</span>
);
