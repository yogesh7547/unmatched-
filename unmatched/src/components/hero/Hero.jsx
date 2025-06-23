import React from 'react'
import Button from '../Button/Button'
import People from '../assets/hero/peopleFaces.svg?react'
import Ellipse from '../assets/hero/Ellipse.svg?react'
import Emoji from '../assets/hero/emoji.svg?react'
import HeroImg from '../assets/hero/heroImg.svg?react'
import Rectangle from '../assets/hero/Rectangle.svg?react'
import Pfp from '../assets/hero/pfp.svg?react'
import Hi from '../assets/hero/Hi.svg?react'
import Line from '../assets/hero/Line.svg?react'


const Hero = () => {
  return (
    <div className='w-[98%]  mx-auto flex flex-col px-2'>
      <div className='h-[50%] w-[100%]  flex flex-col pt-[3%]'>
        <h1 className='font-extrabold text-[40px] leading-[130%] tracking-[-1%] mb-[5%]'>
          Tired of Swiping? <br /> Try Unmatched
        </h1>
        <p className='w-[100%] leading-[120%] text-[18px] mb-4 '>
          We ditched the swipe for real conversations and real <br /> chemistry. our innovative dating app is coming soon! Be <br /> among the first to experience meaningful connection <br /> based on compatibility .
        </p>

        <Button />

        <div className='flex mt-[3%] items-center gap-2'>
          <People />
          <p>Join 1200+ people on the waitlist</p>
        </div>

      </div>
      <div className=' hidden '>
        <div className='relative'>
          <Ellipse className=' w-65 absolute left-[7%] ' />
          <HeroImg className=' h-50 w-50  absolute top-50 left-12 ' />
          <Emoji className=' w-30  absolute top-50 left-46' />
          <Rectangle className=' w-40 absolute top-20 left-36 ' />
          <Pfp className='w-10 absolute top-29.5 left-39 ' />
          <Line className='w-15 absolute top-32 left-52' />
          <Line className=' w-15 absolute top-35 left-52' />
          <Line className='w-15 absolute top-38 left-52  ' />

          <Hi className='w-30 absolute top-50 right-50' />


        </div>
      </div>
      



    </div>
  )
}

export default Hero