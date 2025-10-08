import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center -mx-6 text-center gap-6 py-32 bg-gradient-to-r from-blue-500  to-pink-500 text-white overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Bienvenue sur le blog de{" "}
        <span className="text-yellow-300">Glodi Code</span>
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Apprenez <span className="font-semibold text-yellow-300">React</span> et{" "}
        <span className="font-semibold text-yellow-300">Next.js</span> pour
        devenir un développeur frontend moderne, performant et créatif.
      </p>

      <Link href="/blog">
        <Button className="mt-4 bg-white text-blue-600 hover:bg-yellow-300 hover:text-white transition-colors px-6 py-3 rounded-lg shadow-lg">
          Découvrez les articles
        </Button>
      </Link>

      <div className="absolute -bottom-10 -left-20 w-72 h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-pink-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </div>
  );
}
