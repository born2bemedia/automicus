'use client';

import Image from 'next/image';

import { Separator } from '@/shared/ui/components/atoms/separator';

import { AccountTabs } from './account-tabs';
import { LogoutBtn } from './logout-btn';
import { Link } from '@/i18n/navigation';

export const Sidebar = () => {
  return (
    <section className="sticky top-2 flex h-[98vh] w-max flex-col justify-between self-start rounded-lg bg-[#101010] p-6 max-lg:hidden">
      <div className="flex flex-col gap-6">
        <Link href="/">
          <Image
            src="/full-logo-white.svg"
            alt="logo"
            width={180}
            height={36}
          />
        </Link>
        <Separator />
        <AccountTabs />
      </div>
      <LogoutBtn />
    </section>
  );
};
