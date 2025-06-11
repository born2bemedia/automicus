'use client';

import { Text, Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

export const BotSummary = ({ name, text }: { name: string; text: string }) => {
  return (
    <section className="m-1 flex h-full gap-1 max-md:flex-col-reverse">
      <section className="w-1/2 rounded-lg bg-[linear-gradient(0deg,rgba(40,40,40,0.50)_0%,rgba(40,40,40,0.50)_100%)] max-md:h-[350px] max-md:w-full">
        <video
          src="/videos/bot-page/summary.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full rounded-lg object-cover"
        />
      </section>
      <section className="flex w-1/2 flex-col gap-10 rounded-lg bg-[#282828] p-10 max-md:w-full">
        <div className="flex flex-col gap-5">
          <Title color="light" size="5xl">
            {name}
          </Title>
          <Text color="light" weight="medium">
            {text}
          </Text>
        </div>
        <NavButton url="/contact" size="md" variant="primary">
          Get Assistance
        </NavButton>
      </section>
    </section>
  );
};
