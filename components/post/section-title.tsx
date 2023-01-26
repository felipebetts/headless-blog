import React from 'react'


interface Props {
    children: React.ReactNode
}

const SectionTitle: React.FC<Props> = ({ children }) => (
    <h2 className='text-3xl font-medium py-4 mt-10'>
        { children }
    </h2>
)

export default SectionTitle