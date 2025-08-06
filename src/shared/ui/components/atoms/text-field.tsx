'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

import { Text } from './text';

const textFieldVariants = cva(
  'rounded-lg p-6 text-base font-medium text-[rgb(255_255_255_/_0.5)] transition-all duration-300 focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-[#111]',
        secondary: 'bg-[#181818]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  label,
  hint,
  variant,
  ...args
}: InputHTMLAttributes<HTMLInputElement> &
  TextFieldVariants & {
    label?: string;
    hint?: string;
  }) => {
  return (
    <label className="relative flex w-full flex-col gap-2">
      <Text color="light" weight="medium">
        {label}
      </Text>
      <input
        className={cn(textFieldVariants({ variant }), className)}
        {...args}
      />
      {hint && (
        <span className="absolute bottom-[-24px] left-1">
          <Text color="danger" size="sm" weight="medium">
            {hint}
          </Text>
        </span>
      )}
    </label>
  );
};
