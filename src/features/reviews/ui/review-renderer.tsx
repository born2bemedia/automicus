'use client';

import type { Content } from '../model';
import { ReviewStrategies } from './review-strategies';

export const ReviewRenderer = ({ content }: { content: Content }) => {
  return (
    <article className="flex flex-col">
      {!Array.isArray(content) ? null : (
        <>
          {content.map((node, i) => (
            <ReviewStrategies
              key={String(`node-${i}`)}
              node={node}
              type={node.type}
            />
          ))}
        </>
      )}
    </article>
  );
};
