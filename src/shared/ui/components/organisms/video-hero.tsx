'use client';

'use client';

import { cn } from '@/shared/lib/utils';
import { Text, Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

export const VideoHero = ({
  title,
  text,
  videoUrl,
  metaButton,
  className,
  filter,
}: {
  title: string;
  text: string;
  videoUrl: string;
  metaButton: {
    label: string;
    url: string;
  };
  className?: string;
  filter?: string;
}) => {
  return (
    <section
      className={cn(
        'relative flex h-[810px] flex-col items-center justify-center gap-9 px-6 pb-20 max-md:items-start max-md:justify-end',
        className,
      )}
    >
      <section className="flex max-w-[70%] flex-col items-center justify-center gap-4 max-lg:w-full max-md:items-start max-md:justify-start">
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
      <div
        className={cn(
          'absolute inset-0',
          filter ?? 'bg-gradient-to-t from-black/60 to-black/60',
        )}
      />
    </section>
  );
};
