// components/WhyBlog.tsx
"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function WhyBlog() {
  return (
    <section
      aria-labelledby="why-blog-title"
      className="max-w-[1100px] mx-auto px-6 py-10"
    >
      <motion.div
        className="border border-gray-200/70 dark:border-gray-700 rounded-2xl p-6 md:p-10 bg-white/90 dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="inline-block px-3 py-1 border-b-2 border-yellow-400 font-semibold text-sm rounded-sm bg-yellow-50 dark:bg-yellow-950/20"
            aria-hidden
          >
            POURQUOI CE BLOG ?
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <motion.h3
              id="why-blog-title"
              className="text-2xl md:text-4xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Apprenez le frontend moderne avec des exemples concrets
            </motion.h3>

            <motion.p
              className="mt-3 text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-prose"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Sur ce blog, je partage des sujets réel et des exemples concrets
              pour apprendre le frontend moderne avec React et Next.js.
            </motion.p>

            <ul className="mt-6 grid gap-3 text-sm text-gray-700 dark:text-gray-300">
              {[
                "Des explications claires pour passer du concept au code.",
                "Des mini-projets pour pratiquer rapidement.",
                "Des astuces UX/UI pour livrer des interfaces soignées.",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-800/40 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 4 }}
                >
                  <motion.span
                    className="mt-1 h-2 w-2 rounded-full bg-yellow-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                    }}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href="/blog">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button className="inline-block rounded-md bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-500 transition">
                    Voir les articles
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="w-full md:w-80 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <blockquote className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <motion.svg
                className="absolute -top-3 -left-3 w-8 h-8 text-yellow-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                initial={{ rotate: -20, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <path d="M7.17 6A5 5 0 1 1 11 11.83V15h-5v-3.17A5 5 0 0 1 7.17 6zM17.17 6A5 5 0 1 1 21 11.83V15h-5v-3.17A5 5 0 0 1 17.17 6z" />
              </motion.svg>

              <motion.p
                className="text-sm md:text-base text-gray-700 dark:text-gray-200 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                « Apprenez le frontend moderne avec des exemples concrets, pas
                des théories abstraites. Construisez, corrigez, améliorez. »
              </motion.p>

              <motion.cite
                className="mt-3 block text-xs text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                — Glodi Code
              </motion.cite>
            </blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
