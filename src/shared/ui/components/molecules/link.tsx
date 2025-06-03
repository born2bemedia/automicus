'use client';

import { default as NextLink } from 'next/link';

import { Text } from '@/shared/ui/components/atoms';

export const Link = ({
  placeholder,
  url,
}: {
  placeholder: string;
  url: string;
}) => (
  <NextLink href={url}>
    <Text hover>{placeholder}</Text>
  </NextLink>
);
