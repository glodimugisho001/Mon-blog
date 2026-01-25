import { PropsWithChildren } from 'react'


export default function AuthLayout({children}: PropsWithChildren) {
  return (
    <div className='flex justify-center items-start h-screen mt-8'>
      {children}
    </div>
  )
} 