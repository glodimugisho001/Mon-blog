import Link from 'next/link'
import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
type Props = {}

export default function Footer({}: Props) {
  return (
    <>
      <footer className="border-t mt-12 py-8">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo + titre */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Glodi.dev Blog</h2>
            <p className="text-sm text-muted-foreground">
              Apprenez à coder avec passion, une ligne à la fois ✨
            </p>
          </div>

          {/* Liens */}
          <nav>
            <ul className="flex gap-4 text-sm">
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy" className="hover:underline">Confidentialité</Link>
            </ul>
          </nav>

          {/* Réseaux */}
          <div className="flex gap-3">
            <a href="https://github.com/glodimugisho001">
                <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/glodi-code?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <Linkedin size={24}  />
            </a>
            <a href="https://x.com/GlodiMugisho">
                <Twitter size={24}  />
            </a>  
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-4">
          Fait avec <span className="text-red-500">❤️</span> par {""}
          <a
            href="https://glodi-code.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition-colors font-bold"
          >
            Glodi Code
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} Glodi.dev — Tous droits réservés.
        </div>
      </footer>

    </>
  )
}