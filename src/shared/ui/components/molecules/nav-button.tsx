'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';
import { Button, type ButtonVariants } from '@/shared/ui/components/atoms';

import { Link } from '@/i18n/navigation';

export const NavButton = ({
  children,
  url,
  variant = 'faded',
  size = 'sm',
  fullWidth = false,
  className,
  buttonClassName,
}: {
  children: ReactNode;
  url: string;
  variant?: ButtonVariants['variant'];
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  className?: string;
  buttonClassName?: string;
}) => (
  <Link className={cn('flex', fullWidth && 'w-full', className)} href={url}>
    <Button
      variant={variant}
      size={size}
      zIndex="1"
      fullWidth={fullWidth}
      className={buttonClassName}
    >
      {children}
    </Button>
  </Link>
);
