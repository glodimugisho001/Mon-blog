import Loader from "@/components/Loader";
import SearchBar from "../../components/SearchBar";
import Posts from "@/components/Posts";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import BlogHomeClient from "./BlogHomeClient";

// Force le rendu dynamique pour éviter l'exécution pendant le build
export const dynamic = 'force-dynamic';

export default async function BlogHome() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <BlogHomeClient posts={posts} />;
}
