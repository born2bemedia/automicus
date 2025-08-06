'use client';

import Image from 'next/image';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DialogTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { Separator } from '@/shared/ui/components/atoms/separator';

import { AccountTabs } from './account-tabs';
import { LogoutBtn } from './logout-btn';

export const Header = () => {
  return (
    <header className="sticky top-2 z-40 hidden w-full items-center justify-between rounded-lg bg-[#101010] p-6 shadow-xl max-lg:flex">
      <Image src="/full-logo-white.svg" alt="logo" width={180} height={36} />
      <Root>
        <Trigger>
          <BurgerIcon />
        </Trigger>
        <Portal>
          <Overlay className="fixed inset-0 z-30 animate-[overlayShow_150ms_cubic-bezier(0.16,1,0.3,1)] bg-black/75" />
          <Content className="fixed top-[100px] left-1/2 z-[60] flex w-[97%] -translate-x-1/2 rounded-lg border border-white/10 bg-[#101010] p-6">
            <DialogTitle />
            <Description asChild>
              <section className="flex w-full flex-col gap-6">
                <AccountTabs />
                <Separator />
                <LogoutBtn />
              </section>
            </Description>
          </Content>
        </Portal>
      </Root>
    </header>
  );
};

const BurgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
  >
    <path
      d="M1 12C0.71667 12 0.479337 11.904 0.288004 11.712C0.0966702 11.52 0.000670115 11.2827 3.44827e-06 11C-0.000663218 10.7173 0.0953369 10.48 0.288004 10.288C0.48067 10.096 0.718003 10 1 10H17C17.2833 10 17.521 10.096 17.713 10.288C17.905 10.48 18.0007 10.7173 18 11C17.9993 11.2827 17.9033 11.5203 17.712 11.713C17.5207 11.9057 17.2833 12.0013 17 12H1ZM1 7C0.71667 7 0.479337 6.904 0.288004 6.712C0.0966702 6.52 0.000670115 6.28267 3.44827e-06 6C-0.000663218 5.71733 0.0953369 5.48 0.288004 5.288C0.48067 5.096 0.718003 5 1 5H17C17.2833 5 17.521 5.096 17.713 5.288C17.905 5.48 18.0007 5.71733 18 6C17.9993 6.28267 17.9033 6.52033 17.712 6.713C17.5207 6.90567 17.2833 7.00133 17 7H1ZM1 2C0.71667 2 0.479337 1.904 0.288004 1.712C0.0966702 1.52 0.000670115 1.28267 3.44827e-06 1C-0.000663218 0.717333 0.0953369 0.48 0.288004 0.288C0.48067 0.0960001 0.718003 0 1 0H17C17.2833 0 17.521 0.0960001 17.713 0.288C17.905 0.48 18.0007 0.717333 18 1C17.9993 1.28267 17.9033 1.52033 17.712 1.713C17.5207 1.90567 17.2833 2.00133 17 2H1Z"
      fill="white"
    />
  </svg>
);
