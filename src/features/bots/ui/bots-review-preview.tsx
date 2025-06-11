'use client';

import { Text } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

import type { BotReview } from '../model';

export const BotsReviewPreview = ({ data }: { data: BotReview[] }) => {
  return (
    <section className="flex flex-col gap-10 p-10 max-md:p-6">
      <Text weight="medium" color="light">
        With thousands of bots on the market, it’s hard to know which ones
        perform as advertised. Automicus Bot Review Hub provides unbiased,
        in-depth reviews of the top trading bots, helping you make informed
        decisions based on real-world performance.
      </Text>
      <section className="grid grid-cols-3 gap-1 max-md:grid-cols-1">
        {data.map(item => (
          <Card
            key={item.id}
            botName={item.bot.name}
            excerpt={item.excerpt}
            slug={item.slug}
          />
        ))}
      </section>
    </section>
  );
};

const Card = ({
  botName,
  excerpt,
  slug,
}: {
  botName: string;
  excerpt: string;
  slug: string;
}) => (
  <article className="flex flex-col gap-10 rounded-lg bg-[rgba(229,229,229,0.10)] p-10 backdrop-blur-[15px]">
    <section className="flex flex-col gap-2">
      <Text weight="bold" size="3xl" color="light">
        {botName}
      </Text>
      <Text weight="medium" color="light">
        {excerpt}
      </Text>
    </section>
    <NavButton url={`/bot-reviews/${slug}`} size="md" variant="primary">
      Read
    </NavButton>
  </article>
);
