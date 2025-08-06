'use server';

import type { CartSchema } from '../model/schemas';
import type { CartItem } from '../model/types';
import type { User } from '@/core/user/model/types';

export const sendOrder = async ({
  billing,
  products,
  user,
  totalPrice,
}: {
  billing: CartSchema;
  products: CartItem[];
  user?: User;
  totalPrice: number;
}) => {
  const orderNumber = String(Date.now());

  console.log('products', products);

  const items = products.flatMap(item =>
    'bots' in item
      ? item.bots.flatMap(bot => Array(item.quantity).fill(bot.id))
      : Array(item.quantity).fill(item.id),
  );

  const res = await fetch(`${process.env.SERVER_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      orderNumber,
      items,
      billingAddress: billing,
      total: totalPrice,
    }),
  });

  return await res.json();
};
