'use client';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const tagVariants = cva(
  'rounded-3xl px-3 py-1 font-medium text-base w-max shrink-0 h-[48px] flex items-center justify-center',
  {
    variants: {
      intent: {
        success: 'bg-[rgba(203,255,0,0.15)] text-[#CBFF00]',
        pending: 'bg-[rgba(255,225,0,0.15)] text-[#FFE100]',
        failed: 'bg-[rgba(255,81,81,0.15)] text-[#FF5151]',
      },
    },
    defaultVariants: {
      intent: 'success',
    },
  },
);

export type TagVariants = VariantProps<typeof tagVariants>;

export const Tag = ({
  children,
  intent,
  className,
}: { children: React.ReactNode; className?: string } & TagVariants) => (
  <span className={cn(tagVariants({ intent }), className)}>{children}</span>
);
