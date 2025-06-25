import React from 'react'
import chats from '../assets/userflow/chats.gif'
import call from '../assets/userflow/call.gif'
import conversation from '../assets/userflow/conversation.gif'
import loveLock from '../assets/userflow/loveLock.gif'
import Ai from '../assets/userflow/Ai.gif'
import FeatureCard from '../featureCard/FeatureCard'
import NumberLine from '../numberline/NumberLine'


const HowItWorks = () => {
  return (
    <div id='Howitworks' className='w-[98%] md:w-[90%] md:h-[1100px] mx-auto flex flex-col px-2 mb-15 md:mb-[40%]'>
        <h1 className='font-extrabold text-[40px] leading-[130%] tracking-[-1%] mb-[5%] md:text-[50px] md:text-center md:mb-[2%]'>How Unmatched Works?</h1>
        <p className='w-[100%] leading-[120%] text-[18px] mb-4 md:font-medium md:text-center'>A new kind of dating experience—where real connections take their time.</p>
        <div className='flex flex-col gap-10 md:relative'>

          <NumberLine/>
          
         
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