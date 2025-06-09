'use client';

import type { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils';

import { Text } from './text';

export const TextField = ({
  className,
  label,
  hint,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
}) => {
  return (
    <label className="relative flex w-full flex-col gap-2">
      <Text color="light">{label}</Text>
      <input
        className={cn(
          'font-aeonik rounded-lg bg-[#111] p-6 text-base text-[rgb(255_255_255_/_0.5)] transition-all duration-300 focus:outline-none',
          className,
        )}
        {...args}
      />
      {hint && (
        <span className="absolute bottom-[-20px] left-0">
          <Text color="danger" size="sm">
            {hint}
          </Text>
        </span>
      )}
    </label>
  );
};
