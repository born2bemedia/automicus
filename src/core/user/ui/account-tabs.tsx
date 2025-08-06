'use client';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms';

import { useTabsStore } from '../model/tabs.store';

export const AccountTabs = () => {
  const { activeTab, setActiveTab, tabs } = useTabsStore();

  return tabs.map(({ icon: Icon, label, tab }) => (
    <button
      key={label}
      className={cn(
        'flex w-[257px] cursor-pointer items-center gap-2.5 rounded-lg border bg-[#1C1C1C] p-4 max-lg:w-full',
        activeTab === tab ? 'border-[#CBFF00]' : 'border-[#1C1C1C]',
      )}
      onClick={() => setActiveTab(tab)}
    >
      <Icon color={activeTab === tab ? '#CBFF00' : '#fff'} />
      <Text color="light">{label}</Text>
    </button>
  ));
};
