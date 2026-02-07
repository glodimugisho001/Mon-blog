
import PostCard from "./PostCard";
import { prisma } from "@/lib/prisma";

export default async function LastPosts() {
  const lastPosts = await prisma.post.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc"
    }
  })
  
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 mx-auto max-w-[1200px]">
      {lastPosts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
}
