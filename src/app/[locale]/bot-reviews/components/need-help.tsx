'use client';

import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';
import { ArrowRightDownIcon } from '@/shared/ui/icons/fill';

import { Link } from '@/i18n/navigation';

const getItems = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('steps.0', { fallback: 'Get in Touch' }),
    url: '/contact',
  },
  {
    label: t('steps.2', { fallback: 'Check Answers' }),
    url: '/faq',
  },
];

export const NeedHelp = () => {
  const t = useTranslations('botReviews.needHelp');

  const items = getItems(t);

  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#171717] p-10 max-md:p-6">
      <Title as="h2" color="light" uppercase>
        {t('title', { fallback: 'Need Help?' })}
      </Title>
      <section className="flex gap-1 max-md:flex-col">
        {items.map(item => (
          <Card key={item.label} {...item} />
        ))}
      </section>
    </section>
  );
};

const Card = ({ label, url }: { label: string; url: string }) => (
  <Link
    href={url}
    className="flex h-[200px] flex-1 flex-col rounded-lg bg-[#CBFF00] p-6 transition duration-300 hover:bg-[#CBFF00]/80"
  >
    <Text size="3xl" weight="medium">
      {label}
    </Text>
    <div className="mt-auto flex justify-end">
      <ArrowRightDownIcon size={48} bold />
    </div>
  </Link>
);
