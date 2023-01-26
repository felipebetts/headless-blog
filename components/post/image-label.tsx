import React from 'react'


interface Props {
    children: React.ReactNode
}

const ImageLabel: React.FC<Props> = ({ children }) => (
    <p
        className='w-full text-gray-500 text-xs text-center my-1'
    >
        { children }
    </p>
)

export default ImageLabel