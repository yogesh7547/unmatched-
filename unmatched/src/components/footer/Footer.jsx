import React from 'react'
import Logo from '../assets/header/logo.svg?react'
import Fblogo from '../assets/footer/fbLogo.svg?react'
import Instalogo from '../assets/footer/instaLogo.svg?react'
import Xlogo from '../assets/footer/XLogo.svg?react'
const Footer = () => {
    return (
        <div className='md:grid md:grid-rows-2 md:grid-cols-3  '>
            <div className='flex gap-3 justify-center mb-4 md:self-center'>
                       <Logo className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"/>
                      <div className='text-[20px] font-extrabold md:text-[30px]'>Let's Talk</div>
            </div>
           <div className='flex flex-col items-center mb-15 md:flex md:flex-row  md:gap-20 md:text-2xl md:col-span-2 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 md:justify-center md:items-start md:pt-5 md:mb-0'>
             <a href="#">How it works</a>
            <a href="#">Contact</a>
            <a href="#">Join Waitlist</a>
           </div>
           

            <h1 className='text-center text-2xl font-extrabold mb-5 md:hidden'>Socials</h1>
            <div className='flex justify-evenly md:flex md:justify-center md:gap-10 mb-15 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:self-center md:items-center'>
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

            
            <p className='text-center m-5 md:col-start-1 md:col-end-2 md:m-2'>© Copyright.All Right Reserved.</p>
            <p className='text-center md:m-2'>Terms of services | Privacy Policy</p>
        </div>
    )
}

export default Footer