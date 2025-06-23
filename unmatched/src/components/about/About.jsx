import React from 'react'
import Joystick from '../assets/cards/Joystick.svg?react'
import MagicWand from '../assets/cards/MagicWand.svg?react'
import Padlock from '../assets/cards/padlock_739405 1.svg?react'


const About = () => {
    return (
        <div className='w-[98%]  mx-auto flex flex-col px-2 '>

            <h1 className='font-extrabold text-[35px] leading-[130%] tracking-[-1%] mb-[5%]'>
                Why Unmatched? <br /> Because Swiping Isn't Connecting!
            </h1>
            <p className='w-[100%] leading-[120%] text-[18px] mb-10 font-med'>
                We believe real connection doesn't start with a swipe. That's why Unmatched focuses on shared vibes, deeper chats, and meaningful first impressions—beyond the screen.
            </p>
            <div className='flex flex-col justify-evenly gap-5'>
                <div className='w-[100%] h-[200px] bg-yellow drop-shadow-md flex flex-col items-center text-center py-3 px-2'>
                    <Joystick />
                    <h2 className='text-2xl font-bold'>Games & Quizzes</h2>
                    <p>From fun quizzes to quirky questions and swipeable games, our smart suggestions keep the convo flowing. No small talk—just good talk.</p>
                </div>
                <div className='w-[100%] h-[200px] bg-blue drop-shadow-md flex flex-col items-center text-center py-3 px-2'>
                    <MagicWand />
                    <h2 className='text-2xl font-bold'>AI Meme Generator</h2>
                    <p>Our AI meme generator creates hilarious, shareable memes based on your interests and chat vibes—because bonding starts with laughter.</p>
                </div>
                <div className='w-[100%] h-[200px] bg-violet drop-shadow-md flex flex-col items-center text-center py-3 px-2'>
                    <Padlock />
                    <h2 className='text-2xl font-bold'>Lock the Vibe</h2>
                    <p>When the connection hits different, hit Love Lock. Freeze the noise, focus on just you two, and see where it goes—no distractions, just vibes.</p>
                </div>

            </div>



        </div>
    )
}

export default About