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
    <div className='w-[90%] h-[600px] mx-auto flex px-2'>
      <div className='h-full w-[50%]  flex flex-col pt-[10%]'>
        <h1 className='font-bold text-[65px] leading-[130%] tracking-[-1%] mb-[5%]'>
          Tired of Swiping? <br/> Try Unmatched
        </h1>
        <p className='w-[500px] h-[136px] leading-[120%] text-[20px] '>
          We ditched the swipe for real conversations and real <br /> chemistry. our innovative dating app is coming soon! Be <br /> among the first to experience meaningful connection <br /> based on compatibility .
        </p>

        <Button/>

       <div className='flex mt-[3%] items-center'>
         <People />
         <p>Join 1200+ people on the waitlist</p>
       </div>

      </div>

      <div className='h-full w-[50%]'>
         <div className='relative'>
           <Ellipse className=' absolute top-10 left-20 '/>
            <HeroImg className=' absolute top-25 left-35 '/>
            <Emoji className=' absolute top-60 left-120'/>
            <Rectangle className=' absolute top-5 left-100 '/>
              <Pfp className=' absolute top-9 left-105 ' />
              <Line className=' absolute top-10 left-123 '/>
              <Line className=' absolute top-15 left-123 '/>
              <Line className=' absolute top-20 left-123 '/>
           
            <Hi className=' absolute top-20 left-10 '/>

          
         </div>
      </div>

    </div>
  )
}

export default Hero