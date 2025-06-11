'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { Button, type ButtonVariants } from '@/shared/ui/components/atoms';

export const NavButton = ({
  children,
  url,
  variant = 'faded',
  size = 'sm',
  fullWidth = false,
}: {
  children: ReactNode;
  url: string;
  variant?: ButtonVariants['variant'];
  size?: 'sm' | 'md';
  fullWidth?: boolean;
}) => (
  <Link className={cn('flex', fullWidth && 'w-full')} href={url}>
    <Button variant={variant} size={size} zIndex="1" fullWidth={fullWidth}>
      {children}
    </Button>
  </Link>
);
