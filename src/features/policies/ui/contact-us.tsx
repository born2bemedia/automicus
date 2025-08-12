'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { ConvertIcon } from '@/shared/ui/icons/fill/convert';
import { PhoneIcon } from '@/shared/ui/icons/fill/phone';
import { UrlIcon } from '@/shared/ui/icons/fill/url';

export const ContactUs = () => {
  const t = useTranslations('policies.contactUs');

  return (
    <section className="flex flex-col gap-4">
      <Title as="h2" color="secondary" size="2xl" weight="bold" uppercase>
        {t('title', { fallback: 'Contact Us' })}
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
          <Link href="mailto:example@gmail.com">
            <Text color="light" weight="medium">
              example@gmail.com
            </Text>
          </Link>
        </ItemLayout>
        <ItemLayout>
          <PhoneIcon />
          <Link href="tel:+1000000000">
            <Text color="light" weight="medium">
              +1 000 000 000
            </Text>
          </Link>
        </ItemLayout>
        <ItemLayout>
          <UrlIcon />
          <Link href="https://automicus.com/">
            <Text color="light" weight="medium">
              automicus.com
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
