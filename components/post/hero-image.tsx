import React from 'react'

interface Props {
  src?: string
}

const HeroImage: React.FC<Props> = ({ src }) => {
  return (
    <div
      className={` bg-[url('https://www.showmetech.com.br/wp-content/uploads//2023/01/destacada-chat-gpt-passa-em-mba-showmetech-1920x1024.png')] bg-cover bg-center h-72 lg:h-[70vh]`}
    />
  )
}

export default HeroImage