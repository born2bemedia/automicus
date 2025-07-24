'use client';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const textVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    color: {
      primary: 'text-secondary',
      secondary: 'text-primary',
      dark: 'text-dark',
      light: 'text-white',
      danger: 'text-danger',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    opacity: {
      full: 'opacity-100',
      medium: 'opacity-70',
      low: 'opacity-50',
      veryLow: 'opacity-30',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
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
    color: 'primary',
    opacity: 'full',
    weight: 'normal',
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export const Text = ({
  children,
  size,
  color,
  weight,
  opacity,
  zIndex,
  hover = false,
  uppercase = false,
  className,
}: {
  children: React.ReactNode;
  hover?: boolean;
  uppercase?: boolean;
  className?: string;
} & TextVariants) => (
  <p
    className={cn(
      textVariants({ size, color, weight, opacity, zIndex }),
      hover && 'hover:opacity-50',
      uppercase && 'uppercase',
      className,
    )}
  >
    {children}
  </p>
);
