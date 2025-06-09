'use client';

import { Text, Title } from '@/shared/ui/components/atoms';

const cards = [
  {
    title: 'Who We Are',
    text: 'Automicus is a team of expert traders and tech innovators dedicated to creating efficient trading bots that deliver precision and reliability in every market.',
  },
  {
    title: 'Our Mission',
    text: 'To empower traders with cutting-edge, automated solutions designed to improve decision-making, reduce risk, and optimize trading performance',
  },
  {
    title: 'What We Do',
    text: 'We specialize in building bots that solve real trading challenges. Our team constantly tests and improves our bots, ensuring they are always ahead of the curve.',
  },
  {
    title: 'Our Approach',
    text: 'At Automicus, innovation and adaptability are at the core of everything we do. We focus on market-tested solutions that evolve with changing market dynamics.',
  },
];

export const AboutUsCards = () => {
  return (
    <section className="m-1 grid grid-cols-2 gap-1 max-md:grid-cols-1">
      {cards.map(card => (
        <Card key={card.title} {...card} />
      ))}
    </section>
  );
};

const Card = ({ text, title }: { title: string; text: string }) => (
  <article className="flex flex-col gap-5 rounded-lg bg-[#E5E5E5] p-10">
    <Title as="h3">{title}</Title>
    <Text weight="medium">{text}</Text>
  </article>
);
