'use client';

import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Proven Expertise' }),
    text: t('cards.0.text', {
      fallback: 'Developed by professionals with real trading experience.',
    }),
  },
  {
    title: t('cards.1.title', { fallback: 'High-Efficacy Solutions' }),
    text: t('cards.1.text', {
      fallback: 'Each bot is rigorously tested for optimal performance.',
    }),
  },
  {
    title: t('cards.2.title', { fallback: 'Constant Updates' }),
    text: t('cards.2.text', {
      fallback: 'We keep our bots in line with market and tech shifts.',
    }),
  },
];

export const WhyChooseUs = () => {
  const t = useTranslations('aboutUs.whyChooseUs');

  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#282828] p-10 max-md:p-6">
      <Title as="h2" color="light">
        {t('title', { fallback: 'Why Choose Us' })}
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
          {getCards(t).map(card => (
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
