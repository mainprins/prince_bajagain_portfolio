"use client"
import { RiGeminiFill } from 'react-icons/ri'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiSocketdotio, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type Projects = {
  heading: string,
  images: string[],
  desc: string,
  link: string,
  pointone: string,
  pointtwo: string,
  pointthree: string,
  tech: Array<{ name: string, icon: any }>,
}

const ProjectsSection = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const scrollDiv = useRef<HTMLDivElement>(null);
  const progressIndicator = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects: Projects[] = [
    {
      heading: "Chattily",
      link: "",
      desc: "Built a full-stack real-time chat application using React, Node.js, Express, MongoDB, and Socket.IO. A modern chatting platform enabling seamless communication with real-time message updates and user authentication.",
      pointone: "Built a full-stack real-time chat application",
      images: [
        "/chattily/01.png",
        "/chattily/02.png",
        "/chattily/03.png"
      ],
      pointtwo: "Implemented user authentication and private chats",
      pointthree: "Real-time message updates using Socket.IO",
      tech: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Socket.IO", icon: SiSocketdotio }
      ]
    },
    {
      heading: "MeroResume",
      link: "",
      desc: "Developed an AI-powered resume builder allowing users to create and download professional resumes. Used React for frontend, Node & Express for APIs, and MongoDB for data storage.",
      pointone: "AI-powered resume builder with professional templates",
      pointtwo: "Create and download resumes instantly",
      images: [
        "/meroresume/01.png",
        "/meroresume/02.png",
        "/meroresume/03.png"
      ],
      pointthree: "React frontend with Node.js backend and MongoDB storage",
      tech: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "AI", icon: RiGeminiFill }
      ]
    },
    {
      heading: "IMF Life Sciences",
      link: "",
      desc: "Developed and optimized the official company website using React.js. Integrated smooth animations using GSAP and implemented SEO best practices including meta tags, canonical URLs, and sitemap.",
      pointone: "Developed official company website using React.js",
      pointtwo: "Integrated smooth animations using GSAP",
      images: [
        "/imf/01.png",
        "/imf/02.png",
        "/imf/03.png"
      ],
      pointthree: "Implemented SEO best practices for better visibility",
      tech: [
        { name: "React", icon: FaReact },
        { name: "GSAP", icon: RiGeminiFill },
        { name: "SEO", icon: FaDatabase },
        { name: "Tailwind", icon: SiTailwindcss }
      ]
    }
  ];

  useGSAP(() => {
    if (!cursorRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);



  useEffect(() => {
    // Only apply GSAP animations on desktop
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    if (mediaQuery.matches) {
      if (!scrollDiv.current || !bottomRef.current || !progressIndicator.current || !progressBar.current) return;

      const scrollHeight = scrollDiv.current.scrollHeight;
      const progressBarHeight = progressBar.current.clientHeight;
      const indicatorHeight = progressIndicator.current.clientHeight;

      const maxTravel = progressBarHeight - indicatorHeight;
      const scrollableDistance = scrollHeight - scrollDiv.current.clientHeight;

      const scrollTrigger = ScrollTrigger.create({
        trigger: bottomRef.current,
        start: "top top",
        end: () => `+=${scrollableDistance}`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          if (!scrollDiv.current || !progressIndicator.current) return;
          const progress = self.progress;

          scrollDiv.current.scrollTop = progress * scrollableDistance;

          const projectIndex = Math.min(
            Math.floor(progress * projects.length),
            projects.length - 1
          );
          setActiveProjectIndex(projectIndex);

          const indicatorPosition = progress * maxTravel;
          progressIndicator.current.style.top = `${indicatorPosition}px`;
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []);

  const projectImages = [
    [
      { className: 'bg-gradient-to-br from-red-400 to-pink-500' },
      { className: 'bg-gradient-to-br from-purple-400 to-indigo-500' },
      { className: 'bg-gradient-to-br from-blue-400 to-cyan-500' }
    ],
    [
      { className: 'bg-gradient-to-br from-green-400 to-emerald-500' },
      { className: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
      { className: 'bg-gradient-to-br from-rose-400 to-red-500' }
    ],
    [
      { className: 'bg-gradient-to-br from-violet-400 to-purple-500' },
      { className: 'bg-gradient-to-br from-fuchsia-400 to-pink-500' },
      { className: 'bg-gradient-to-br from-amber-400 to-orange-500' }
    ]
  ];

  return (
    <section className='w-full p-4 lg:p-10 flex flex-col gap-10 lg:gap-20'>
      <div id="top" className='flex flex-col gap-2 items-center justify-center w-full'>
        <span className='uppercase text-stone-500 text-xs lg:text-sm tracking-widest'>Crafting Modern Experiences</span>
        <span className='text-3xl lg:text-6xl font-bold flex flex-col lg:flex-row gap-2 lg:gap-3 tracking-wider text-center'>
          <span>VENTURE</span>
          <span className='font-medium font-dynapuff bg-linear-to-r from-pink-600 via-red-500 to-amber-600 text-transparent bg-clip-text'>SHOWCASE</span>
        </span>
      </div>

      {/* Desktop View */}
      <div id="bottom" className='hidden lg:flex w-full h-screen justify-between' ref={bottomRef}>
        <div id="left" className='w-1/2 h-screen items-center flex justify-between gap-6'>
          <div id="left" className='flex flex-col h-full justify-center gap-4'>
            <span className='text-2xl font-semibold'>{projects[activeProjectIndex].heading}</span>
            <p className='text-stone-400 w-full'>{projects[activeProjectIndex].desc}</p>
            <span className='text-stone-400 w-full flex gap-2 items-center'>
              <RiGeminiFill className='text-amber-600' />
              {projects[activeProjectIndex].pointone}
            </span>
            <span className='text-stone-400 w-full flex gap-2 items-center'>
              <RiGeminiFill className='text-amber-600' />
              {projects[activeProjectIndex].pointtwo}
            </span>
            <span className='text-stone-400 w-full flex gap-2 items-center'>
              <RiGeminiFill className='text-amber-600' />
              {projects[activeProjectIndex].pointthree}
            </span>
            <div className='flex gap-3 flex-wrap w-full'>
              {projects[activeProjectIndex].tech.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={i}
                    className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full text-sm flex items-center gap-2'
                  >
                    <Icon className='text-base' />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div id="right" className='w-[30%] h-[70%]'>
            <div className='bg-stone-800 border border-stone-500 h-full w-2 rounded-full relative' ref={progressBar}>
              <div
                className='w-10 h-10 bg-amber-400 rounded-full absolute -left-4 transition-all duration-100'
                ref={progressIndicator}
                style={{ top: 0 }}
              >
                <img alt='' src={'/me.jpg'} className='w-full h-full object-cover rounded-full' />
              </div>
            </div>
          </div>
        </div>
        <div id="right" className='w-full ml-20 overflow-hidden h-screen' ref={scrollDiv}>
          <div id="projects-list" className='w-full flex flex-col mt-20 gap-20'>
            <div id="list-1" onMouseEnter={() => { setIsHovering(true) }} onMouseLeave={() => { setIsHovering(false) }} className='w-full h-screen flex gap-3 shrink-0 cursor-pointer' onClick={() => window.open('https://github.com/mainprins/chattily-fullStack', '_blank')}>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <figure className='bg-black relative h-1/2 w-full rounded-lg overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[0].images[0]} />
                </figure>
                <figure className='bg-black relative h-1/2 w-full rounded-lg overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[0].images[1]} />
                </figure>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <figure className='bg-black w-full h-full rounded-lg relative overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[0].images[2]} />
                </figure>
              </div>
            </div>
            <div id="list-2" onMouseEnter={() => { setIsHovering(true) }} onMouseLeave={() => { setIsHovering(false) }} className='w-full h-screen flex gap-3 shrink-0 cursor-pointer' onClick={() => window.open('https://mero-resume-n2xg.onrender.com/', '_blank')}>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <figure className='bg-black relative h-1/2 w-full rounded-lg overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[1].images[0]} />
                </figure>
                <figure className='bg-black relative h-1/2 w-full rounded-lg overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[1].images[1]} />
                </figure>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <figure className='bg-black w-full h-full rounded-lg relative overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[1].images[2]} />
                </figure>
              </div>
            </div>
            <div id="list-3" onMouseEnter={() => { setIsHovering(true) }} onMouseLeave={() => { setIsHovering(false) }} className='w-full h-screen flex gap-3 shrink-0 cursor-pointer' onClick={() => window.open('https://imflifesciences.com.np/', '_blank')}>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <figure className='bg-black relative h-1/2 w-full rounded-lg overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[2].images[0]} />
                </figure>
                <figure className='bg-black relative h-1/2 w-full rounded-lg overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[2].images[1]} />
                </figure>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <figure className='bg-black w-full h-full rounded-lg relative overflow-hidden'>
                  <Image alt='ImageProject' fill objectFit='cover' className='grayscale blur-sm' src={projects[2].images[2]} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
<div className='flex lg:hidden flex-col gap-12'>
  {projects.map((project, index) => (
    <div key={index} className='flex flex-col gap-6 border border-stone-800 p-5 rounded-2xl bg-stone-900/30'>
      
      {/* Text Content */}
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <span className='text-2xl font-semibold text-stone-100'>{project.heading}</span>
          <p className='text-stone-400 text-sm leading-relaxed'>{project.desc}</p>
        </div>

        <div className='flex flex-col gap-2'>
          {[project.pointone, project.pointtwo, project.pointthree].map((point, i) => (
            <span key={i} className='text-stone-400 text-sm flex gap-2 items-start'>
              <RiGeminiFill className='text-amber-600 mt-1 shrink-0' />
              {point}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className='flex gap-2 flex-wrap w-full'>
          {project.tech.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <span
                key={i}
                className='bg-stone-800/50 border border-stone-700 text-stone-300 px-3 py-1 rounded-full text-xs flex items-center gap-1.5'
              >
                <Icon className='text-sm text-stone-400' />
                {tech.name}
              </span>
            );
          })}
        </div>
      </div>

      {/* Project Images - Replicating Desktop Layout */}
      <div className='w-full flex gap-2 aspect-square'>
        <div className='w-1/2 flex flex-col gap-2'>
          <figure className='relative h-1/2 w-full rounded-xl overflow-hidden border border-stone-800'>
            <Image alt='Project detail' fill className='object-cover blur-xs grayscale' src={project.images[0]} />
          </figure>
          <figure className='relative h-1/2 w-full rounded-xl overflow-hidden border border-stone-800'>
            <Image alt='Project detail' fill className='object-cover blur-xs grayscale' src={project.images[1]} />
          </figure>
        </div>
        <div className='w-1/2'>
          <figure className='relative w-full h-full rounded-xl overflow-hidden border border-stone-800'>
            <Image alt='Project main' fill className='object-cover blur-xs grayscale' src={project.images[2]} />
          </figure>
        </div>
      </div>

      {/* Visit Project Button */}
      <button 
        onClick={() => window.open(project.link, '_blank')}
        className='w-full py-4 bg-white text-black font-bold rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 uppercase tracking-wider text-sm'
      >
        Visit Project
        <RiGeminiFill className='text-black' />
      </button>

    </div>
  ))}
</div>
      {isHovering && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center transition-transform duration-100 ease-out"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {/* Dark Glass Disk */}
          <div className="relative w-28 h-28 flex items-center justify-center rounded-full 
                    bg-black/60 backdrop-blur-md 
                    border border-white/20 shadow-2xl shadow-black/80">

            {/* High-Contrast White Circular Text */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-[spin_10s_linear_infinite]"
            >
              <defs>
                <path
                  id="textCircle"
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text className="fill-white text-[5.5px] uppercase font-bold tracking-[0.35em] drop-shadow-sm">
                <textPath href="#textCircle" startOffset="0%">
                  View Project • View Project • View Project •
                </textPath>
              </text>
            </svg>

            {/* Solid White Center Point */}
            <div className="absolute flex items-center justify-center">
              {/* Subtle Outer Halo */}
              <div className="absolute w-6 h-6 bg-white/10 rounded-full blur-sm" />

              {/* Pure White Core */}
              <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
            </div>

          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection