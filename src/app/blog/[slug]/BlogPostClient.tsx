"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import ReadingProgress from "@/components/ReadingProgress";
import type { Post } from "@prisma/client";

type Props = {
  post: Post;
};

export default function BlogPostClient({ post }: Props) {
  // Estimate reading time (assuming 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen">
        <motion.section
          className="max-w-4xl mx-auto px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blog"
              className={clsx(
                buttonVariants({ variant: "ghost" }),
                "group hover:text-blue-600 transition-colors font-medium flex gap-2 items-center w-fit",
              )}
            >
              <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
                <ArrowLeft size={20} />
              </motion.div>
              <span>Retour aux articles</span>
            </Link>
          </motion.div>

          {/* Article header */}
          <motion.header
            className="mb-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {post?.title ?? "Aucun titre trouvé"}
            </motion.h1>

            {/* Meta information */}
            <motion.div
              className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time className="font-medium">
                  {post?.createdAt.toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }) ?? "Aucune date trouvée"}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{readingTime} min de lecture</span>
              </div>
            </motion.div>

            {/* Tags */}
            {post?.tags.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {post.tags.map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="cursor-default hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.header>

          {/* Featured image */}
          {post?.image && (
            <motion.div
              className="mb-8 overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={post.image}
                width={1200}
                height={600}
                alt={post.title ?? "Article image"}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
          )}

          {/* Article content */}
          <motion.article
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-lg leading-relaxed">{post?.content}</p>
          </motion.article>

          {/* Share section */}
          <motion.div
            className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-center text-neutral-600 dark:text-neutral-400">
              Merci d'avoir lu cet article ! 🎉
            </p>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
