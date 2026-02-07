"use client";

import { useState } from "react";
import { Post } from "../types/blogType";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "./ui/item";
import { Spinner } from "./ui/spinner";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  post: Post;
  index?: number;
};

export default function PostCard({ post, index = 0 }: Props) {
  const [loadingSlug, setLoadingSlug] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = (slug: string) => {
    setLoadingSlug(slug);
  };

  return (
    <motion.div
      className="flex w-full max-w-xl flex-col gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Item
          variant="outline"
          className="overflow-hidden rounded-2xl border-border/60 bg-card/80 shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >
          <ItemHeader className="relative overflow-hidden group">
            {post.image && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={post.image}
                  width={600}
                  height={400}
                  alt={post.title}
                  className="h-48 w-full rounded-none object-cover"
                />
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}
          </ItemHeader>
          <ItemContent className="gap-3">
            <ItemTitle className="text-lg md:text-xl font-semibold">
              {post.title}
            </ItemTitle>
            <ItemDescription className="text-sm md:text-base">
              {post.excerpt}
            </ItemDescription>
            {post.tags?.length ? (
              <motion.div
                className="flex flex-wrap gap-2 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {post.tags.slice(0, 3).map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            ) : null}
          </ItemContent>
          <ItemFooter className="items-center">
            <Link
              href={`/blog/${post.slug}`}
              onClick={() => handleNavigate(post.slug)}
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "group gap-2 transition-all duration-300",
              })}
            >
              {loadingSlug === post.slug ? (
                <span className="flex gap-2 items-center">
                  <Spinner />
                  <span>Loading ...</span>
                </span>
              ) : (
                <span className="flex gap-2 items-center">
                  <span>Lire plus </span>
                  <motion.span
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="transition-transform" />
                  </motion.span>
                </span>
              )}
            </Link>
          </ItemFooter>
        </Item>
      </motion.div>
    </motion.div>
  );
}
