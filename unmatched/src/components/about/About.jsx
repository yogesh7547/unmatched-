import React from 'react'
import Joystick from '../assets/cards/Joystick.svg?react'
import MagicWand from '../assets/cards/MagicWand.svg?react'
import Padlock from '../assets/cards/padlock_739405 1.svg?react'
import AboutCard from '../aboutCard/AboutCard'


const About = () => {
    return (
        <div id='about' className='w-[98%] md:w-[90%]  mx-auto flex flex-col px-2 mb-5 md:mb-40 '>

            <h1 className='font-extrabold text-[35px] leading-[130%] tracking-[-1%] mb-[5%] md:text-center md:text-[50px] md:mb-[3%]'>
                Why Unmatched? <br /> Because Swiping Isn't Connecting!
            </h1>
            <p className='w-[100%] leading-[120%] text-[18px] mb-10 font-med md:text-center md:w-[90%] md:pl-[10%] md:text-[25px] md:mb-[5%] '>
                We believe real connection doesn't start with a swipe. That's why Unmatched focuses on shared vibes, deeper chats, and meaningful first impressions—beyond the screen.
            </p>
            <div className='flex flex-col justify-evenly gap-5 md:flex md:justify-between md:flex-row'>
                <AboutCard
                title={'Games & Quizzes'}
                content={'From fun quizzes to quirky questions and swipeable games, our smart suggestions keep the convo flowing. No small talk—just good talk.'}
                bgcolor={'yellow'}
                icon={<Joystick/>}
                />
                <AboutCard
                title={'AI Meme Generator'}
                content={'From fun quizzes to quirky questions and swipeable games, our smart suggestions keep the convo flowing. No small talk—just good talk.'}
                bgcolor={'blue'}
                icon={<MagicWand />}
                />
                <AboutCard
                title={'Lock the Vibe'}
                content={'When the connection hits different, hit Love Lock. Freeze the noise, focus on just you two, and see where it goes—no distractions, just vibes.'}
                bgcolor={'yellow'}
                icon={<Padlock />}
                />
               
                

            </div>


        </div>
    )
}

export default About