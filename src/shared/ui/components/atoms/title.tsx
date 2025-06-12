'use client';
import type { ElementType, JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const titleVariants = cva(
  'transition duration-300 ease-in-out font-work-sans',
  {
    variants: {
      color: {
        primary: 'text-secondary',
        secondary: 'text-primary',
        dark: 'text-dark',
        light: 'text-white',
      },
      size: {
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-[40px]',
        '5xl': 'text-5xl max-md:text-3xl',
        '6xl': 'text-6xl max-md:text-4xl',
        '7xl': 'text-[80px] max-md:text-[40px]',
        '8xl': 'text-8xl max-md:text-[40px]',
        '9xl': 'text-9xl max-md:text-7xl',
        '10xl': 'text-10xl max-md:text-8xl',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
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
      size: '4xl',
      color: 'primary',
      weight: 'bold',
      align: 'left',
    },
  },
);

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  size,
  color,
  weight,
  align,
  zIndex,
  className,
  as = 'h1',
  uppercase = false,
}: {
  children: ReactNode;
  as?: ElementType;
  uppercase?: boolean;
  className?: string;
} & TitleVariants) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        titleVariants({ size, color, weight, zIndex, align }),
        'leading-[100%]',
        uppercase && 'uppercase',
        className,
      )}
    >
      {children}
    </Tag>
  );
};
