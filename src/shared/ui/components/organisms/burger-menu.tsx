'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { getTranslatedRoutes } from '@/shared/config/routes';
import { cn } from '@/shared/lib/utils';
import { Button, Text } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';
import {
  ArrowRightDownIcon,
  ThreeLinesIcon,
  TranslateIcon,
} from '@/shared/ui/icons/fill';
import { FacebookIcon, XIcon } from '@/shared/ui/icons/socials';

import { useUser } from '@/core/user/model/use-user';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const t = useTranslations('header');

  const user = useUser();

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <Button variant="faded" size="sm">
          <ThreeLinesIcon />
        </Button>
      </Trigger>
      <Portal>
        <Content className="fixed bottom-0 left-0 z-[995] h-screen w-screen animate-[menuOpen_0.3s_ease-out_forwards] overflow-y-auto bg-[#E5E5E5] px-4 pt-3 pb-5">
          <Title />
          <Description asChild>
            <section className="flex h-full flex-col gap-6">
              <section className="flex items-center justify-between">
                <Image
                  src="/full-logo-black.svg"
                  alt="logo"
                  width={180}
                  height={36}
                />
                <button onClick={() => setOpen(false)}>
                  <ThreeLinesIcon color="black" />
                </button>
              </section>
              <section className="flex items-end justify-between gap-24">
                <section className="flex flex-col gap-[60px]">
                  <div className="flex flex-col gap-4">
                    {getTranslatedRoutes(t).map(({ label, url }) => (
                      <NavButton key={label} url={url} variant="flat">
                        {label}
                      </NavButton>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    {user ? (
                      <Link href="/account">
                        <Button size="sm">
                          Account <ArrowRightDownIcon />
                        </Button>
                      </Link>
                    ) : (
                      <>
                        <Link href="/login">
                          <Button variant="secondary" size="sm">
                            {t('logIn', { fallback: 'Log In' })}
                          </Button>
                        </Link>
                        <Link href="/sign-up">
                          <Button size="sm">
                            {t('signUp', { fallback: 'Sign Up' })}
                          </Button>
                        </Link>
                      </>
                    )}
                    <Link href="/cart">
                      <Button size="sm">
                        Cart <ArrowRightDownIcon />
                      </Button>
                    </Link>
                    {/* <Text>number</Text> */}
                    <Link href="mailto:info@automicus.com">
                      <Text>info@automicus.com</Text>
                    </Link>
                  </div>
                </section>
                <section className="flex flex-col gap-2.5">
                  <SocialNetworks />
                  <IconWrapper>
                    <TranslateIcon />
                  </IconWrapper>
                </section>
              </section>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const SocialNetworks = () => (
  <IconWrapper className="flex flex-col items-center gap-6">
    {[
      { Icon: XIcon, href: 'https://x.com/automicus' },
      { Icon: FacebookIcon, href: 'https://www.facebook.com/automicus/' },
    ].map(({ Icon, href }, index) => (
      <Link
        href={href}
        key={`icon-${index}`}
        className="flex h-4 w-max items-center justify-center"
      >
        <Icon />
      </Link>
    ))}
  </IconWrapper>
);

const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    className={cn(
      'rounded-full bg-black/10 p-3 backdrop-blur-[15px]',
      className,
    )}
  >
    {children}
  </section>
);
