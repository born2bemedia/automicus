'use client';

import { Text, Title } from '@/shared/ui/components/atoms';

const cards = [
  {
    title: 'Proven Expertise',
    text: 'Developed by professionals with real trading experience.',
  },
  {
    title: 'High-Efficacy Solutions',
    text: 'Each bot is rigorously tested for optimal performance.',
  },
  {
    title: 'Constant Updates',
    text: 'We keep our bots in line with market and tech shifts.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#282828] p-10 max-md:p-6">
      <Title as="h2" color="light">
        Why Choose Us
      </Title>
      <section className="flex gap-1 max-md:flex-col">
        <video
          src="/videos/about-us/why-choose-us.mp4"
          className="w-1/2 rounded-lg object-cover grayscale filter max-md:w-full"
          autoPlay
          loop
          muted
        />
        <div className="flex w-1/2 flex-col gap-1 max-md:w-full">
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </section>
    </section>
  );
};

const Card = ({ text, title }: { title: string; text: string }) => (
  <article className="flex w-full flex-col gap-2.5 rounded-lg bg-[#181818] p-10">
    <Title as="h3" size="3xl" color="light">
      {title}
    </Title>
    <Text color="light">{text}</Text>
  </article>
);
