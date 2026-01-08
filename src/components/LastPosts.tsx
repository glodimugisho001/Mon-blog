
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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mx-auto max-w-[1200px]">
      {lastPosts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
}
