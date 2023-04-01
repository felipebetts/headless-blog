import Image from 'next/image'
import React, { useEffect } from 'react'

interface Props {
  src: string,
  alt: string
}

const HeroImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div
      className='relative h-72 lg:h-[70vh] bg-black/30 dark:bg-none'    
    >
      <Image 
        src={src}
        alt={alt}
        fill
        // priority={true}
        className='object-cover'
      />
    </div>
    
  )
}

export default HeroImage