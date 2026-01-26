"use client"
import { RiGeminiFill } from 'react-icons/ri'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiSocketdotio, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';

gsap.registerPlugin(ScrollTrigger);

type Projects = {
   heading: string,
   desc: string,
   pointone: string,
   pointtwo: string,
   pointthree: string,
   tech: Array<{ name: string, icon: any }>,
}

const ProjectsSection = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollDiv = useRef<HTMLDivElement>(null);
  const progressIndicator = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects: Projects[] = [
    {
      heading: "Chattily",
      desc: "Built a full-stack real-time chat application using React, Node.js, Express, MongoDB, and Socket.IO. A modern chatting platform enabling seamless communication with real-time message updates and user authentication.",
      pointone: "Built a full-stack real-time chat application",
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
      desc: "Developed an AI-powered resume builder allowing users to create and download professional resumes. Used React for frontend, Node & Express for APIs, and MongoDB for data storage.",
      pointone: "AI-powered resume builder with professional templates",
      pointtwo: "Create and download resumes instantly",
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
      desc: "Developed and optimized the official company website using React.js. Integrated smooth animations using GSAP and implemented SEO best practices including meta tags, canonical URLs, and sitemap.",
      pointone: "Developed official company website using React.js",
      pointtwo: "Integrated smooth animations using GSAP",
      pointthree: "Implemented SEO best practices for better visibility",
      tech: [
        { name: "React", icon: FaReact },
        { name: "GSAP", icon: RiGeminiFill },
        { name: "SEO", icon: FaDatabase },
        { name: "Tailwind", icon: SiTailwindcss }
      ]
    }
  ];

  useEffect(() => {
    // Only apply GSAP animations on desktop
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    if (mediaQuery.matches) {
      if(!scrollDiv.current || !bottomRef.current || !progressIndicator.current || !progressBar.current) return;

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
          if(!scrollDiv.current || !progressIndicator.current) return;
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
          <span className='font-medium font-dynapuff bg-gradient-to-r from-pink-600 via-red-500 to-amber-600 text-transparent bg-clip-text'>SHOWCASE</span>
        </span>
      </div>

      {/* Desktop View */}
      <div id="bottom" className='hidden lg:flex w-full h-screen justify-between' ref={bottomRef}>
        <div id="left" className='w-1/2 h-screen items-center flex justify-between gap-6'>
          <div id="left" className='flex flex-col h-full justify-center gap-4'>
            <span className='text-2xl font-semibold'>{projects[activeProjectIndex].heading}</span>
            <p className='text-stone-400 w-full'>{projects[activeProjectIndex].desc}</p>
            <span className='text-stone-400 w-full flex gap-2 items-center'>
              <RiGeminiFill className='text-amber-600'/>
              {projects[activeProjectIndex].pointone}
            </span>
            <span className='text-stone-400 w-full flex gap-2 items-center'>
              <RiGeminiFill className='text-amber-600'/>
              {projects[activeProjectIndex].pointtwo}
            </span>
            <span className='text-stone-400 w-full flex gap-2 items-center'>
              <RiGeminiFill className='text-amber-600'/>
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
            <div id="list-1" className='w-full h-screen flex gap-3 shrink-0'>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <div className='bg-gradient-to-br from-red-400 to-pink-500 h-1/2 w-full rounded-lg'></div>
                <div className='bg-gradient-to-br from-purple-400 to-indigo-500 h-1/2 w-full rounded-lg'></div>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <div className='bg-gradient-to-br from-blue-400 to-cyan-500 w-full h-full rounded-lg'></div>
              </div>
            </div>
            <div id="list-2" className='w-full h-screen flex gap-3 shrink-0'>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <div className='bg-gradient-to-br from-green-400 to-emerald-500 h-1/2 w-full rounded-lg'></div>
                <div className='bg-gradient-to-br from-yellow-400 to-orange-500 h-1/2 w-full rounded-lg'></div>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <div className='bg-gradient-to-br from-rose-400 to-red-500 w-full h-full rounded-lg'></div>
              </div>
            </div>
            <div id="list-3" className='w-full h-screen flex gap-3 shrink-0'>
              <div id="left" className='w-1/2 h-full flex flex-col gap-3'>
                <div className='bg-gradient-to-br from-violet-400 to-purple-500 h-1/2 w-full rounded-lg'></div>
                <div className='bg-gradient-to-br from-fuchsia-400 to-pink-500 h-1/2 w-full rounded-lg'></div>
              </div>
              <div id="right" className='w-1/2 h-full'>
                <div className='bg-gradient-to-br from-amber-400 to-orange-500 w-full h-full rounded-lg'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className='flex lg:hidden flex-col gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-col gap-4 border border-stone-800 p-4 rounded-xl'>
            <div className='flex flex-col gap-3'>
              <span className='text-2xl font-semibold'>{project.heading}</span>
              <p className='text-stone-400 text-sm'>{project.desc}</p>
              <span className='text-stone-400 text-sm flex gap-2 items-start'>
                <RiGeminiFill className='text-amber-600 mt-1 shrink-0'/>
                {project.pointone}
              </span>
              <span className='text-stone-400 text-sm flex gap-2 items-start'>
                <RiGeminiFill className='text-amber-600 mt-1 shrink-0'/>
                {project.pointtwo}
              </span>
              <span className='text-stone-400 text-sm flex gap-2 items-start'>
                <RiGeminiFill className='text-amber-600 mt-1 shrink-0'/>
                {project.pointthree}
              </span>
              <div className='flex gap-2 flex-wrap w-full'>
                {project.tech.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <span 
                      key={i} 
                      className='bg-stone-800 border border-stone-500 text-stone-300 px-2 py-1 rounded-full text-xs flex items-center gap-1'
                    >
                      <Icon className='text-sm' />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
            
            {/* Project Images */}
            <div className='w-full flex gap-2'>
              <div className='w-1/2 flex flex-col gap-2'>
                <div className={`${projectImages[index][0].className} h-32 w-full rounded-lg`}></div>
                <div className={`${projectImages[index][1].className} h-32 w-full rounded-lg`}></div>
              </div>
              <div className='w-1/2'>
                <div className={`${projectImages[index][2].className} w-full h-full rounded-lg`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection