import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: customDelay },
  }),
};
