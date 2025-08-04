'use client';

import { useEffect, useMemo, useState } from 'react';

import { getCart } from '@/features/cart/api/get-cart';
import type { CartItem } from '@/features/cart/model/types';
import { CartOrder } from '@/features/cart/ui/cart-order';
import { EmptyCart } from '@/features/cart/ui/empty-cart';

export const CartContainer = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = getCart();
    setCart(cart);
    console.log('cart', cart);
  }, []);

  const updateQuantity = (name: string, delta: number) => {
    setCart(prev =>
      prev.map(item =>
        item.name === name
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
              total: item.price * Math.max(1, item.quantity + delta),
            }
          : item,
      ),
    );
  };

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );

  const increment = (name: string) => updateQuantity(name, 1);
  const decrement = (name: string) => updateQuantity(name, -1);

  return (
    <main>
      {cart.length ? (
        <CartOrder
          items={cart}
          total={total}
          onIncrement={increment}
          onDecrement={decrement}
        />
      ) : (
        <EmptyCart />
      )}
    </main>
  );
};
