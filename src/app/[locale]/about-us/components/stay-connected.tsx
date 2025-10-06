'use client';

import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Get in Touch' }),
    metaButton: {
      label: t('cards.0.button', { fallback: 'Contact Us' }),
      url: '/contact',
    },
  },
  {
    title: t('cards.2.title', { fallback: 'Check Answers' }),
    metaButton: {
      label: t('cards.2.button', { fallback: 'FAQ' }),
      url: '/faq',
    },
  },
];

export const StayConnected = () => {
  const t = useTranslations('aboutUs.stayConnected');

  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#CBFF00] p-10 max-md:p-6">
      <section className="flex flex-col gap-5">
        <Title as="h2">{t('title', { fallback: 'Stay Connected' })}</Title>
        <Text>
          {t('text', {
            fallback:
              'Automicus is always evolving. Check back regularly for new tools and updates that can enhance your trading journey.',
          })}
        </Text>
      </section>
      <section className="flex h-[355px] gap-1 max-lg:h-max max-lg:flex-col">
        <video
          src="/videos/about-us/stay.mp4"
          className="w-[70%] rounded-lg object-cover grayscale filter max-lg:h-[302px] max-lg:w-full max-md:w-full"
          autoPlay
          loop
          muted
        />
        <div className="flex h-max w-[30%] flex-col gap-1 max-lg:w-full">
          {getCards(t).map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </section>
    </section>
  );
};

const Card = ({
  title,
  metaButton,
}: {
  title: string;
  metaButton: { label: string; url: string };
}) => (
  <article className="flex shrink-0 flex-col gap-5 rounded-lg bg-[#181818] p-10">
    <Title as="h3" size="3xl" color="light">
      {title}
    </Title>
    <NavButton url={metaButton.url} size="md" variant="secondary">
      {metaButton.label}
    </NavButton>
  </article>
);
