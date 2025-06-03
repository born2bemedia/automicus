'use client';

import type { ReactNode } from 'react';

export const Chip = ({ children }: { children: ReactNode }) => {
  return (
    <span className="border-primary text-primary h-max w-max rounded-full border-[0.5px] px-1.5 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
};
