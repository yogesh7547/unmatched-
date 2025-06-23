import React from 'react'
import Logo from '../assets/header/logo.svg?react'
import Fblogo from '../assets/footer/fblogo.svg?react'
import Instalogo from '../assets/footer/instaLogo.svg?react'
import Xlogo from '../assets/footer/XLogo.svg?react'
const Footer = () => {
    return (
        <div>
            <div className='flex gap-3 justify-center mb-4'>
                       <Logo className="w-[40px] h-[40px]"/>
                      <div className='text-[20px] font-extrabold'>Let's Talk</div>
            </div>
           <div className='flex flex-col items-center mb-15'>
             <a href="#">How it works</a>
            <a href="#">Contact</a>
            <a href="#">Join Waitlist</a>
           </div>
            <h1 className='text-center text-2xl font-extrabold mb-5'>Socials</h1>
            <div className='flex justify-evenly mb-15'>
                <a href="#">
                  <Fblogo/>
                </a>
                <a href="#">
                  <Instalogo/>
                </a>
                <a href="#">
                  <Xlogo/>
                </a>

            </div>
            <p className='text-center m-5'>© Copyright.All Right Reserved.</p>
            <p className='text-center'>Terms of services | Privacy Policy</p>
        </div>
    )
}

export default Footer