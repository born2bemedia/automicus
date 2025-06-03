'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const btnVariants = cva(
  'rounded-full cursor-pointer flex items-center gap-6 transition duration-300 ease-in-out font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-dark',
        secondary: 'bg-white text-dark',
        faded: 'bg-white/10 text-white backdrop-blur-lg',
        ghost: 'bg-transparent text-white',
        flat: 'text-dark bg-black/10 backdrop-blur-[15px]',
      },
      size: {
        sm: 'py-1.5 px-3 text-base',
        md: 'py-3 px-[40px] text-sm',
      },
      zIndex: {
        '1': 'z-10',
        '2': 'z-20',
        '3': 'z-30',
        '4': 'z-40',
        '5': 'z-50',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
);

export type ButtonVariants = VariantProps<typeof btnVariants>;

export const Button = ({
  children,
  className,
  size,
  variant,
  zIndex,
  onClick,
  disabled,
  fullWidth = false,
  type = 'button',
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonVariants) => {
  return (
    <button
      className={cn(
        btnVariants({ size, variant, zIndex }),
        fullWidth ? 'w-full justify-center' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
