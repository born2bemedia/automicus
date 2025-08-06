'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { cookies } from '@/shared/lib/cookie';
import { notifyWarning } from '@/shared/lib/toast';
import { Text } from '@/shared/ui/components/atoms';
import { DoorsIcon } from '@/shared/ui/icons/fill/doors';

import { logout } from '../api/logout';
import { useUserStore } from '../model/user.store';

export const LogoutBtn = () => {
  const router = useRouter();
  const t = useTranslations('account.tabs');
  const { setUser } = useUserStore();

  const logoutHandle = async () => {
    const res = await logout();

    if (res.success) {
      cookies.remove('token');
      cookies.remove('user');
      setUser(null);
      router.push('/');
    } else {
      notifyWarning(
        t('failedToLogOut', {
          fallback: 'Failed to log out. Please try again later.',
        }),
      );
    }
  };

  return (
    <button
      className="flex w-[257px] cursor-pointer items-center gap-2.5 rounded-lg border border-[#1C1C1C] bg-[#1C1C1C] p-4 transition duration-300 hover:border-[#CBFF00] max-md:w-full"
      onClick={logoutHandle}
    >
      <DoorsIcon />
      <Text color="light">{t('logOut', { fallback: 'Log Out' })}</Text>
    </button>
  );
};
