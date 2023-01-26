import React from 'react'
import ImageLabel from './image-label'


interface Props {
    src: string
    label: string
    alt?: string
}

const LabeledImage: React.FC<Props> = ({ src, label, alt }) => {
  return (
    <>
        <img
            src={src} alt={alt} 
            className='w-full'  
        />
        <span>
            <p>
                { label }
            </p>
        </span>
    </>
  )
}

export default LabeledImage