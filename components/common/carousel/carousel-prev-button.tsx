import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { CarouselContext } from './carousel'

const CarouselPrevButton: React.FC = () => {

  const { scrollPrev } = useContext(CarouselContext)

  return (
    <button
      className="p-4 bg-opacity-50 border border-slate-700 bg-black mx-4 rounded-md hover:bg-opacity-90 transition-all duration-150"
      onClick={scrollPrev}
    >
      <ChevronLeftIcon className='h-6 w-6' />
    </button>
  )
}

export default CarouselPrevButton