// components/WhyBlog.tsx
"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

export default function WhyBlog() {
  return (
    <section
      aria-labelledby="why-blog-title"
      className="max-w-[1100px] mx-auto py-10"
    >
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 bg-white dark:bg-gray-900 shadow-sm">
        <div className="mb-4">
          <div
            className="inline-block px-3 py-1 border-b-2 border-yellow-400 font-semibold text-sm rounded-sm bg-yellow-50 dark:bg-yellow-950/20"
            aria-hidden
          >
            POURQUOI CE BLOG ?
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3
              id="why-blog-title"
              className="text-2xl md:text-3xl font-extrabold leading-tight"
            >
              Apprenez le frontend moderne avec des exemples concrets
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-prose">
              Sur ce blog, je partage des sujets réel et des exemples concrets
              pour apprendre le frontend moderne avec React et Next.js.
            </p>

            <div className="mt-6">
              <Link href="/blog">
                <Button className="inline-block rounded-md bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-500 transition">
                  Voir les articles
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-72 flex-shrink-0">
            <blockquote className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-800 p-4 rounded-lg shadow-sm">
              <svg
                className="absolute -top-3 -left-3 w-8 h-8 text-yellow-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7.17 6A5 5 0 1 1 11 11.83V15h-5v-3.17A5 5 0 0 1 7.17 6zM17.17 6A5 5 0 1 1 21 11.83V15h-5v-3.17A5 5 0 0 1 17.17 6z" />
              </svg>

              <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 italic">
                « Apprenez le frontend moderne avec des exemples concrets, pas
                des théories abstraites. Construisez, corrigez, améliorez. »
              </p>

              <cite className="mt-3 block text-xs text-gray-500 dark:text-gray-400">
                — Glodi Code
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
