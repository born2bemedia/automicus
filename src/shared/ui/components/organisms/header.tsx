'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { getTranslatedRoutes } from '@/shared/config/routes';
import { useWindowSize } from '@/shared/lib/hooks';
import { Button, Dropdown, DropdownItem } from '@/shared/ui/components/atoms';
import { LangSwitcher, NavButton } from '@/shared/ui/components/molecules';
import { BurgerMenu } from '@/shared/ui/components/organisms';
import { ThreeLinesIcon } from '@/shared/ui/icons/fill';
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from '@/shared/ui/icons/socials';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-col">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

const HeaderTop = () => (
  <section className="flex items-center gap-[63px] bg-[#E5E5E5] px-[80px] py-1.5 max-lg:hidden">
    <section className="ml-auto flex items-center gap-3.5 bg-white/10">
      {[XIcon, FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon].map(
        (Icon, index) => (
          <div
            key={`icon-${index}`}
            className="flex h-4 w-max items-center justify-center"
          >
            <Icon />
          </div>
        ),
      )}
    </section>
    <LangSwitcher />
  </section>
);

const HeaderBottom = () => {
  const { width } = useWindowSize();

  const t = useTranslations('header');

  const routes = useMemo(() => getTranslatedRoutes(t), [t]);

  return (
    <section className="flex items-center justify-between bg-black/50 px-[80px] py-3 backdrop-blur-[10px] max-md:px-4">
      <section className="flex items-center gap-[80px]">
        <Image src="/full-logo-white.svg" alt="logo" width={180} height={36} />
        <div className="flex items-center gap-2 max-lg:hidden">
          {routes.slice(0, 6).map(({ label, url }) => (
            <NavButton key={label} url={url}>
              {label}
            </NavButton>
          ))}
          <Dropdown label={<ThreeLinesIcon />}>
            {routes.slice(6, 11).map(({ label, url }) => (
              <DropdownItem key={label}>
                <NavButton url={url} variant="flat">
                  {label}
                </NavButton>
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
      </section>
      <section className="flex items-center gap-[30px] max-lg:hidden">
        <Link href="/cart">
          <Button variant="ghost" size="sm">
            {t('cart', { fallback: 'Cart' })}
          </Button>
        </Link>
        <Button variant="secondary" size="sm">
          {t('logIn', { fallback: 'Log In' })}
        </Button>
      </section>
      {width < 1024 && <BurgerMenu />}
    </section>
  );
};
