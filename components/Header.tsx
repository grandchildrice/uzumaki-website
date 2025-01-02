import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-blue-400">Uzumaki Research House</Link>
        <ul className="flex space-x-4">
          <li><Link href="/#content" className="hover:text-blue-400">Research</Link></li>
          <li><Link href="/visit" className="hover:text-blue-400">Visit</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          <li><Link href="/contribute" className="hover:text-blue-400">Contribute</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

