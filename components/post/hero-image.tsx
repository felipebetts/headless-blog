import Image from 'next/image'
import React, { useEffect } from 'react'

interface Props {
  src: string,
  alt: string
}

const HeroImage: React.FC<Props> = ({ src, alt }) => {

  let bgUrl = `bg-transparent`
  if (src) {
    bgUrl = `url('${src}')`
  }
  
  // <div
  //   style={{ backgroundImage: bgUrl}}
  //   className={`
  //     bg-cover bg-center h-72 lg:h-[70vh]
  //   `}
  // />
  return (
    <div
      className='relative h-72 lg:h-[70vh]'    
    >
      <Image 
        src={src}
        alt={alt}
        fill
        className='object-cover'
      />
    </div>
    
  )
}

export default HeroImage