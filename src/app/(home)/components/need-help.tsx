'use client';

import Link from 'next/link';

import { Text, Title } from '@/shared/ui/components/atoms';
import { ArrowRightDownIcon } from '@/shared/ui/icons/fill';

const steps = [
  'Explore our bot reviews and guides',
  'Check our Help Center',
  'Find answers in FAQ',
];

export const NeedHelp = () => {
  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#E5E5E5] p-10 max-md:p-6">
      <Title as="h2" uppercase>
        Need Help?
      </Title>
      <section className="flex gap-1 max-md:flex-col">
        {steps.map(step => (
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
