'use client';

import type { ReactNode } from 'react';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const PolicySection = ({
  children,
  heading,
}: {
  children: ReactNode;
  heading?: string;
}) => {
  return (
    <section className="flex flex-col gap-4">
      {heading ? (
        <Title as="h2" color="secondary" size="2xl" weight="bold" uppercase>
          {heading}
        </Title>
      ) : null}
      <PolicyTexting>{children}</PolicyTexting>
    </section>
  );
};

const PolicyTexting = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-5">{children}</div>
);

export const PolicyText = ({ children }: { children: ReactNode }) => (
  <Text color="light" weight="medium">
    {children}
  </Text>
);
