'use client';

import { type ButtonVariants, Text, Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

export const CubesFooter = ({
  title,
  text,
  metaButtons,
  altVideoUrl,
}: {
  title: string;
  text: string;
  metaButtons: {
    label: string;
    url: string;
    variant: ButtonVariants['variant'];
  }[];
  altVideoUrl?: string;
}) => {
  return (
    <section className="relative m-1 flex h-[350px] flex-col items-center justify-center gap-10 p-10 text-center max-md:p-6">
      <div className="flex flex-col gap-5">
        <Title size="5xl" color="light" zIndex="1" align="center" uppercase>
          {title}
        </Title>
        <span className="z-10 mx-auto w-[554px] text-center max-md:w-full">
          <Text weight="medium" color="light">
            {text}
          </Text>
        </span>
      </div>
      <section className="flex items-center gap-2.5">
        {metaButtons.map(({ label, url, variant }) => (
          <NavButton key={label} variant={variant} url={url} size="md">
            {label}
          </NavButton>
        ))}
      </section>
      <video
        src={altVideoUrl ?? '/videos/deals/alert.mp4'}
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full rounded-lg object-cover grayscale filter"
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};
