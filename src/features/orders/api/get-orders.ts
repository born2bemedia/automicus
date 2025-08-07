'use server';

import { cookies } from 'next/headers';

import type { Order } from '../model/types';

export async function getUserOrders(): Promise<Order[]> {
  const cookieInst = await cookies();

  const user = cookieInst.get('user')?.value;
  const userID = JSON.parse(user ?? '').id;

  const res = await fetch(
    `${process.env.SERVER_URL}/api/orders?where[user.id][in]=${userID}&limit=50`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await res.json();

  return data.docs.map(
    (item: {
      orderNumber: string;
      items: { name: string }[];
      total: number;
      createdAt: string;
      status: string;
    }) => ({
      orderId: item.orderNumber,
      name: item.items.map(bot => bot.name),
      price: item.total,
      orderDate: item.createdAt,
      orderStatus: item.status,
    }),
  );
}
