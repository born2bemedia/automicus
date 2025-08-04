'use client';

import { type ReactNode, useId } from 'react';
import { type CheckboxProps, Indicator, Root } from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/components/atoms';
import { Check } from '@/shared/ui/icons/fill/check';

export const Checkbox = ({
  label,
  onCheckedChange,
  checked = false,
  id,
  intent = 'default',
  ...props
}: {
  label?: ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  intent?: 'default' | 'danger';
} & CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className="flex items-center gap-3">
      <Root
        className={cn(
          'flex h-[18px] w-[18px] flex-shrink-0 cursor-pointer items-center justify-center rounded-md border bg-transparent transition-all duration-300 ease-in-out data-[state=checked]:bg-[#CBFF00]',
          intent === 'danger'
            ? 'border-[#FF5151] hover:shadow-[0_0_0_1px_#FF5151] focus:shadow-[0_0_0_1px_#FF5151]'
            : 'border-[rgba(255,255,255,0.35)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.35)] focus:shadow-[0_0_0_1px_rgba(255,255,255,0.35)]',
        )}
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <Indicator className="mt-0.5">
          <Check />
        </Indicator>
      </Root>
      <label htmlFor={checkboxId}>
        <Text color="muted" weight="medium">
          {label}
        </Text>
      </label>
    </div>
  );
};
