'use client';

import { Text, Title } from '@/shared/ui/components/atoms';

export const GridCards = ({
  values,
}: {
  values: { title: string; description: string }[];
}) => (
  <section className="m-1 grid grid-cols-2 gap-1 max-md:grid-cols-1">
    {values.map(item => (
      <Card key={item.title} {...item} />
    ))}
  </section>
);

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <article className="flex w-full flex-col gap-2.5 rounded-lg bg-[#E5E5E5] p-10">
    <Title size="3xl">{title}</Title>
    <Text weight="medium">{description}</Text>
  </article>
);
