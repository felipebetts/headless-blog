import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { CarouselContext } from './carousel'

interface Props {
}

const CarouselNextButton: React.FC = () => {
  const { scrollNext } = useContext(CarouselContext)
  return (
    <button 
      className="p-4 bg-indigo-600 hover:bg-indigo-800 shadow-xl rounded-md transition-all duration-150"
      onClick={scrollNext}  
    >
      <ChevronRightIcon className='h-6 w-6' />
    </button>
  )
}

export default CarouselNextButton