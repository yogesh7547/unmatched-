import React from 'react'
import chats from '../assets/userflow/chats.gif'
import call from '../assets/userflow/call.gif'
import conversation from '../assets/userflow/conversation.gif'
import loveLock from '../assets/userflow/loveLock.gif'
import Ai from '../assets/userflow/Ai.gif'


const HowItWorks = () => {
  return (
    <div className='w-[98%]  mx-auto flex flex-col px-2 mb-15'>
        <h1 className='font-extrabold text-[40px] leading-[130%] tracking-[-1%] mb-[5%]'>How Unmatched Works?</h1>
        <p className='w-[100%] leading-[120%] text-[18px] mb-4 '>A new kind of dating experience—where real connections take their time.</p>
        <div className='flex flex-col gap-10'>
          
         
           <div className='flex flex-col items-center '>
             <img src={conversation} alt="animated gif" className='w-[100px] '/>
            <div className='w-[100%] bg-yellow drop-shadow-md flex flex-col items-center text-center py-3 px-2'>
              <h1 className='text-2xl font-bold my-3'>Start with Memes</h1>
              <p>You begin by chatting through AI-generated memes based on shared interests. Break the ice with humor and let the vibe build naturally.</p>
            </div>
           </div>
           <div className='flex flex-col items-center'>
             <img src={chats} alt="animated gif" className='w-[100px] '/>
            <div className='w-[100%] bg-blue drop-shadow-md flex flex-col items-center text-center py-3 px-2'>
              <h1 className='text-2xl font-bold my-3' >Unlock Real Chat</h1>
              <p>Once both users engage consistently, you unlock Level 2—text chat. It's paced to encourage intention, not just quick replies.</p>
            </div>
           </div>
           <div className='flex flex-col items-center'>
             <img src={call} alt="animated gif" className='w-[100px] '/>
            <div className='w-[100%] bg-violet drop-shadow-md flex flex-col items-center text-center py-3 px-2'>
              <h1 className='text-2xl font-bold my-3'>Say It Out Loud</h1>
              <p>Ready to hear each other? Level 3 unlocks voice calls—bringing tone, emotion, and trust into the connection.</p>
            </div>
           </div>
           <div className='flex flex-col items-center'>
             <img src={Ai} alt="animated gif" className='w-[100px] '/>
            <div className='w-[100%] bg-pink drop-shadow-md flex flex-col items-center text-center py-3 px-2'>
              <h1 className='text-2xl font-bold my-3'>AI-Powered Prompts & Games</h1>
              <p>Stuck in silence? Use our AI to suggest quizzes, games, or convo prompts that spark curiosity and emotional intimacy.</p>
            </div>
           </div>
           <div className='flex flex-col items-center'>
             <img src={loveLock} alt="animated gif" className='w-[100px] '/>
            <div className='w-[100%] bg-green drop-shadow-md flex flex-col items-center text-center py-3 px-2'>
              <h1 className='text-2xl font-bold my-3'>Activate Love Lock</h1>
              <p>Mutually pause new matches to explore one connection without distractions. You're not matched—you're unmatched.</p>
            </div>
           </div>
          
         
          
        </div>

    </div>
  )
}

export default HowItWorks