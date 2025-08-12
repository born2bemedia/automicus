'use client';

import type { ReactNode } from 'react';

import { Text } from '@/shared/ui/components/atoms';

export const PolicyList = ({
  values,
  heading,
  headingBold = false,
}: {
  values: ReactNode[];
  heading?: string;
  headingBold?: boolean;
}) => (
  <div className="flex flex-col">
    {heading ? (
      <Text color="light" weight={headingBold ? 'bold' : 'medium'}>
        {heading}
      </Text>
    ) : null}
    <ul className="ml-4 flex list-disc flex-col text-white">
      {values.map((value, index) => (
        <li key={index}>
          <Text color="light" weight="medium">
            {value}
          </Text>
        </li>
      ))}
    </ul>
  </div>
);
