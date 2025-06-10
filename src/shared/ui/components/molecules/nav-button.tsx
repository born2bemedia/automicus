'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';

import { Button, type ButtonVariants } from '@/shared/ui/components/atoms';

export const NavButton = ({
  children,
  url,
  variant = 'faded',
  size = 'sm',
}: {
  children: ReactNode;
  url: string;
  variant?: ButtonVariants['variant'];
  size?: 'sm' | 'md';
}) => (
  <Link className="flex" href={url}>
    <Button variant={variant} size={size} zIndex="1">
      {children}
    </Button>
  </Link>
);
