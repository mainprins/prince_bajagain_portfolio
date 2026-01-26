"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const QuickGlance = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const radius = 210;
        const images = gsap.utils.toArray("#slider-div span");
        const total = images.length;
        const angleStep = (2 * Math.PI) / total;

        images.forEach((img: any, i) => {
            const angle = i * angleStep;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            gsap.set(img, {
                x: x,
                z: z,
                rotationY: -angle * (180 / Math.PI) + 90,
                transformOrigin: "center center"
            });
        });

        // Create rotation animation
        const animation = gsap.to("#slider-div", {
            rotationY: 360,
            duration: 20,
            ease: "none",
            repeat: -1
        });

        // Optional: Pause on hover
        const slider = sliderRef.current;
        if (slider) {
            const handleMouseEnter = () => gsap.to(animation, { timeScale: 0.2, duration: 0.5 });
            const handleMouseLeave = () => gsap.to(animation, { timeScale: 1, duration: 0.5 });

            slider.addEventListener("mouseenter", handleMouseEnter);
            slider.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                slider.removeEventListener("mouseenter", handleMouseEnter);
                slider.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    });

    return (
        <section className='md:h-screen w-screen p-10 flex flex-col md:flex-row'>
            <div id="left" className='w-full md:w-[70%] h-full flex flex-col gap-10'>
                <div id="top" className='flex flex-col gap-3'>
                    <span className="top text-stone-500 tracking-widest uppercase">A Quick Glance</span>
                    <span className="bottom md:w-220 font-bold text-3xl md:text-5xl tracking-widest">
                        <span>Building the bridge between ideas and </span>
                        <span className='font-medium font-dynapuff bg-gradient-to-r from-pink-600 via-red-500 to-amber-600 text-transparent bg-clip-text'>experiences</span>
                    </span>
                </div>
                <div id="bottom">
                    <div className="top">
                        <p className='text-stone-500 tracking-widest md:w-180 leading-relaxed'>
                            I'm Prince Bajgain, a full-stack web developer focused on building modern, fast, and practical web applications. I work primarily with React, Next.js, and the MERN stack, turning ideas into real, usable products.
                            <br /><br />
                            I enjoy working across the entire stack, from clean frontend interfaces to scalable backend logic. I focus on writing maintainable code, improving performance, and making sure applications work smoothly for real users.
                            <br /><br />
                            I've built and deployed full-stack projects, including a real-time chatting application, and I actively work on improving SEO, architecture, and production-level best practices. I'm constantly learning by building and refining real projects.
                        </p>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div id="right" className='w-full md:w-[30%] h-full flex items-center justify-center  md:px-10 py-40' style={{ perspective: "1500px" }}>
                <div 
                    id="slider-div" 
                    className='relative w-48 h-64' 
                    style={{ transformStyle: "preserve-3d" }}
                    ref={sliderRef}
                >
                    <span className='absolute w-40 h-40 md:h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" alt="" />
                    </span>
                    <span className='absolute w-40 h-40 md:h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/handsome-young-man-with-arms-crossed-white-background_23-2148222620.jpg" alt="" />
                    </span>
                    <span className='absolute w-40 h-40 md:h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    </span>
                    <span className='absolute w-40 h-40 md:h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    </span>
                    <span className='absolute w-40 h-40 md:h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-2xl' src="https://img.freepik.com/premium-photo/confident-guy-crossing-arms-smiling-blue-background_116547-108214.jpg" alt="" />
                    </span>
                    <span className='absolute w-40 h-40 md:h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?semt=ais_user_personalization&w=740&q=80" alt="" />
                    </span>
                    <span className='absolute w-40 h-40 md:h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    </span>
                    <span className='absolute w-40 h-40 md:h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg" alt="" />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default QuickGlance