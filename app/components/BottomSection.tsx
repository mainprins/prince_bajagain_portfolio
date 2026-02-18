import Image from 'next/image'
import React from 'react'

const BottomSection = () => {
  return (
    <section className='md:py-20 w-screen px-10 flex justify-between'>
        <div id="left" className='flex flex-col font-saira md:w-[60%]'>
            <div className="top flex flex-col md:flex-row gap-3 items-center text-6xl md:text-8xl tracking-tightest ">
                <div className="left bg-amber-100 w-20 h-20 hidden md:flex rounded-full">
                    <Image src="/me/06.jpg" alt="" width={80}  height={80} className='w-full rounded-full h-full object-cover'/>
                </div>
                <span>Let's create</span>
            </div>
            <div className="bottom flex gap-1 text-wrap text-stone-500 items-center text-6xl md:text-8xl tracking-tightest">
                <span>Something real.</span>
            </div>
        </div>
        <div id="right"></div>
    </section>
  )
}

export default BottomSection