import Image from 'next/image'

export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <Image
      src="/images/evolution-logo.png"
      alt="Evolution Accelerator"
      width={40}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
