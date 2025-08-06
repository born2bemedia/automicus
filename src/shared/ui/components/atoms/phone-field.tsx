'use client';

import {
  defaultCountries,
  PhoneInput,
  type PhoneInputProps,
} from 'react-international-phone';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { excludedCountries } from '@/shared/lib/countries';
import { cn } from '@/shared/lib/utils/styles';

import 'react-international-phone/style.css';
import { Text } from './text';

const phoneFieldVariants = cva(
  '!p-6 !rounded-r-lg transition-all !text-[rgb(255_255_255_/_0.5)] !text-base !border-none duration-300 !w-full !h-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: '!bg-[#111]',
        secondary: '!bg-[#181818]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type PhoneFieldVariants = VariantProps<typeof phoneFieldVariants>;

export const PhoneField = ({
  country,
  hint,
  label,
  variant,
  ...args
}: PhoneInputProps & {
  country?: string;
  hint?: string;
  label?: string;
} & PhoneFieldVariants) => {
  return (
    <div className="relative flex h-max w-full flex-col gap-2">
      {label && (
        <Text color="light" weight="medium">
          {label}
        </Text>
      )}
      <PhoneInput
        defaultCountry={
          defaultCountries.some(
            ([, iso2]) => iso2 === country && !excludedCountries.includes(iso2),
          )
            ? country
            : 'gb'
        }
        className={cn('!h-[72px] rounded-lg')}
        inputClassName={cn(
          phoneFieldVariants({
            variant,
          }),
        )}
        countries={defaultCountries.filter(
          ([, iso2]) => !excludedCountries.includes(iso2),
        )}
        countrySelectorStyleProps={{
          buttonClassName: cn(
            '!h-full !border-none !pr-3 !pl-2.5',
            variant === 'primary' ? '!bg-[#111]' : '!bg-[#181818]',
          ),
          dropdownStyleProps: {
            className: '!outline-none',
          },
        }}
        {...args}
      />
      {hint && (
        <span className="absolute bottom-[-24px] left-1">
          <Text color="danger" size="sm" weight="medium">
            {hint}
          </Text>
        </span>
      )}
    </div>
  );
};
