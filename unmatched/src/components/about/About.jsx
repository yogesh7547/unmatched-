import React from 'react'
import Joystick from '../assets/cards/Joystick.svg?react'
import MagicWand from '../assets/cards/MagicWand.svg?react'
import Padlock from '../assets/cards/padlock_739405 1.svg?react'


const About = () => {
  return (
    <div className='w-[98%]  mx-auto flex flex-col px-2 bg-amber-300 '>

        <h1 className='font-bold text-[35px] leading-[130%] tracking-[-1%] mb-[5%]'>
           Why Unmatched? <br /> Because Swiping Isn't Connecting!
        </h1>
        <p className='w-[100%] leading-[120%] text-[20px] mb-4 '>
           We believe real connection doesn't start with a swipe. That's why Unmatched focuses on shared vibes, deeper chats, and meaningful first impressions—beyond the screen.
        </p>
        <div className='flex flex-col justify-evenly'>
            <div className='w-[100%] h-[200px] bg-amber-600 flex flex-col items-center'>
               <Joystick/>
               <h2>Games & Quizzes</h2>
               <p>From fun quizzes to quirky questions and swipeable games, our smart suggestions keep the convo flowing. No small talk—just good talk.</p>
            </div>
            <div></div>
            <div></div>

        </div>



    </div>
  )
}

export default About