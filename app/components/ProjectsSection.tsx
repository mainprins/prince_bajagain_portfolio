"use client"
import { RiGeminiFill } from 'react-icons/ri'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollDiv = useRef<HTMLDivElement>(null);
  const progressIndicator = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if(!scrollDiv.current || !bottomRef.current || !progressIndicator.current || !progressBar.current) return;

    const scrollHeight = scrollDiv.current.scrollHeight;
    const progressBarHeight = progressBar.current.clientHeight;
    const indicatorHeight = progressIndicator.current.clientHeight;
    
    // Maximum travel distance for the indicator (bar height minus indicator height)
    const maxTravel = progressBarHeight - indicatorHeight;

    ScrollTrigger.create({
      trigger: bottomRef.current,
      start: "top top",
      end: () => `+=${scrollHeight}`,
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        if(!scrollDiv.current || !progressIndicator.current) return;
        const progress = self.progress;
        
        // Update scroll position
        scrollDiv.current.scrollTop = progress * scrollHeight;
        
        // Update progress indicator position
        const indicatorPosition = progress * maxTravel;
        progressIndicator.current.style.top = `${indicatorPosition}px`;
      }
    });
  }, []);

  return (
    <section className='w-screen p-10 flex flex-col gap-20'>
      <div id="top" className='flex flex-col gap-2 items-center justify-center w-full'>
        <span className='uppercase text-stone-500 text-sm tracking-widest'>Crafting Modern Experiences</span>
        <span className='text-6xl font-bold flex gap-3 tracking-wider'>
          <span>VENTURE</span>
          <span className='font-medium font-dynapuff bg-linear-to-r from-pink-600 via-red-500 to-amber-600 text-transparent bg-clip-text'>SHOWCASE</span>
        </span>
      </div>
      <div id="bottom" className='flex w-full h-screen justify-between' ref={bottomRef}>
        <div id="left" className='w-1/2 h-screen items-center flex justify-between gap-6'>
          <div id="left" className='flex flex-col h-full justify-center gap-4'>
            <span className='text-2xl font-semibold'>Rune</span>
            <p className='text-stone-400 w-full'>🚀 Rune is your all-in-one productivity toolkit featuring 100+ powerful tools for learning, creating, and working smarter. From text & writing tools, PDF management, image editing, video processing, to developer utilities, calculators, and AI-powered assistants—Rune empowers students, professionals, and creators with free 24/7 access to streamline their workflow.</p>
            <span className='text-stone-400 w-full flex gap-2 items-center'><RiGeminiFill className='text-amber-600'/>100+ free tools including text editors, PDF converters, and image processors</span>
            <span className='text-stone-400 w-full flex gap-2 items-center'><RiGeminiFill className='text-amber-600'/>AI-powered assistants for enhanced productivity</span>
            <span className='text-stone-400 w-full flex gap-2 items-center'><RiGeminiFill className='text-amber-600'/>Available 24/7 with seamless workflow integration</span>
            <div className='flex gap-3 flex-wrap w-full'>
              <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm'>React</span>
              <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm'>TypeScript</span>
              <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm'>Next.js</span>
              <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm'>Tailwind</span>
              <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm'>Node.js</span>
              <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm'>MongoDB</span>
              <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm'>GSAP</span>
              <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm'>Prisma</span>
            </div>
          </div>
          <div id="right" className='w-[30%] h-[70%]'>
             <div className='bg-stone-800 border border-stone-500 h-full w-2 rounded-full relative' ref={progressBar}>
                <div 
                  className='w-6 h-6 bg-amber-400 rounded-full absolute -left-2 shadow-lg shadow-amber-400/50 transition-all duration-100' 
                  ref={progressIndicator}
                  style={{ top: 0 }}
                ></div>
             </div>
          </div>
        </div>
        <div id="right" className='w-full ml-20 overflow-hidden h-screen' ref={scrollDiv}>
          <div id="projects-list" className='w-full flex flex-col mt-20 gap-20'>
            <div id="list-1" className='w-full h-screen flex gap-3 shrink-0'>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <div className='bg-linear-to-br from-red-400 to-pink-500 h-1/2 w-full rounded-lg'></div>
                <div className='bg-linear-to-br from-purple-400 to-indigo-500 h-1/2 w-full rounded-lg'></div>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <div className='bg-linear-to-br from-blue-400 to-cyan-500 w-full h-full rounded-lg'></div>
              </div>
            </div>
            <div id="list-2" className='w-full h-screen flex gap-3 shrink-0'>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <div className='bg-linear-to-br from-green-400 to-emerald-500 h-1/2 w-full rounded-lg'></div>
                <div className='bg-linear-to-br from-yellow-400 to-orange-500 h-1/2 w-full rounded-lg'></div>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <div className='bg-linear-to-br from-rose-400 to-red-500 w-full h-full rounded-lg'></div>
              </div>
            </div>
            <div id="list-3" className='w-full h-screen flex gap-3 shrink-0'>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <div className='bg-linear-to-br from-violet-400 to-purple-500 h-1/2 w-full rounded-lg'></div>
                <div className='bg-linear-to-br from-fuchsia-400 to-pink-500 h-1/2 w-full rounded-lg'></div>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <div className='bg-linear-to-br from-amber-400 to-orange-500 w-full h-full rounded-lg'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection