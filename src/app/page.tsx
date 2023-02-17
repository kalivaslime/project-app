import Button from '@/components/Button'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Hello Mom</h1>

      <Link href='/home'>
        <Button>Go Home</Button>
      </Link>
    </div>
  )
}
