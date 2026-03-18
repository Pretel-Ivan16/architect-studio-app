import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className='font-serif text-2xl tracking-wider text-foreground'>
      ARQ<span className='text-[#610000]'>.</span>
    </Link>
  )
}
