import React from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation'
import Joystick from '../assets/cards/Joystick.svg?react'
import MagicWand from '../assets/cards/MagicWand.svg?react'
import Padlock from '../assets/cards/padlock_739405 1.svg?react'
import AboutCard from '../aboutCard/AboutCard'

const About = () => {
    const titleRef = useScrollAnimation({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
        duration: 0.8,
        delay: 0.2
    })

    const descriptionRef = useScrollAnimation({
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        duration: 0.8,
        delay: 0.4
    })

    const cardsRef = useStaggerAnimation({
        selector: '.about-card',
        from: { opacity: 0, y: 50, scale: 0.9 },
        to: { opacity: 1, y: 0, scale: 1 },
        duration: 0.7,
        stagger: 0.2,
        delay: 0.6
    })

    return (
        <div id='about' className='w-[98%] md:w-[90%]  mx-auto flex flex-col px-2 mb-5 md:mb-40 '>
            <h1 ref={titleRef} className='font-extrabold text-[35px] leading-[130%] tracking-[-1%] mb-[5%] md:text-center md:text-[50px] md:mb-[3%]'>
                The Swipe Trap Every Indian is Stuck In
            </h1>
            <p ref={descriptionRef} className='w-[100%] leading-[120%] text-[18px] mb-10 font-med md:text-center md:w-[90%] md:pl-[10%] md:text-[25px] md:mb-[5%] '>
                Meet Arjun. MBA from IIM, works at a unicorn startup, can negotiate million-dollar deals... but can't get past 'Hey, what's up?' on dating apps. Sound familiar? He's not alone.
            </p>
            <div ref={cardsRef} className='flex flex-col justify-evenly gap-5 md:flex md:justify-between md:flex-row'>
                <div className='about-card'>
                    <AboutCard
                    title={' Verified Humans Only'}
                    content={'No catfish, no bots, no commitment-phobes. Every profile is real, verified, and ready to meet.'}
                    bgcolor={'yellow'}
                    icon={<Joystick/>}
                    />
                </div>
                <div className='about-card'>
                    <AboutCard
                    title={' Real Dates in Real Time'}
                    content={'Chai this week, not chat next month. We get you face-to-face within days, not months.'}
                    bgcolor={'blue'}
                    icon={<MagicWand />}
                    />
                </div>
                <div className='about-card'>
                    <AboutCard
                    title={' Your Comfort, Your Pace'}
                    content={'Introvert-friendly, extrovert-approved. We match your energy and comfort level.'}
                    bgcolor={'violet'}
                    icon={<Padlock />}
                    />
                </div>
            </div>
        </div>
    )
}

export default About