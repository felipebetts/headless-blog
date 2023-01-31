import React from 'react'


interface Props {
    children: React.ReactNode
}

const ImageLabel: React.FC<Props> = ({ children }) => (
    <p
        className='w-full text-slate-500 dark:text-slate-200 text-xs text-center my-1'
    >
        { children }
    </p>
)

export default ImageLabel