export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="60" cy="13" r="9" fill="#77DD77" />
      {/* Body */}
      <rect x="56.5" y="22" width="7" height="75" rx="3.5" fill="#77DD77" />
      {/* Upper left wing */}
      <path d="M60 35 C50 18, 10 12, 5 32 C2 46, 30 52, 60 40 Z" fill="#77DD77" />
      {/* Upper right wing */}
      <path d="M60 35 C70 18, 110 12, 115 32 C118 46, 90 52, 60 40 Z" fill="#77DD77" />
      {/* Lower left wing */}
      <path d="M60 52 C50 44, 18 46, 16 60 C14 70, 38 72, 60 60 Z" fill="#77DD77" opacity="0.88" />
      {/* Lower right wing */}
      <path d="M60 52 C70 44, 102 46, 104 60 C106 70, 82 72, 60 60 Z" fill="#77DD77" opacity="0.88" />
    </svg>
  )
}
