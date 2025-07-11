import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../Button/Button'
import People from '../assets/hero/peopleFaces.svg?react'
import Ellipse from '../assets/hero/Ellipse.svg?react'
import Emoji from '../assets/hero/emoji.svg?react'
import HeroImg from '../assets/hero/heroImg.svg?react'
import Rectangle from '../assets/hero/Rectangle.svg?react'
import Pfp from '../assets/hero/pfp.svg?react'
import Hi from '../assets/hero/Hi.svg?react'
import Line from '../assets/hero/Line.svg?react'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const peopleRef = useRef(null)

  useEffect(() => {
    // Animate the main hero section
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate title with a slide-in effect
    gsap.fromTo(titleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate description
    gsap.fromTo(descriptionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate button
    gsap.fromTo(buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate people section
    gsap.fromTo(peopleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: peopleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <div ref={heroRef} className='w-[98%] md:w-[90%] mx-auto flex flex-col px-2 md:mb-3 0'>
      <div className='h-[50%] w-[100%]  flex flex-col pt-[3%]'>
        <h1 ref={titleRef} className='font-extrabold text-[40px] leading-[130%] tracking-[-1%] mb-[5%] md:text-7xl'>
          Tired of Swiping? <br /> Try Unmatched
        </h1>
        <p ref={descriptionRef} className='w-[100%] leading-[120%] text-[18px] mb-4 '>
          We ditched the swipe for real conversations and real <br /> chemistry. our innovative dating app is coming soon! Be <br /> among the first to experience meaningful connection <br /> based on compatibility .
        </p>

        <div ref={buttonRef}>
          <Button />
        </div>

        <div ref={peopleRef} className='flex mt-[3%] items-center gap-2'>
          <People />
          <p>Join 1200+ people on the waitlist</p>
        </div>

      </div>
      {/* <div className=' hidden md:block'>
        <div className='relative'>
          <Ellipse className=' w-65 absolute left-[7%] md:top-[-500px] md:left-[750px] md:w-95' />
          <HeroImg className=' h-50 w-50  absolute top-50 left-12  md:top-[-300px] md:left-[800px] md:w-70 md:h-70' />
          <Emoji className=' w-30  absolute top-50 left-46 md:left-[1080px] md:top-[-265px] md:w-40' />
          <Rectangle className=' w-40 absolute top-20 left-36 md:left-[1070px] md:top-[-430px] md:w-50' />
          <Pfp className='w-10 absolute top-29.5 left-39 md:top-[-400px] md:left-[1100px] ' />
          <Line className='w-15 absolute top-32 left-52 md:top-[-390px] md:left-[1160px]' />
          <Line className=' w-15 absolute top-35 left-52 md:top-[-378px] md:left-[1160px]' />
          <Line className='w-15 absolute top-38 left-52 md:top-[-366px] md:left-[1160px] ' />

          <Hi className='w-30 absolute top-50 right-50 md:top-[-400px] md:left-[630px] md:w-60' />


        </div>
      </div> */}
    </div>
  )
}

export default Hero