'use client';

import { memo } from 'react';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

import type { Content } from '../model';

export const ReviewStrategies = memo(
  ({ node, type }: { node: Content['root']; type: string }) => {
    if (type === 'heading') {
      return (
        <span className="mb-10">
          <Title as="h2" color="secondary" size="2xl" uppercase>
            {node.children?.map(item => item?.text)}
          </Title>
        </span>
      );
    }

    if (type === 'paragraph') {
      return (
        <span className="mb-10">
          {node.children.map((item, i) =>
            item.type === 'linebreak' ? (
              <br key={String(`linebreak-${i}`)} />
            ) : (
              <span key={item.text} className={item.format === 1 ? 'mb-2' : ''}>
                <Text
                  key={item.text}
                  weight={item.format === 1 ? 'bold' : 'medium'}
                  color="light"
                >
                  {item.text}
                </Text>
              </span>
            ),
          )}
        </span>
      );
    }

    if (type === 'link') {
      return (
        <a
          href={node?.fields?.url}
          target={node?.fields?.newTab ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="font-bold underline"
        >
          {node.children?.map(item => item.text)}
        </a>
      );
    }

    if (type === 'list') {
      return (
        <ul
          className={cn(
            'mt-[-30px]',
            node.listType === 'bullet'
              ? 'border-stroke list-disc border p-4 pl-7.5'
              : 'ml-4 list-decimal',
          )}
        >
          {node.children.map(item => (
            <li key={item.children[0].text} className="font-medium text-white">
              {item.children.map(i => i.text).join('')}
            </li>
          ))}
        </ul>
      );
    }

    if (type === 'linebreak') {
      return <br />;
    }

    return null;
  },
);

ReviewStrategies.displayName = 'ReviewStrategies';
