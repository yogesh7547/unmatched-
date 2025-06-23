import React from 'react'
import Logo from '../assets/header/logo.svg?react'
import Menu from '../assets/header/menu-3-line.svg?react'
const Header = () => {
    return (
        <div className='h-[90px] w-[98%] border-2 bg-pink drop-shadow-md flex justify-between items-center p-2 mx-auto '>
            <div className='flex gap-4'>
                <Logo className="w-[40px] h-[40px]" />
                <div className='text-[20px] font-medium'>Let's Talk</div>
            </div>

            {/* <div className='relative group'>
                <Menu className='w-[35px] group-hover:hidden' />

                <div className='absolute right-1 hidden group-hover:flex flex-col border-none w-[100px]'>
                    <a href="#" className='text-[20px] '>How it Works</a>
                    <a href="#" className='text-[20px] '>Contact</a>
                    <a href="#" className='text-[20px] '>Join Waitlist</a>

                </div>



            </div> */}

        </div>
    )
}

export default Header


