import { create } from 'zustand';

import type { CartItem } from './types';

export const useCartStore = create<{
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}>(set => ({
  cart: [],
  setCart: cart => set({ cart }),
}));
