'use client';

import { type ReactNode, useState } from 'react';
import type { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

import { cn } from '@/shared/lib/utils';

export const Dropdown = ({
  label,
  children,
}: {
  label: ReactNode;
  children:
    | ReactNode
    | ((props: { setOpen: (value: boolean) => void }) => ReactNode);
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger className="flex cursor-pointer items-center justify-center rounded-full bg-white/10 px-3 py-1.5 outline-0 backdrop-blur-[15px]">
        {label}
      </Trigger>
      <Portal>
        <Content
          sideOffset={14}
          className="z-[900] flex w-[390px] -translate-x-44 animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col gap-[6px] rounded-md bg-[#E5E5E5] p-2 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {typeof children === 'function' ? children({ setOpen }) : children}
        </Content>
      </Portal>
    </Root>
  );
};

export const DropdownItem = ({
  children,
  className,
  ...args
}: DropdownMenuItemProps) => (
  <Item className={cn('cursor-pointer hover:outline-0', className)} {...args}>
    {children}
  </Item>
);
