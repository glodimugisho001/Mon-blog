import React from "react";
;
import PostCard from "./PostCard";
import { posts } from "@/app/data/blog";

export default function LastPosts() {
  const lastPosts = posts.slice(0, 4);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mx-auto max-w-[1200px]">
      {lastPosts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
}
