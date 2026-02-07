import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative -mx-6 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-pink-500 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
          Frontend moderne
        </span>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Bienvenue sur le blog de{" "}
          <span className="text-yellow-300">Glodi Code</span>
        </h1>

        <p className="text-base md:text-xl max-w-2xl text-white/90">
          Apprenez <span className="font-semibold text-yellow-300">React</span>{" "}
          et <span className="font-semibold text-yellow-300">Next.js</span> pour
          devenir un développeur frontend moderne, performant et créatif.
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/blog">
            <Button className="bg-white text-blue-700 hover:bg-yellow-300 hover:text-blue-900 transition-colors px-6 py-3 rounded-lg shadow-lg">
              Découvrez les articles
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Rejoindre la communauté
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            "Guides pas-à-pas adaptés aux débutants",
            "Exemples concrets pour progresser vite",
            "Ressources pratiques pour vos projets",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-5 text-sm text-white/90 shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-10 -left-20 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
      <div className="absolute -top-16 -right-16 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl" />
    </section>
  );
}
