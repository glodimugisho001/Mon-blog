import { posts } from "@/app/data/blog";
import { prisma } from "@/lib/prisma";

export const seed = async () => {
  await prisma.post.deleteMany();

  await Promise.all(
    posts.map(async (post) => {
      await prisma.post.create({
        data: {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          tags: post.tags,
          image: post.image,
        },
      });
    })
  );
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
