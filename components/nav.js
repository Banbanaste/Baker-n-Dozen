import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="p-8 fixed z-50">
          <Link href="/">
            <Image 
              src="/bnd_logo.png"
              alt="Baker and Dozen logo"
              width="100px"
              height="50px"
            />
          </Link>
    </nav>
  )
}
