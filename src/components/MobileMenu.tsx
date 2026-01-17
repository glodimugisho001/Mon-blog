"use client"

import { Menu } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { buttonVariants } from './ui/button'

type Props = {
  links: {
    url: string;
    label: string;
  }[];
}

export default function MobileMenu({ links }: Props) {
    const [isOpen, setIsOpen] = useState(false)
  return (
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
              className={clsx(buttonVariants({ variant: "link" }), "hover:text-blue-600 transition-colors text-[18px]")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}