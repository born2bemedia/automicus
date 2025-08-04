'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';
import { ArrowRightDownIcon } from '@/shared/ui/icons/fill';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  t('steps.0', { fallback: 'Explore our bot reviews and guides' }),
  t('steps.1', { fallback: 'Check our Help Center' }),
  t('steps.2', { fallback: 'Find answers in FAQ' }),
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
          <Card key={step} name={step} />
        ))}
      </section>
    </section>
  );
};

const Card = ({ name }: { name: string }) => {
  return (
    <Link
      href="#"
      className="flex w-full flex-col justify-between rounded-lg bg-white p-6"
    >
      <Text size="3xl">{name}</Text>
      <div className="ml-auto">
        <ArrowRightDownIcon size={48} color="#CBFF00" />
      </div>
    </Link>
  );
};
