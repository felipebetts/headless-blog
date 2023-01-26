import React from 'react'


interface Props {
    children: React.ReactNode
}

const Paragraph: React.FC<Props> = ({ children }) => (
    <p
        className='text-lg leading-[1.65rem] my-6'
    >
        { children }
    </p>
)

export default Paragraph