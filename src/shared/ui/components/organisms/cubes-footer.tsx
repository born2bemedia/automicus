'use client';

import { cn } from '@/shared/lib/utils';
import { type ButtonVariants, Text, Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

export const CubesFooter = ({
  title,
  text,
  metaButtons,
  altVideoUrl,
  className,
  buttonsClassName,
  buttonClassName,
}: {
  title: string;
  text?: string;
  metaButtons: {
    label: string;
    url: string;
    variant: ButtonVariants['variant'];
  }[];
  altVideoUrl?: string;
  className?: string;
  buttonsClassName?: string;
  buttonClassName?: string;
}) => {
  return (
    <section
      className={cn(
        'relative m-1 flex h-[350px] flex-col items-center justify-center gap-10 p-10 text-center max-md:p-6',
        className,
      )}
    >
      <div className="flex flex-col gap-5">
        <Title size="5xl" color="light" zIndex="1" align="center" uppercase>
          {title}
        </Title>
        {text && (
          <span className="z-10 mx-auto w-[554px] text-center max-md:w-full">
            <Text weight="medium" color="light">
              {text}
            </Text>
          </span>
        )}
      </div>
      <section className={cn('flex items-center gap-2.5', buttonsClassName)}>
        {metaButtons.map(({ label, url, variant }) => (
          <NavButton
            key={label}
            variant={variant}
            url={url}
            size="md"
            className="max-md:w-full"
            buttonClassName={buttonClassName}
          >
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
