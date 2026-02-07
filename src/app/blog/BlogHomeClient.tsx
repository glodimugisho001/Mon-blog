"use client";

import Loader from "@/components/Loader";
import SearchBar from "../../components/SearchBar";
import Posts from "@/components/Posts";
import { Post } from "@/types/blogType";
import { motion } from "framer-motion";

type Props = {
  posts: Post[];
};

export default function BlogHomeClient({ posts }: Props) {
  return (
    <div className="">
      <section className="relative text-center mt-6 px-4 py-12 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Blog des développeurs modernes
          </motion.h1>
          <motion.p
            className="text-neutral-600 dark:text-neutral-300 mt-2 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Des idées, du code et des réflexions sur le web moderne ✨
          </motion.p>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <SearchBar />
      </motion.div>

      <section className="py-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Mes articles
        </motion.h2>
        <Posts posts={posts} />
      </section>
    </div>
  );
}
