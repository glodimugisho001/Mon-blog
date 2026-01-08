import { LoaderIcon } from 'lucide-react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <p className='text-[18px] font-bold text-neutral-800'>Chargement...</p>
      <LoaderIcon size={24} className='animate-spin '/>
    </div>
  )
}

export default Loader