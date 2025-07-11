import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null)
  
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    duration = 0.8,
    delay = 0,
    ease = "power2.out",
    trigger = null,
    start = "top 80%",
    end = "bottom 20%",
    toggleActions = "play none none reverse"
  } = options

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        from,
        {
          ...to,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: trigger || elementRef.current,
            start,
            end,
            toggleActions
          }
        }
      )
    }
  }, [from, to, duration, delay, ease, trigger, start, end, toggleActions])

  return elementRef
}

export const useStaggerAnimation = (options = {}) => {
  const containerRef = useRef(null)
  
  const {
    selector = "> *",
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0 },
    duration = 0.6,
    stagger = 0.1,
    ease = "power2.out",
    trigger = null,
    start = "top 80%",
    end = "bottom 20%",
    toggleActions = "play none none reverse"
  } = options

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(selector)
      
      gsap.fromTo(
        elements,
        from,
        {
          ...to,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: trigger || containerRef.current,
            start,
            end,
            toggleActions
          }
        }
      )
    }
  }, [selector, from, to, duration, stagger, ease, trigger, start, end, toggleActions])

  return containerRef
} 