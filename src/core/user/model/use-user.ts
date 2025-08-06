'use client';

import { useMemo } from 'react';

import { cookies } from '@/shared/lib/cookie';

export const useUser = () => {
  const storedUser = cookies.get('user');

  return useMemo(
    () => (storedUser ? JSON.parse(storedUser) : null),
    [storedUser],
  );
};
