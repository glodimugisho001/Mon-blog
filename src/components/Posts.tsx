"use client";

import React from "react";
import PostCard from "./PostCard";
import { posts } from "../app/data/blog";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
export default function Posts() {
  const params = useSearchParams()
  const paramsFound = params.get("title")?.toLowerCase() || ""
  const fitleredPosts = posts.filter(posts => posts.title.toLowerCase().includes(paramsFound))

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mx-auto max-w-[1200px] md:px-0">
      {fitleredPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center text-gray-500">
          <Search className="w-10 h-10 mb-2 text-gray-400" />
          <p className="text-lg font-semibold">Aucun résultat trouvé</p>
          <p className="text-sm text-gray-400">
            Essayez avec un autre mot-clé 👀
          </p>
        </div>
      ) : (
        fitleredPosts.map((post) => (
            <PostCard post={post} key={post.slug} />
        ))
      )}
    </div>
  );
}
