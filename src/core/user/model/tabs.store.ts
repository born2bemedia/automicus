import { create } from 'zustand';

import { BoxIcon } from '@/shared/ui/icons/fill/box';
import { RobotIcon } from '@/shared/ui/icons/fill/robot';
import { UserIcon } from '@/shared/ui/icons/fill/user';

export const useTabsStore = create<{
  tabs: {
    label: string;
    tab: 'data' | 'bots' | 'orders';
    icon: React.ElementType;
  }[];
  activeTab: 'data' | 'bots' | 'orders';
  setActiveTab: (tab: 'data' | 'bots' | 'orders') => void;
}>(set => ({
  tabs: [
    { label: 'Your Data', tab: 'data', icon: UserIcon },
    { label: 'Your Bots', tab: 'bots', icon: RobotIcon },
    { label: 'Your Orders', tab: 'orders', icon: BoxIcon },
  ],
  activeTab: 'data',
  setActiveTab: tab => set({ activeTab: tab }),
}));
