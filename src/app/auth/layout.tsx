import { PropsWithChildren } from 'react'


export default function AuthLayout({children}: PropsWithChildren) {
  return (
    <div className='flex justify-center items-center h-screen'>
      {children}
    </div>
  )
} 