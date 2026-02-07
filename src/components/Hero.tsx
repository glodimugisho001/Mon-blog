"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative -mx-6 overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-pink-500 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />

      <motion.div
        className="absolute -top-16 -right-16 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center md:py-32">
        {/* Badge with fade-in */}
        <motion.span
          className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Frontend moderne
        </motion.span>

        {/* Main title with stagger animation */}
        <motion.h1
          className="text-4xl font-extrabold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Bienvenue sur le blog de{" "}
          <span className="text-yellow-300 inline-block">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "backOut" }}
            >
              Glodi Code
            </motion.span>
          </span>
        </motion.h1>

        {/* Description with fade-in */}
        <motion.p
          className="text-base md:text-xl max-w-2xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Apprenez <span className="font-semibold text-yellow-300">React</span>{" "}
          et <span className="font-semibold text-yellow-300">Next.js</span> pour
          devenir un développeur frontend moderne, performant et créatif.
        </motion.p>

        {/* CTA Buttons with stagger */}
        <motion.div
          className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link href="/blog">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button className="bg-white text-blue-700 hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl">
                Découvrez les articles
              </Button>
            </motion.div>
          </Link>
          <Link href="/auth/signup">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                className="border-white/80 text-black hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Rejoindre la communauté
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Feature cards with stagger animation */}
        <motion.div
          className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            "Guides pas-à-pas adaptés aux débutants",
            "Exemples concrets pour progresser vite",
            "Ressources pratiques pour vos projets",
          ].map((item, index) => (
            <motion.div
              key={item}
              className="group rounded-2xl border border-white/15 bg-white/10 px-4 py-5 text-sm text-white/90 shadow-sm backdrop-blur cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.9 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.3)",
                y: -4,
              }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
