import { posts } from '@/app/data/blog'
import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type Props = {
  params: Promise<{slug: string}>
}

export default async function page({params}: Props) {
  const idParams = await params
  const postFound = posts.find(post => post.slug === idParams.slug)
  return (
    <div className="">
      <section className="max-w-3xl mx-auto px-4">
        <div className=" mt-6 mb-4">
          <Link
            href="/blog"
            className="text-blue-600 hover:underline font-medium flex gap-2 items-center text-[24px]"
          >
            <ArrowLeft size={24}/><span >Retour</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
          {postFound?.title ?? 'Aucun titre trouvé'}
        </h1>
        <div className="flex items-center gap-4 text-neutral-500 text-sm">
          <span>{postFound?.date ?? 'Aucune date trouvée'}</span>
          <Badge variant={'secondary'}>{postFound?.tag}</Badge>
        </div>
        <Image
          src={postFound?.image ?? "/next.svg"}
          width={250}
          height={150}
          alt={postFound?.title ?? 'Aucun titre trouvé'}
          className="W-full rounded-md my-6 mx-auto"
        />
        <article className="prose prose-lg max-w-3xl mx-auto text-neutral-800 text-justify md:text-[18px]">
          <p>{postFound?.content}</p>
        </article>
      </section>
    </div>
  )
}
