'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { getTranslatedRoutes } from '@/shared/config/routes';
import { useWindowSize } from '@/shared/lib/hooks';
import {
  Button,
  Dropdown,
  DropdownItem,
  Text,
} from '@/shared/ui/components/atoms';
import { LangSwitcher, NavButton } from '@/shared/ui/components/molecules';
import { BurgerMenu } from '@/shared/ui/components/organisms';
import { ThreeLinesIcon } from '@/shared/ui/icons/fill';
import { FacebookIcon, LinkedInIcon, XIcon } from '@/shared/ui/icons/socials';

import { UserBadgeIcon } from '../../icons/fill/user-badge';
import { useUser } from '@/core/user/model/use-user';
import { Link as NavLink } from '@/i18n/navigation';

export const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return !pathname.startsWith(`/${locale}/account`) ? (
    <header className="sticky top-0 z-50 flex flex-col">
      <HeaderTop />
      <HeaderBottom />
    </header>
  ) : null;
};

const HeaderTop = () => (
  <section className="flex items-center gap-[63px] bg-[#E5E5E5] px-[80px] py-1.5 max-[1350px]:hidden">
    <Link href="tel:+447426952883" className="ml-auto">
      +447426952883
    </Link>
    <Link href="mailto:info@automicus.com">
      <Text>info@automicus.com</Text>
    </Link>
    <section className="flex items-center gap-3.5 bg-white/10">
      {[XIcon, FacebookIcon, LinkedInIcon].map((Icon, index) => (
        <div
          key={`icon-${index}`}
          className="flex h-4 w-max items-center justify-center"
        >
          <Icon />
        </div>
      ))}
    </section>
    <LangSwitcher />
  </section>
);

const HeaderBottom = () => {
  const { width } = useWindowSize();

  const t = useTranslations('header');

  const user = useUser();

  const routes = useMemo(() => getTranslatedRoutes(t), [t]);

  return (
    <section className="flex items-center justify-between bg-black/50 px-[80px] py-3 backdrop-blur-[10px] max-md:px-4">
      <section className="flex items-center gap-[80px]">
        <NavLink href="/" className="shrink-0">
          <Image
            src="/full-logo-white.svg"
            alt="logo"
            width={180}
            height={36}
          />
        </NavLink>
        <div className="flex items-center gap-2 max-[1350px]:hidden">
          {routes.slice(0, 6).map(({ label, url }) => (
            <NavButton key={label} url={url}>
              {label}
            </NavButton>
          ))}
          <Dropdown label={<ThreeLinesIcon />}>
            {({ setOpen }) =>
              routes.slice(6, 11).map(({ label, url }) => (
                <DropdownItem key={label} onClick={() => setOpen(false)}>
                  <NavButton url={url} variant="flat">
                    {label}
                  </NavButton>
                </DropdownItem>
              ))
            }
          </Dropdown>
        </div>
      </section>
      <section className="flex items-center gap-[30px] max-[1350px]:hidden">
        <NavLink href="/cart">
          <Button variant="ghost" size="sm">
            {t('cart', { fallback: 'Cart' })}
          </Button>
        </NavLink>
        {user ? (
          <NavLink
            href="/account"
            className="flex items-center gap-2.5 rounded-full bg-white/10 py-1.5 pr-3 pl-1.5 backdrop-blur-[5px]"
          >
            <UserBadgeIcon />
            <Text color="light" weight="medium">
              {user.firstName + ' ' + user.lastName}
            </Text>
          </NavLink>
        ) : (
          <div className="flex items-center gap-[6px]">
            <NavLink href="/login">
              <Button variant="secondary" size="sm">
                {t('logIn', { fallback: 'Log In' })}
              </Button>
            </NavLink>
            <NavLink href="/sign-up">
              <Button size="sm">{t('signUp', { fallback: 'Sign Up' })}</Button>
            </NavLink>
          </div>
        )}
      </section>
      {width < 1350 && <BurgerMenu />}
    </section>
  );
};
