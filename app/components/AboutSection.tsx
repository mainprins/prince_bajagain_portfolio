"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { CiLocationArrow1, CiLocationOn } from 'react-icons/ci'
import { FaGithub, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import { HiOutlineViewfinderCircle } from 'react-icons/hi2'
import { MdOutlineMailOutline } from 'react-icons/md'
import { SiGooglegemini } from 'react-icons/si'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

type Philosophy = {
  heading: string;
  text: string;
}

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [philosophyIndex, setPhilosophyIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const philosophy: Philosophy[] = [
    { heading: "Micro-interactions", text: "Subtle movement that confirms intent — never distracting." },
    { heading: "Typography", text: "Clean hierarchy and rhythm for effortless scanning." },
    { heading: "Responsiveness", text: "Every hover, click, and focus gets a crisp response." },
    { heading: "Attention to detail", text: "Polish lives in the edges: spacing, timing, and states." },
  ]
  const images: string[] = [
    "/me/01.jpg",
    "/me/02.jpg",
    "/me/03.jpg",
    "/me/04.jpg",
    "/me/05.jpeg",
    "/me/06.jpg",
  ];


  useGSAP(() => {
    gsap.from("#philosophy-data", {
      x: 100,
      opacity: 0,
    });
  }, [philosophyIndex]);

  useGSAP(() => {
    if (sliderRef.current && containerRef.current) {
      const imageElements = sliderRef.current.querySelectorAll('.image-item');
      const totalImages = images.length;

      gsap.to(sliderRef.current, {
        x: (sliderRef.current?.scrollWidth - containerRef.current.offsetWidth) * -1,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",

          onUpdate: (self) => {
            const progress = self.progress;
            const activeIndex = Math.round(progress * (totalImages - 1));

            imageElements.forEach((img, i) => {
              if (i === activeIndex + 1) {
                // Active/centered image - no rotation
                gsap.to(img, {
                  rotation: 0,             // Rotates 15 degrees in Z
                  transformOrigin: "right bottom", // Pins the bottom-right corner
                  duration: 1,
                  ease: "power2.out"
                });
              } else if (i < activeIndex + 1) {
                // Images on the LEFT - rotate left
                gsap.to(img, {
                  rotation: -10,             // Rotates 15 degrees in Z
                  transformOrigin: "right bottom", // Pins the bottom-right corner
                  duration: 1,
                  ease: "power2.out"
                });
              } else {
                // Images on the RIGHT - rotate right
                gsap.to(img, {
                  rotation: 10,             // Rotates 15 degrees in Z
                  transformOrigin: "left bottom", // Pins the bottom-right corner
                  duration: 1,
                  ease: "power2.out"
                });
              }
            });
          }
        }
      })
    }
  }, []);
  return (
    <section className='flex flex-col md:flex-row gap-3 items-center justify-center mt-10 p-10'>
      <div id="left" className='border border-stone-800 w-full md:w-100 h-120 flex flex-col items-center gap-10 p-4 rounded-xl'>
        <div id="top" className='flex flex-col gap-1'>
          <span className='flex gap-4 items-center justify-center'><span className='text-2xl font-bold font-saira'>Prince</span> <span className='font-dancing text-stone-500 text-2xl font-bold'>Bajgain</span></span>
          <div className='text-stone-500 flex gap-2 items-center justify-center'>
            <CiLocationOn />
            <span>Itahari, Nep 3:28PM</span>
          </div>
        </div>
        <div className="overflow-hidden w-80 py-4" id='middle' ref={containerRef}>
          <div id="slider" className="flex gap-4 shrink-0" ref={sliderRef}>
            {images.map((src, i) => (
              <div key={i} className="relative image-item w-30 h-40 shrink-0" >
                <Image src={src} alt={`Profile ${i + 1}`} fill className="object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        <div id="bottom" className='flex w-full items-center justify-center gap-3'>
          <Link href={'https://github.com/mainprins'} target='_blank'>
            <FaGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/prince-bajgain-39376b363/'} target='_blank'>
            <FaLinkedin />
          </Link>
          <Link href={'https://www.instagram.com/prince.bajagain/'} target='_blank'>
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div id="middle" className='flex overflow-hidden w-full flex-col items-center gap-8 h-120 border border-stone-800 p-4 rounded-xl' onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div id="top" className='flex gap-20 flex-col md:flex-row w-max justify-between items-center'>
          <div id="left" className='flex flex-col gap-6'>
            <div id="top" className='flex gap-4 items-center  text-stone-500 text-sm tracking-widest'>
              <CiLocationArrow1 />
              <span>DETAIL-DRIVEN UI</span>
            </div>
            <div id="bottom" className='flex flex-col gap-2 relative'>
              <span className='text-3xl font-bold font-saira'>Interfaces</span>
              <span className='font-dancing text-stone-500 text-3xl font-bold'>you can feel.</span>
              <span className={`text-stone-500 text-xs w-60 transition-all duration-500 ${isHovered ? "opacity-0 translate-y-10" : "opacity-100"}`}>I strive to create digital experiences that feel organic and human, where every pixel has a purpose.</span>
              <span className={`text-stone-500 text-xs w-60 transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0 translate-y-10"} absolute bottom-2`}>I sweat spacing,timing and feedback -- the tiny impact.</span>

            </div>
          </div>
          <div id="right" className='flex flex-col gap-6'>
            <div id="top" className='font-saira text-stone-500 justify-end flex gap-4 items-center font-bold'>
              <SiGooglegemini />
              <span >Philosophy</span>
            </div>
            <div id="bottom" className='flex flex-col gap-3'>
              <div id="top" className='flex gap-2'>
                <span className={`p-2 ${philosophyIndex === 0 ? "bg-white text-stone-700" : ""} rounded-full  border border-stone-800 hover:bg-white transition-all duration-500 hover:text-stone-700 cursor-pointer text-xs`} onClick={() => { setPhilosophyIndex(0) }}>Motion</span>
                <span className={`p-2 ${philosophyIndex === 1 ? "bg-white text-stone-700" : ""} rounded-full  border border-stone-800 hover:bg-white transition-all duration-500 hover:text-stone-700 cursor-pointer text-xs`} onClick={() => { setPhilosophyIndex(1) }}>Type</span>
                <span className={`p-2 ${philosophyIndex === 2 ? "bg-white text-stone-700" : ""} rounded-full  border border-stone-800 hover:bg-white transition-all duration-500 hover:text-stone-700 cursor-pointer text-xs`} onClick={() => { setPhilosophyIndex(2) }}>Feedback</span>
                <span className={`p-2 ${philosophyIndex === 3 ? "bg-white text-stone-700" : ""} rounded-full  border border-stone-800 hover:bg-white transition-all duration-500 hover:text-stone-700 cursor-pointer text-xs`} onClick={() => { setPhilosophyIndex(3) }}>Craft</span>
              </div>
              <div id="philosophy-data" className='flex flex-col gap-2 w-full justify-end items-end'>
                <span className=' font-bold font-saira'>{philosophy[philosophyIndex].heading}</span>
                <span className=' text-stone-500 text-xs w-60 text-right'>{philosophy[philosophyIndex].text}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom"></div>
      </div>
      <div id="right" className='border border-stone-800 w-full md:w-100 h-120 flex flex-col gap-12 p-4 rounded-xl'>
        <div id="top" className='flex justify-between'>
          <div id="left" className='flex justify-between'>
            <HiOutlineViewfinderCircle />
          </div>
          <div id="right">
            <span className='flex gap-2 items-center justify-center text-sm'>
              <div id="online" className='w-2 h-2 bg-green-400 rounded-full'></div>
              <span>Available for work</span>
            </span>
          </div>
        </div>
        <div id="middle1" className='flex flex-col'>
          <span className='font-bold text-3xl'>LET's BUILD<br /> SOMETHING</span>
          <span className='font-dancing text-stone-500 text-3xl'>that actually works.</span>
        </div>
        <div id="middle2" className='flex items-start p-2 justify-start gap-3'>
          <div className='py-3'>
            <MdOutlineMailOutline size={20} />
          </div>

          <div id="bottom" className='flex flex-col gap-4'>
            <span className='font-dancing font-bold text-2xl '>prnncebajgain@gmail.com</span>
            <span className='text-stone-500 tracking-[0.5em]'>TAP TO COPY EMAIL</span>
          </div>
        </div>
        <div id="bottom" className='flex items-center justify-center w-full'>
          <button className='bg-stone-50 text-stone-950 p-3 w-full rounded-full flex items-center justify-center gap-3'>
            <span className='font-bold'>Connect Now</span>
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection