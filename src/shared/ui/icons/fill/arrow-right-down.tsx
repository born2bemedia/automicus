'use client';

export const ArrowRightDownIcon = ({
  color = '#030712',
  size = 24,
}: {
  color?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 7L17 17M17 17V7M17 17H7"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
