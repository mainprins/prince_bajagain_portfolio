"use client"

import { CiLocationOn } from 'react-icons/ci'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const DetailsSection = () => {
  const photofirstRef = useRef<HTMLDivElement>(null);
  const photosecondRef = useRef<HTMLDivElement>(null);
  const photothirdRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  
  useGSAP(() => {
  const mm = gsap.matchMedia();

  // ✅ DESKTOP (md and above)
  mm.add("(min-width: 768px)", () => {

    gsap.to(photofirstRef.current, {
      rotateZ: -10,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(containerRef.current, {
      y: -90,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(photothirdRef.current, {
      rotateZ: 5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

  });

  // ✅ MOBILE (below md)
  mm.add("(max-width: 767px)", () => {

    gsap.to(photofirstRef.current, {
      rotateZ: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(containerRef.current, {
      y: -30, 
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(photothirdRef.current, {
      rotateZ: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
      },
    });

  });

  return () => mm.revert(); // cleanup
});
  return (
    <section className='flex flex-col md:flex-row gap-3 items-center mt-10 w-screen p-10'>
      <div id="left" className='flex w-full justify-between border border-stone-800 h-120 p-4 rounded-xl md:w-1/2'>
        <div id="left" className='flex flex-col'>
          <div id="top" className='flex flex-col'>
            <span className='text-stone-500 uppercase text-saira font-semibold tracking-widest text-sm'>Available Globally</span>
            <span className='text-xl font-semibold w-50'>Adaptable across time zones</span>
          </div>
          <div id="bottom"></div>
        </div>
        <div id="right" className='h-full flex flex-col justify-between'>
          <div id="top" className='flex flex-col gap-3'>
            <div id="one" className='rounded-full py-1 border-stone-500 border bg-stone-800 text-stone-500 px-3 text-sm'>GB UK</div>
            <div id="two" className='rounded-full py-1 border-amber-500 border bg-amber-800 text-amber-500 px-3 text-sm'>NP Nepal</div>
            <div id="three" className='rounded-full py-1 border-stone-500 border bg-stone-800 text-stone-500 px-3 text-sm'>US USA</div>
          </div>
          <div id="bottom" className='flex flex-col self-end'>
            <div id="top" className='text-stone-500 flex gap-1 text-sm justify-center items-center'>
              <CiLocationOn size={20} />
              <span>REMOTE</span>
            </div>
            <div id="bottom" className='flex items-end text-end  self-end'>Nepal</div>
          </div>
        </div>
      </div>
      <div id="right" className='flex flex-col justify-start border over border-stone-800 h-120 p-4 rounded-xl w-full md:w-1/2'>
        <div id="top" className='flex justify-end gap-2 w-full'>
          <div className='flex flex-col gap-1 self-end'>
            <span className='w-full flex '>
              <span className='text-3xl font-bold font-saira'>Magnifying</span>
              <span className='bg-linear-to-r from-white to-stone-950 pb-0.5'>
                <div className='bg-stone-950 pb-1'>
                  <span className='text-3xl font-bold overflow-auto px-2 font-dynapuff italic bg-linear-to-r from-pink-600 via-red-500 to-amber-600 text-transparent bg-clip-text'>Details</span>
                </div>
              </span>
            </span>
            <span className='text-stone-500 font-dynapuff text-sm self-end'>{"<Crafting Digital Experiences/>"}</span>
          </div>
        </div>
       <div id="bottom" className="flex w-full h-full">
  <div className="w-full overflow-hidden h-full" ref={containerRef}>
    <div className='w-full h-full relative'>
      {/* Left plank */}
    <figure
      className="
        absolute bottom-6 left-1/2
        w-30 h-60 
        md:-translate-x-[120%] -translate-x-[110%]
        md:-rotate-20 -rotate-5 origin-bottom-right
        z-10 rounded-xl
      "
      id='photo1'
      ref={photofirstRef}
    >
       <figure className='w-full h-full relative'>
         <Image unoptimized unoptimized alt='PersonImage' src={'/me/01.jpg'} objectFit='cover' fill className='rounded-xl'/>
      </figure>
    </figure>

    {/* Center plank */}
    <figure
      className="
        absolute bottom-6 left-1/2 rounded-xl
        w-30 h-70
        -translate-x-1/2 
        z-20
      "
      id='photo2'
      ref={photosecondRef}
    >
        <figure className='w-full h-full relative'>
         <Image unoptimized alt='PersonImage' src={'/me/02.jpg'} objectFit='cover' fill className='rounded-xl'/>
      </figure>
    </figure>

    {/* Right plank */}
    <figure
      className="
        absolute bottom-6 left-1/2
        w-30 h-60 rounded-xl
        md:translate-x-[20%] translate-x-[10%]
        md:rotate-20 rotate-5 origin-bottom-left
        z-10
      "
      id='photo3'
      ref={photothirdRef}
    >
      <figure className='w-full h-full relative'>
         <Image unoptimized alt='PersonImage' src={'/me/04.jpg'} objectFit='cover' fill className='rounded-xl'/>
      </figure>
       
    </figure>
    </div>
    

  </div>
</div>

      </div>
    </section>
  )
}

export default DetailsSection