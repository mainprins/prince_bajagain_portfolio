"use client"
import { useGSAP } from '@gsap/react';
import { useRef } from 'react'
import { RiGeminiFill } from 'react-icons/ri'
import gsap from 'gsap';

const ScrollingBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / 2;
      
      gsap.to(scrollRef.current, {
        x: -scrollWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    }
  }, []);

  return (
    <section className='h-[30vh] md:h-[50vh] mt-10'>
      <div id="container" className='relative overflow-hidden w-full h-full'>
        <div id="one" className='w-full h-20 bg-red-900 overflow-x-hidden absolute top-1/2 left-0 rotate-4'></div>
        <div className='w-full absolute top-1/2 left-0 h-20 -rotate-3 flex items-center justify-center overflow-hidden bg-red-500'>
          <div className='w-full overflow-hidden [mask:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div 
              ref={scrollRef}
              className='flex gap-2 items-center text-xl font-semibold uppercase tracking-[0.3em] whitespace-nowrap'
            >
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Productive</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Immersive</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Dependable</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Productive</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Immersive</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Dependable</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Productive</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Immersive</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Dependable</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Productive</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Immersive</span>
              </span>
              <span className='flex justify-center items-center gap-2'>
                <RiGeminiFill />
                <span>Dependable</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollingBar