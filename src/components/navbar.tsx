'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const links= [
  {url: "/", label: "Home"},
  {url: "/blog", label: "Blog"},
]
export default function Navbar({}: Props) {
   const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 border-b-[2px] border-gray-200 md:border-none  ">

        <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
          <Link href="/">Glodi.dev</Link>
        </h1>

        <nav>
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="hover:text-blue-600 transition-colors text-2xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none flex flex-col justify-center gap-1 w-6 h-6"
            >
              <Menu size={32}/>
            </button>

            <ul
              className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {links.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>

  )
}