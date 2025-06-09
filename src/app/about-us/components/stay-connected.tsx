'use client';

import { Text, Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

const cards = [
  {
    title: 'Get in Touch',
    metaButton: { label: 'Contact Us', url: '/contact' },
  },
  {
    title: 'Find Guides for Bots',
    metaButton: { label: 'Help Center', url: '/help-center' },
  },
  {
    title: 'Check Answers',
    metaButton: { label: 'FAQ', url: '/faq' },
  },
];

export const StayConnected = () => {
  return (
    <section className="m-1 flex flex-col gap-10 rounded-lg bg-[#CBFF00] p-10 max-md:p-6">
      <section className="flex flex-col gap-5">
        <Title as="h2">Stay Connected</Title>
        <Text>
          Automicus is always evolving. Check back regularly for new tools and
          updates that can enhance your trading journey.
        </Text>
      </section>
      <section className="flex h-[530px] gap-1 max-lg:h-max max-lg:flex-col">
        <video
          src="/videos/about-us/stay.mp4"
          className="w-[70%] rounded-lg object-cover grayscale filter max-lg:h-[302px] max-lg:w-full max-md:w-full"
          autoPlay
          loop
          muted
        />
        <div className="flex h-max w-[30%] flex-col gap-1 max-lg:w-full">
          {cards.map(card => (
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
