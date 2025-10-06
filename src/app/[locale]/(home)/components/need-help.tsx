'use client';

import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';
import { ArrowRightDownIcon } from '@/shared/ui/icons/fill';

import { Link } from '@/i18n/navigation';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('steps.0', { fallback: 'Explore our bot reviews and guides' }),
    link: '/bot-reviews',
  },
  {
    label: t('steps.2', { fallback: 'Find answers in FAQ' }),
    link: '/faq',
  },
];

export const NeedHelp = () => {
  const t = useTranslations('home.needHelp');

  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#E5E5E5] p-10 max-md:p-6">
      <Title as="h2" uppercase>
        {t('title', { fallback: 'Need Help?' })}
      </Title>
      <section className="flex gap-1 max-md:flex-col">
        {getSteps(t).map(step => (
          <Card key={step.label} name={step.label} link={step.link} />
        ))}
      </section>
    </section>
  );
};

const Card = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link
      href={link}
      className="flex w-full flex-col justify-between rounded-lg bg-white p-6"
    >
      <Text size="3xl">{name}</Text>
      <div className="ml-auto">
        <ArrowRightDownIcon size={48} color="#CBFF00" />
      </div>
    </Link>
  );
};
