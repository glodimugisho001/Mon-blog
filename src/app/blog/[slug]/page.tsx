import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BlogPostClient from "./BlogPostClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: Props) {
  const idParams = await params;

  const postFound = await prisma.post.findUnique({
    where: {
      slug: idParams.slug,
    },
  });

  if (!postFound) {
    notFound();
  }

  return <BlogPostClient post={postFound} />;
}
