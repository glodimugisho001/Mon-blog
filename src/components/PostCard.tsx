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

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  // const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  const [loadingSlug, setLoadingSlug] = useState("");
  // const handleNavigate = (slug: string) => {
  //   setLoadingSlug(slug);
  //   startTransition(() => {
  //     router.push(`/blog/${slug}`);
  //   });
  // };
  const handleNavigate = (slug: string) => {
    setLoadingSlug(slug);
  };

  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <Item
        variant="outline"
        className="overflow-hidden rounded-2xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <ItemHeader>
          {post.image && (
            <Image
              src={post.image}
              width={600}
              height={400}
              alt={post.title}
              className="h-48 w-full rounded-none object-cover"
            />
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
            <div className="flex flex-wrap gap-2 text-xs">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </ItemContent>
        <ItemFooter className="items-center">
          <Link
            href={`/blog/${post.slug}`}
            onClick={() => handleNavigate(post.slug)}
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className: "group gap-2"
            })}
          >
            {loadingSlug === post.slug ? (
              <p className="flex gap-2 items-center">
                <Spinner />
                <span>Loading ...</span>
              </p>
            ) : (
              <p className="flex gap-2 items-center">
                <span>Lire plus </span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </p>
            )}
          </Link>
        </ItemFooter>
      </Item>
    </div>
  );
}
