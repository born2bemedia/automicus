'use client';

import type { ReactNode } from 'react';

export const FormRow = ({ children }: { children: ReactNode }) => (
  <section className="flex gap-5 max-md:flex-col">{children}</section>
);
