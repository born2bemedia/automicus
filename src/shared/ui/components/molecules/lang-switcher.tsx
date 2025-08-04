'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { DeIcon } from '@/shared/ui/icons/countries/de';
import { GbIcon } from '@/shared/ui/icons/countries/gb';
import { ItIcon } from '@/shared/ui/icons/countries/it';
import { TranslateIcon } from '@/shared/ui/icons/fill';

import { Text } from '../atoms';

export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslations('langSwitcher');

  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = useCallback(
    (value: string) => {
      const segments = pathname.split('/');
      segments[1] = value;
      const newPath = segments.join('/');
      router.replace(newPath);
    },
    [pathname, router],
  );

  const languages = [
    { value: 'en', icon: <GbIcon />, label: t('en', { fallback: 'English' }) },
    { value: 'de', icon: <DeIcon />, label: t('de', { fallback: 'German' }) },
    { value: 'it', icon: <ItIcon />, label: t('it', { fallback: 'Italian' }) },
  ];

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="cursor-pointer bg-white/10 px-3 py-1.5 outline-0">
        <TranslateIcon />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[900] flex w-max animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col gap-2 rounded-[24px] border border-white/15 bg-black/10 p-[6px] shadow-[0_10px_25px_0_rgba(0,0,0,0.10)] backdrop-blur-[10px] data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {languages.map(option => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => {
                setOpen(false);
                switchLanguage(option.value);
              }}
              className="flex cursor-pointer items-center gap-2 rounded-3xl p-3 outline-0 transition duration-300 ease-in-out hover:bg-[#F3F3F3]/10"
            >
              {option.icon}
              <Text size="md" color="light" weight="medium">
                {option.label}
              </Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};
