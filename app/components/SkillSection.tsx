"use client";

import { useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGreensock,
  SiPrisma,
} from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "GSAP", icon: SiGreensock },
  { name: "Prisma", icon: SiPrisma },
];

const SkillSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const starElem = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Rotation based on Scroll
    gsap.to(starElem.current, {
      rotate: 360,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // Starts when top of section hits bottom of viewport
        end: "bottom top",    // Ends when bottom of section leaves top of viewport
        scrub: 1,            // Smooth "catch up" effect
      },
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="w-screen mt-[10vh] md:mt-[250vh] flex flex-col items-center gap-6 overflow-hidden"
    >
      
      {/* --- LARGER STAR ELEMENT --- */}
      <div className="relative flex items-center justify-center mb-6" ref={starElem}>
        {/* Expanded Glow */}
        <div className="absolute w-24 h-24 bg-amber-500/10 blur-3xl rounded-full animate-pulse" />
        
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          /* Increased from w-8 to w-16 */
          className="w-12 h-12 md:w-16 md:h-16 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* TOP */}
      <div className="w-full flex flex-col items-center justify-center">
        <span className="uppercase text-stone-500 text-xs md:text-sm tracking-[0.4em] font-medium mb-3">
          My Skillset
        </span>

        <h2 className="text-4xl md:text-7xl font-bold flex flex-wrap justify-center gap-3 tracking-tight text-white">
          <span>The Magic</span>
          <span className="font-medium font-dynapuff bg-linear-to-r from-pink-600 via-red-500 to-amber-600 text-transparent bg-clip-text">
            Behind
          </span>
        </h2>
      </div>

      {/* BOTTOM */}
      <div className="w-full flex items-center justify-center mt-8">
        <div className="flex gap-3 flex-wrap w-[95%] md:w-[60%] items-center justify-center">
          {skills.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="
                flex items-center gap-3
                bg-white/[0.03] backdrop-blur-md border border-white/10
                text-stone-300 px-5 py-2.5
                rounded-full text-sm md:text-lg
                transition-all duration-300
                hover:border-amber-400/50 hover:bg-white/[0.08] hover:text-white cursor-default
                hover:scale-105 active:scale-95
              "
            >
              <Icon className="text-xl md:text-2xl" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;