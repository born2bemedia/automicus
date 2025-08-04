import { lsRead } from '@/shared/lib/utils/browser';

import type { CartItem } from '../model/types';

export function getCart(): CartItem[] {
  const data = lsRead('cart');
  return data
    ? JSON.parse(data).map((item: CartItem) => ({
        ...item,
        total: item.price * item.quantity,
      }))
    : [];
}
