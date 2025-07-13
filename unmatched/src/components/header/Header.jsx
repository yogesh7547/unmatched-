import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from '../assets/header/logo.svg?react'
import Menu from '../assets/header/menu-3-line.svg?react'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const headerRef = useRef(null)
    const logoRef = useRef(null)
    const navRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        // Animate the header on scroll
        gsap.fromTo(headerRef.current,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animate logo and text with stagger
        gsap.fromTo([logoRef.current, logoRef.current?.nextElementSibling],
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animate navigation links
        gsap.fromTo(navRef.current?.children,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        )
    }, [])

    // Handle click outside dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <div ref={headerRef} className='h-[90px] w-[98%] md:w-[90%] border-2 bg-pink drop-shadow-md flex justify-between items-center p-2 mx-auto relative z-50'>
            <div className='flex gap-4'>
                <Logo ref={logoRef} className="w-[40px] h-[40px]"  />
                <div className='text-[20px] font-medium'>Unmatched</div>
            </div>

            <div className='relative' ref={dropdownRef}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Menu className='w-[35px] cursor-pointer md:hidden' />
                </button>

                {/* Dropdown - toggles on click */}
                {isOpen && (
                    <div className='absolute right-0 top-10 flex flex-col bg-white shadow-md rounded-md p-2 w-[160px] z-[9999] border border-gray-200'>
                        <a href="#about" className='text-[16px] py-2 hover:bg-pink px-2 rounded' onClick={() => setIsOpen(false)}>About</a>
                        <a href="#Howitworks" className='text-[16px] py-2 hover:bg-pink px-2 rounded' onClick={() => setIsOpen(false)}>How it Works</a>
                        <a href="#form" className='text-[16px] py-2 hover:bg-pink px-2 rounded' onClick={() => setIsOpen(false)}>Join Waitlist</a>
                    </div>
                )}
            </div>

            <div ref={navRef} className='hidden md:flex justify-between gap-10 px-10'>
                <a href="#about" className='text-[16px] py-2 '>About</a>
                <a href="#Howitworks" className='text-[16px] py-2 '>How it Works</a>
                <a href="#form" className='text-[16px] py-2 '>Join Waitlist</a>
            </div>
        </div>
    )
}

export default Header


