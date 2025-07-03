import React from 'react'
import { useState } from 'react'
import Logo from '../assets/header/logo.svg?react'
import Menu from '../assets/header/menu-3-line.svg?react'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='h-[90px] w-[98%] md:w-[90%] border-2 bg-pink drop-shadow-md flex justify-between items-center p-2 mx-auto '>
            <div className='flex gap-4'>
                <Logo className="w-[40px] h-[40px]" />
                <div className='text-[20px] font-medium'>Let's Talk</div>
            </div>

            <div className='relative'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Menu className='w-[35px] cursor-pointer md:hidden' />
                </button>

                {/* Dropdown - toggles on click */}
                {isOpen && (
                    <div className='absolute right-0 top-10 flex flex-col bg-white shadow-md rounded-md p-2 w-[160px] z-50'>
                        <a href="#about" className='text-[16px] py-2 hover:bg-pink'>About</a>
                        <a href="#Howitworks" className='text-[16px] py-2 hover:bg-pink'>How it Works</a>
                        <a href="#form" className='text-[16px] py-2 hover:bg-pink'>Join Waitlist</a>
                    </div>
                )}
            </div>

            <div className='hidden md:flex justify-between gap-10 px-10'>
                <a href="#about" className='text-[16px] py-2 '>How it Works</a>
                <a href="#Howitworks" className='text-[16px] py-2 '>Contact</a>
                <a href="#form" className='text-[16px] py-2 '>Join Waitlist</a>
            </div>


        </div>


    )
}

export default Header


