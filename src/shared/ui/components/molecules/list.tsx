'use client';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms';

export const List = ({
  values,
  type = 'disc',
}: {
  values: string[];
  type?: 'decimal' | 'disc' | 'none';
}) => {
  return (
    <ul
      className={cn(
        'list-outside pl-5 text-base text-white',
        type === 'decimal' ? 'list-decimal' : 'list-disc',
      )}
    >
      {values.map(v => {
        const [prefix, ...rest] = v.split(':');
        const hasPrefix = rest.length > 0;
        const content = hasPrefix ? rest.join(':').trim() : v;

        return (
          <li key={v}>
            <Text color="light" weight="medium">
              {hasPrefix && <strong>{prefix}:</strong>} {content}
            </Text>
          </li>
        );
      })}
    </ul>
  );
};

export const ListItemLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-2.5">{children}</div>
);
