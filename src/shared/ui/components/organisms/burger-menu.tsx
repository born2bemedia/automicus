'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { routes } from '@/shared/config/routes';
import { cn } from '@/shared/lib/utils';
import { Button, Text } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';
import {
  ArrowRightDownIcon,
  ThreeLinesIcon,
  TranslateIcon,
} from '@/shared/ui/icons/fill';
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from '@/shared/ui/icons/socials';

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
                <Text>Logo</Text>
                <button onClick={() => setOpen(false)}>
                  <ThreeLinesIcon color="black" />
                </button>
              </section>
              <section className="flex items-end justify-between gap-24">
                <section className="flex flex-col gap-[60px]">
                  <div className="flex flex-col gap-4">
                    {routes.map(({ label, url }) => (
                      <NavButton key={label} url={url} variant="flat">
                        {label}
                      </NavButton>
                    ))}
                    {/* <NavButton url="/catalog" variant="flat">
                      Catalog
                    </NavButton>
                    <NavButton url="/bot-bundles" variant="flat">
                      Bot Bundles
                    </NavButton>
                    <NavButton url="/bot-reviews" variant="flat">
                      Bot Reviews
                    </NavButton>
                    <NavButton url="/deals" variant="flat">
                      Deals
                    </NavButton>
                    <NavButton url="/compare-bots" variant="flat">
                      Compare Bots
                    </NavButton>
                    <NavButton url="/about-us" variant="flat">
                      About Us
                    </NavButton>
                    <NavButton url="/help-center" variant="flat">
                      FAQ
                    </NavButton> */}
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button size="sm">
                      Account <ArrowRightDownIcon />
                    </Button>
                    <Button size="sm">
                      Cart <ArrowRightDownIcon />
                    </Button>
                    <Text>number</Text>
                    <Text>email</Text>
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
