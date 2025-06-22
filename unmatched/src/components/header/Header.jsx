import React from 'react'
import Logo from '../assets/header/logo.svg?react'
const Header = () => {
    return (
    <div className='h-[85px] w-[90%] border-2 bg-pink drop-shadow-sm flex justify-between items-center pt-4 pl-8 pb-4 pr-10 mx-auto'>
        <div className='flex gap-4'>
           <Logo className="w-[46.6px] h-[48px]"/>
          <div className='text-[30px] font-medium'>Let's Talk</div>
        </div>
        <div className='flex justify-between gap-10'>
         <a href="#" className='text-[20px] '>How it Works</a>
         <a href="#" className='text-[20px] '>Contact</a>
         <a href="#" className='text-[20px] '>Join Waitlist</a>
        </div>
    </div>
    )
}

export default Header