import type { useTranslations } from 'next-intl';
import { create } from 'zustand';

import { BoxIcon } from '@/shared/ui/icons/fill/box';
import { RobotIcon } from '@/shared/ui/icons/fill/robot';
import { UserIcon } from '@/shared/ui/icons/fill/user';

export const useTabsStore = create<{
  getTabs: (t: ReturnType<typeof useTranslations>) => {
    label: string;
    tab: 'data' | 'bots' | 'orders';
    icon: React.ElementType;
  }[];
  activeTab: 'data' | 'bots' | 'orders';
  setActiveTab: (tab: 'data' | 'bots' | 'orders') => void;
}>(set => ({
  getTabs: (t: ReturnType<typeof useTranslations>) => [
    {
      label: t('yourData', { fallback: 'Your Data' }),
      tab: 'data' as const,
      icon: UserIcon,
    },
    {
      label: t('yourBots', { fallback: 'Your Bots' }),
      tab: 'bots' as const,
      icon: RobotIcon,
    },
    {
      label: t('yourOrders', { fallback: 'Your Orders' }),
      tab: 'orders' as const,
      icon: BoxIcon,
    },
  ],
  activeTab: 'data',
  setActiveTab: tab => set({ activeTab: tab }),
}));
