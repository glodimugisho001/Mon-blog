import Loader from "@/components/Loader";
import SearchBar from "../../components/SearchBar";
import Posts from "@/components/Posts";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import BlogHomeClient from "./BlogHomeClient";

export default async function BlogHome() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <BlogHomeClient posts={posts} />;
}
