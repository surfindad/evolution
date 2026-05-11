export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="50" cy="13" r="7" fill="#77DD77" />
      {/* Body */}
      <rect x="47" y="13" width="6" height="58" rx="3" fill="#77DD77" />
      {/* Upper left wing */}
      <ellipse cx="27" cy="35" rx="26" ry="13" transform="rotate(-22 27 35)" fill="#77DD77" opacity="0.95" />
      {/* Upper right wing */}
      <ellipse cx="73" cy="35" rx="26" ry="13" transform="rotate(22 73 35)" fill="#77DD77" opacity="0.95" />
      {/* Lower left wing */}
      <ellipse cx="34" cy="50" rx="17" ry="9" transform="rotate(8 34 50)" fill="#77DD77" opacity="0.82" />
      {/* Lower right wing */}
      <ellipse cx="66" cy="50" rx="17" ry="9" transform="rotate(-8 66 50)" fill="#77DD77" opacity="0.82" />
    </svg>
  )
}
