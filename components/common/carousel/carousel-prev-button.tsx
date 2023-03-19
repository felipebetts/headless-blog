import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { CarouselContext } from './carousel'

const CarouselPrevButton: React.FC = () => {

  const { scrollPrev } = useContext(CarouselContext)

  return (
    <button
      className="p-4 shadow-xl mx-4 rounded-md bg-indigo-600 hover:bg-indigo-800 transition-all duration-150"
      onClick={scrollPrev}
    >
      <ChevronLeftIcon className='h-6 w-6' />
    </button>
  )
}

export default CarouselPrevButton