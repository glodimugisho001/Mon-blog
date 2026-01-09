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
      <Item variant="outline">
        <ItemHeader>
          {post.image && (
            <Image
              src={post.image}
              width={600}
              height={400}
              alt={post.title}
              className="W-full rounded-sm"
            />
          )}
        </ItemHeader>
        <ItemContent>
          <ItemTitle>{post.title}</ItemTitle>
          <ItemDescription>{post.excerpt}</ItemDescription>
        </ItemContent>
        <ItemFooter>
          <Link
            href={`/blog/${post.slug}`}
            onClick={() => handleNavigate(post.slug)}
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            {loadingSlug === post.slug ? (
              <p className="flex gap-2 items-center">
                <Spinner />
                <span>Loading ...</span>
              </p>
            ) : (
              <p className="flex gap-2 items-center">
                <span>Lire plus </span>
                <ArrowRight />
              </p>
            )}
          </Link>
        </ItemFooter>
      </Item>
    </div>
  );
}
