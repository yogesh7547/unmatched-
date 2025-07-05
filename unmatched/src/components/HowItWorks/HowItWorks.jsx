import React from 'react'
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
  return (
    <div id="Howitworks" className="w-[98%] px-2 flex flex-col md:w-[90%] md:mx-auto mb-20">
      <h1 className='font-extrabold text-[35px] leading-[130%] tracking-[-1%] mb-[5%] md:text-center md:text-[50px] md:mb-[3%]'>
        How It Works
      </h1>
      <p className='w-[100%] leading-[120%] text-[18px] mb-10 font-med md:text-center md:w-[90%] md:pl-[10%] md:text-[25px] md:mb-[5%] '>
        A new kind of dating experience—where real connections take their time.
      </p>
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-5 md:w-full ">
        <div className="col-span-1 row-span-1 flex justify-end items-center">
          <img src={conversation} alt="Conversation" className="w-[250px] h-[250px] object-contain" />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-center">
          <Line />
          <Line />
          <One />
          <Line />
          <Line />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center">
          <AboutCard
            title="Start with Memes"
            content="You begin by chatting through AI-generated memes based on shared interests. Break the ice with humor and let the vibe build naturally."
            bgcolor="yellow"
          />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center ">
          <AboutCard
            title="Unlock Real Chat"
            content="Once both users engage consistently, you unlock Level 2—text chat. It's paced to encourage intention, not just quick replies."
            bgcolor="blue"
          />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-center">
          <Line />
          <Line />
          <Two />
          <Line />
          <Line />
        </div>
        <div className="col-span-1 row-span-1 flex justify-start items-center">
          <img src={chats} alt="Conversation" className="w-[250px] h-[250px] object-contain" />
        </div>
        <div className="col-span-1 row-span-1 flex justify-end items-center">
          <img src={call} alt="Conversation" className="w-[250px] h-[250px] object-contain" />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-center">
          <Line />
          <Line />
          <Three />
          <Line />
          <Line />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center ">
          <AboutCard
            title="Say It Out Loud"
            content="Ready to hear each other? Level 3 unlocks voice calls—bringing tone, emotion, and trust into the connection.."
            bgcolor="violet"
          />
        </div>


        <div className="col-span-1 row-span-1 flex justify-center items-center ">
          <AboutCard
            title="AI-Powered Prompts & Games"
            content="Stuck in silence? Use our AI to suggest quizzes, games, or convo prompts that spark curiosity and emotional intimacy."
            bgcolor="pink"
          />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-center">

          <Line />
          <Line />
          <Four />
          <Line />
          <Line />


        </div>

        <div className="col-span-1 row-span-1 flex justify-start items-center">
          <img src={Ai} alt="ai" className="w-[250px] h-[250px] object-contain" />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
        <div className="col-span-1 row-span-1 flex flex-col gap-10 justify-center items-center">
          <Five />
          <img src={loveLock} alt="loveLock" className="w-[200px] h-[200px] object-contain" />
          <AboutCard
            title="Unlock Love Lock"
            content="When you're ready to take things offline, you unlock Level 3—the Love Lock. It's a commitment to real conversations and shared experiences."
            bgcolor="green"
          />
        </div>

        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>

        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
        <div className="col-span-1 row-span-1 flex justify-center items-center">

        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center"></div>
      </div>

      <div className='flex flex-col gap-10 md:hidden'>

        <NumberLine />


        <FeatureCard
          image={conversation}
          title="Start with Memes"
          description="You begin by chatting through AI-generated memes based on shared interests. Break the ice with humor and let the vibe build naturally."
          top='50px'
          left='100px'
        />

        <FeatureCard
          image={chats}
          title="Unlock Real Chat"
          description="Once both users engage consistently, you unlock Level 2—text chat. It's paced to encourage intention, not just quick replies."
          bgColor='bg-blue'
          top='300px'
          left='800px'
        />

        <FeatureCard
          image={call}
          title="Say It Out Loud"
          description="Ready to hear each other? Level 3 unlocks voice calls—bringing tone, emotion, and trust into the connection."
          bgColor='bg-violet'
          top='500px'
          left='100px'
        />
        <FeatureCard
          image={Ai}
          title="AI-Powered Prompts & Games"
          description="AI-Powered Prompts & Games</h1>
              <p>Stuck in silence? Use our AI to suggest quizzes, games, or convo prompts that spark curiosity and emotional intimacy."
          bgColor='bg-pink'
          top='700px'
          left='800px'
        />
        <FeatureCard
          image={loveLock}
          title="Activate Love Lock"
          description="Mutually pause new matches to explore one connection without distractions. You're not matched—you're unmatched."
          bgColor='bg-green'
          top='1150px'
          left='480px'
        />

      </div>


    </div>
  )
}

export default HowItWorks  