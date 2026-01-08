import SearchBar from "../../components/SearchBar";
import Posts from "@/components/Posts";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
export default async function BlogHome() {
  const posts = await prisma.post.findMany();
  return (
    <div className="">
      <section className="text-center mt-6">
        <h1 className="text-4xl font-bold text-neutral-800">
          Blog des développeurs modernes
        </h1>
        <p className="text-neutral-500 mt-2">
          Des idées, du code et des réflexions sur le web moderne ✨
        </p>
      </section>
      <SearchBar />
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Mes articles</h2>
        <Suspense
          fallback={
            <div className="text-center">Chargement des articles...</div>
          }
        >
          <Posts posts={posts} />
        </Suspense>
      </section>
    </div>
  );
}
