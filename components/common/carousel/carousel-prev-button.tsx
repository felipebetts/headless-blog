import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { CarouselContext } from './carousel'

const CarouselPrevButton: React.FC = () => {

  const { scrollPrev } = useContext(CarouselContext)

  return (
    <button
      className="p-4 mx-4 rounded-md border border-white/60 bg-slate-900/30 hover:bg-indigo-700 transition-all duration-150"
      onClick={scrollPrev}
    >
      <ChevronLeftIcon className='h-6 w-6' />
    </button>
  )
}

export default CarouselPrevButton