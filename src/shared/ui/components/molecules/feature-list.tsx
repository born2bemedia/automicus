'use client';

import { Text } from '@/shared/ui/components/atoms';

export const FeatureList = ({
  values,
}: {
  values: { title: string; description: string }[];
}) => {
  return (
    <ul className="flex flex-col gap-2">
      {values.map(({ title, description }) => (
        <li key={title} className="flex items-center gap-2">
          <Text color="light">
            <span className="font-bold">{title}</span> - {description}
          </Text>
        </li>
      ))}
    </ul>
  );
};
