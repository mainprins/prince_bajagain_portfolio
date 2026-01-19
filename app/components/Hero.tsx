"use client"

import { CiLocationOn } from "react-icons/ci"
import { MdOutlineLayers } from "react-icons/md"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Hero = () => {

    useGSAP(() => {

        gsap.to("#heroText", {
            y: 0,
            opacity: 1,
            duration: 1,
        });
        gsap.to("#heroLine", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
        })
        gsap.to("#heroSubline", {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                delay: 0.5,
            });
    })
    return (
        <section className="flex flex-col px-10 mt-35 md:px-0 gap-20">
            <div id="top" className="flex flex-col w-full min-h-90 items-center justify-center">
                <span className="font-bold font-saira opacity-0 translate-y-3 text-8xl md:text-[12rem] p-0" id="heroText">PRINCE</span>
                <span className="uppercase text-stone-600 tracking-[0.3em] text-sm translate-y-3 opacity-0 text-center md:text-xl" id="heroLine">I develop and create products that</span>
                <span className="text-4xl md:text-7xl opacity-0 font-dancing blur-[2px] translate-y-3" id="heroSubline">deliver real impact.</span>
            </div>
            <div id="bottom" className="w-full flex justify-between items-center px-10">
                <div id="left" className="flex flex-col items-center justify-center font-saira">
                    <span className="text-green-400">
                        <CiLocationOn size={25} />
                    </span>
                    <span>Based in Itahari,</span>
                    <span className="text-stone-500">Nepal</span>
                </div>
                <div id="right" className="flex flex-col items-center justify-center font-saira">
                    <span className="text-blue-400">
                        <MdOutlineLayers size={25} />
                    </span>
                    <span>Full Stack Dev,</span>
                    <span className="text-stone-500">& Engineer</span>
                </div>
            </div>
        </section>
    )
}

export default Hero