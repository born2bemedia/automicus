'use client';

'use client';

import { Text, Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

export const VideoHero = ({
  title,
  text,
  videoUrl,
  metaButton,
}: {
  title: string;
  text: string;
  videoUrl: string;
  metaButton: {
    label: string;
    url: string;
  };
}) => {
  return (
    <section className="relative flex h-[810px] flex-col items-center justify-center gap-9 px-6 pb-20 max-md:items-start max-md:justify-end">
      <section className="flex flex-col items-center justify-center gap-4 max-md:items-start max-md:justify-start">
        <Title
          size="6xl"
          zIndex="1"
          color="light"
          align="center"
          className="max-md:text-left"
        >
          {title}
        </Title>
        <Text zIndex="2" weight="medium" color="light">
          {text}
        </Text>
      </section>
      <NavButton url={metaButton.url} size="md" variant="secondary">
        {metaButton.label}
      </NavButton>
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full object-cover grayscale filter"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/60" />
    </section>
  );
};
