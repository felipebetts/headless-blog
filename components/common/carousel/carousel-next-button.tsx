import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { CarouselContext } from './carousel'

interface Props {
}

const CarouselNextButton: React.FC = () => {
  const { scrollNext } = useContext(CarouselContext)
  return (
    <button 
      className="p-4 border border-white/60 bg-slate-900/30 hover:bg-indigo-700 rounded-md transition-all duration-150"
      onClick={scrollNext}  
    >
      <ChevronRightIcon className='h-6 w-6' />
    </button>
  )
}

export default CarouselNextButton