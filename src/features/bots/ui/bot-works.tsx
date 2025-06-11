'use client';

import { Text, Title } from '@/shared/ui/components/atoms';

export const BotWorks = ({
  values,
}: {
  values: { title: string; description: string }[];
}) => (
  <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#282828] p-10 max-md:p-4">
    <Title as="h2" color="light" uppercase>
      How it Works
    </Title>
    <section className="flex w-full items-center gap-1 max-md:flex-col">
      <section className="flex w-1/2 flex-col gap-1 max-md:w-full">
        {values.map(item => (
          <Card key={item.title} {...item} />
        ))}
      </section>
      <div className="h-[660px] w-1/2 rounded-lg max-md:h-[334px] max-md:w-full">
        <video
          src="/videos/bot-page/how-it-works.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </section>
  </section>
);

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <article className="flex flex-col gap-2.5 rounded-lg bg-[#181818] p-10 max-md:p-6">
    <Title as="h4" color="light" size="3xl">
      {title}
    </Title>
    <Text color="light" weight="medium">
      {description}
    </Text>
  </article>
);
