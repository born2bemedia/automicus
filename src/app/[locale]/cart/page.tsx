import type { Metadata } from 'next';

import { CartContainer } from './components';

export const metadata: Metadata = {
  title: 'Cart | Automicus',
  openGraph: {
    title: 'Cart | Automicus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cart | Automicus',
  },
  robots: {
    index: false,
  },
};

export default function CartPage() {
  return <CartContainer />;
}
