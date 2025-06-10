'use client';

export const OpenIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect width="24" height="24" rx="12" fill="#CBFF00" />
    <path
      d="M5 12.5385V11.4615H11.4615V5H12.5385V11.4615H19V12.5385H12.5385V19H11.4615V12.5385H5Z"
      fill="black"
    />
  </svg>
);
