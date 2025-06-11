'use client';

export const ArrowRightDownIcon = ({
  color = '#030712',
  size = 24,
  bold = false,
}: {
  color?: string;
  size?: number;
  bold?: boolean;
}) =>
  bold ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M14 14L34 34M34 34V14M34 34H14"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
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
