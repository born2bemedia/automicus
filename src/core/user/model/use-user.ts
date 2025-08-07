'use client';

import { useEffect, useMemo, useState } from 'react';

import { cookies } from '@/shared/lib/cookie';

export const useUser = () => {
  const [storedUser, setStoredUser] = useState<string | null>(null);

  useEffect(() => {
    const userCookie = cookies.get('user');
    setStoredUser(userCookie ?? null);
  }, []);

  return useMemo(() => {
    if (!storedUser) return null;
    try {
      return JSON.parse(storedUser);
    } catch {
      return null;
    }
  }, [storedUser]);
};
