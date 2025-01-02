"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex gap-2 text-2xl font-bold text-blue-400">
          <Image src="/logo.svg" width={30} height={30} alt="logo" />
          <span>Uzumaki</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/#content" className="hover:text-blue-400">
              Research
            </Link>
          </li>
          <li>
            <Link href="/visit" className="hover:text-blue-400">
              Visit
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/contribute" className="hover:text-blue-400">
              Donate
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-blue-400"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white p-4 md:hidden">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/#content"
                  className="hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/visit"
                  className="hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Visit
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contribute"
                  className="hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
