import React from 'react'

const FeatureCard = ({ image, title, description, bgColor = 'bg-yellow', top, left }) => {
  return (
    <div className='flex flex-col items-center md:absolute'
     style={{ top: top, left: left }}
    >
      <img src={image} alt="illustration" className='w-[100px]' />

      <div className={`w-full ${bgColor} drop-shadow-md flex flex-col items-center text-center py-3 px-2 md:max-w-[350px] md:min-h-[200px] not-only: `}
     
      >
        <h1 className='text-2xl font-bold my-3'>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
