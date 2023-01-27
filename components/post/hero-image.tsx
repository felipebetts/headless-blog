import React, { useEffect } from 'react'

interface Props {
  src?: string
}

const HeroImage: React.FC<Props> = ({ src }) => {

  let bgUrl = `bg-transparent`
  if (src) {
    bgUrl = `url('${src}')`
  }

  return (
    <div
      style={{ backgroundImage: bgUrl}}
      className={`
        bg-cover bg-center h-72 lg:h-[70vh]
      `}
    />
  )
}

export default HeroImage