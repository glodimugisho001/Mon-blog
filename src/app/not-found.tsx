import { Card, CardTitle, CardHeader, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import React from 'react'
import { RabbitIcon } from 'lucide-react'

export default function NotFoundPAge() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Card className=''>
          <CardHeader className='flex flex-col items-center gap-2'>
            <RabbitIcon size={96} />
            <CardTitle className='text-4xl text-red-500'>404</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-center font-bold text-2xl'>La page que vous recherchez n&apos;existe pas</CardDescription>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <Link href="/" className={buttonVariants({ size: "lg", variant: "outline" })}>Accueil</Link>
          </CardFooter>
      </Card>
    </div>
  )
}