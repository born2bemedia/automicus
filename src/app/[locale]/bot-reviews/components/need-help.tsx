'use client';

import Link from 'next/link';

import { Text, Title } from '@/shared/ui/components/atoms';
import { ArrowRightDownIcon } from '@/shared/ui/icons/fill';

const items = [
  {
    label: 'Explore our bot reviews and guides',
    url: '/bot-reviews',
  },
  {
    label: 'Check our Help Center',
    url: '/help-center',
  },
  {
    label: 'Find answers in FAQ',
    url: '/faq',
  },
];

export const NeedHelp = () => {
  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#171717] p-10 max-md:p-6">
      <Title as="h2" color="light" uppercase>
        Need Help?
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
