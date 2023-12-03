import Image from 'next/image'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image src='/images/sunny.jpeg' alt='sunny' width={1153 / 3} height={1440 / 3} />
    </>
  )
}