import React from 'react'
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation'
import chats from '../assets/userflow/chats.gif'
import call from '../assets/userflow/call.gif'
import conversation from '../assets/userflow/conversation.gif'
import loveLock from '../assets/userflow/loveLock.gif'
import Ai from '../assets/userflow/Ai.gif'
import FeatureCard from '../featureCard/FeatureCard'
import NumberLine from '../numberline/NumberLine'
import AboutCard from '../aboutCard/AboutCard'
import Line from '../assets/userflow/line.svg?react'
import One from '../assets/userflow/one.svg?react'
import Two from '../assets/userflow/two.svg?react'
import Three from '../assets/userflow/three.svg?react'
import Four from '../assets/userflow/four.svg?react'
import Five from '../assets/userflow/five.svg?react'

const HowItWorks = () => {
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

  const desktopGridRef = useStaggerAnimation({
    selector: '.grid-item',
    from: { opacity: 0, y: 50, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1 },
    duration: 0.7,
    stagger: 0.15,
    delay: 0.6
  })

  const mobileCardsRef = useStaggerAnimation({
    selector: '.mobile-card',
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    duration: 0.8,
    stagger: 0.3,
    delay: 0.6
  })

  return (
    <div id="Howitworks" className="w-[98%] px-2 flex flex-col md:w-[90%] md:mx-auto mb-20">
      <h1 ref={titleRef} className='font-extrabold text-[35px] leading-[130%] tracking-[-1%] mb-[5%] md:text-center md:text-[50px] md:mb-[3%]'>
        How It Works
      </h1>
      <p ref={descriptionRef} className='w-[100%] leading-[120%] text-[18px] mb-10 font-med md:text-center md:w-[90%] md:pl-[10%] md:text-[25px] md:mb-[5%] '>
        Ready to join the rebellion? Here's how it works:
      </p>
      <div ref={desktopGridRef} className="hidden md:grid md:grid-cols-3 md:grid-rows-5 md:w-full ">
        <div className="col-span-1 row-span-1 flex justify-end items-center grid-item">
          <img src={conversation} alt="Conversation" className="w-[250px] h-[250px] object-contain" />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-center grid-item">
          <Line />
          <Line />
          <One />
          <Line />
          <Line />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center grid-item">
          <AboutCard
            title="Tell Us About Yourself"
            content="Real talk, not bio fluff. We want to know the real you."
            bgcolor="yellow"
          />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center grid-item">
          <AboutCard
            title="We Verify You're Human"
            content="And relationship-ready. Our screening process ensures quality connections."
            bgcolor="blue"
          />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-center grid-item">
          <Line />
          <Line />
          <Two />
          <Line />
          <Line />
        </div>
        <div className="col-span-1 row-span-1 flex justify-start items-center grid-item">
          <img src={chats} alt="Conversation" className="w-[250px] h-[250px] object-contain" />
        </div>
        <div className="col-span-1 row-span-1 flex justify-end items-center grid-item">
          <img src={call} alt="Conversation" className="w-[250px] h-[250px] object-contain" />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-center grid-item">
          <Line />
          <Line />
          <Three />
          <Line />
          <Line />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center grid-item">
          <AboutCard
            title="Join Our Exclusive Community"
            content="Welcome to the rebellion. You're now part of India's most exclusive dating community."
            bgcolor="violet"
          />
        </div>

        <div className="col-span-1 row-span-1 flex justify-center items-center grid-item">
          <AboutCard
            title="Real Dates in Your City"
            content="Mumbai, Delhi, Bangalore. We set you up with verified people in premium venues."
            bgcolor="pink"
          />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-center grid-item">
          <Line />
          <Line />
          <Four />
          <Line />
          <Line />
        </div>

        <div className="col-span-1 row-span-1 flex justify-start items-center grid-item">
          <img src={Ai} alt="ai" className="w-[250px] h-[250px] object-contain" />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
        <div className="col-span-1 row-span-1 flex flex-col gap-10 justify-center items-center grid-item">
          <Five />
          <img src={loveLock} alt="loveLock" className="w-[200px] h-[200px] object-contain" />
          <AboutCard
            title="No More Endless Swiping"
            content="Skip the chat fatigue. Meet someone real over cutting chai instead."
            bgcolor="green"
          />
        </div>

        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
      </div>

      <div ref={mobileCardsRef} className='flex flex-col gap-10 md:hidden'>
        <div className='mobile-card'>
          <NumberLine />
        </div>

        <div className='mobile-card'>
          <FeatureCard
            image={conversation}
            title="Tell Us About Yourself"
            description="Real talk, not bio fluff. We want to know the real you."
            top='50px'
            left='100px'
          />
        </div>

        <div className='mobile-card'>
          <FeatureCard
            image={chats}
            title="We Verify You're Human"
            description="And relationship-ready. Our screening process ensures quality connections."
            bgColor='bg-blue'
            top='300px'
            left='800px'
          />
        </div>

        <div className='mobile-card'>
          <FeatureCard
            image={call}
            title="Join Our Exclusive Community"
            description="Welcome to the rebellion. You're now part of India's most exclusive dating community."
            bgColor='bg-violet'
            top='500px'
            left='100px'
          />
        </div>

        <div className='mobile-card'>
          <FeatureCard
            image={Ai}
            title="Real Dates in Your City"
            description="Mumbai, Delhi, Bangalore. We set you up with verified people in premium venues."
            bgColor='bg-pink'
            top='700px'
            left='800px'
          />
        </div>

        <div className='mobile-card'>
          <FeatureCard
            image={loveLock}
            title="No More Endless Swiping"
            description="Skip the chat fatigue. Meet someone real over cutting chai instead."
            bgColor='bg-green'
            top='1150px'
            left='480px'
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks  