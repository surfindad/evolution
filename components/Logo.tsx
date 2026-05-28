export default function Logo({ className = 'h-14 w-auto' }: { className?: string }) {
  return (
    <img
      src="/images/evolution-logo.png"
      alt="Evolution Accelerator"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
