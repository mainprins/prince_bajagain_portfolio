import React from 'react'

const SkillSection = () => {
    return (
        <section className='w-screen mt-[250vh] flex flex-col gap-6'>
            <div id="top" className='w-full flex flex-col items-center justify-center'>
                <span className='uppercase text-stone-500 text-sm tracking-widest'>My Skillset</span>
                <span className='text-6xl font-bold flex gap-3 tracking-wider'>
                    <span>The Magic</span>
                    <span className='font-medium font-dynapuff bg-linear-to-r from-pink-600 via-red-500 to-amber-600 text-transparent bg-clip-text'>Behind</span>
                </span>
            </div>
            <div id="bottom" className='w-full flex items-center justify-center'>
                <div className='flex gap-3 flex-wrap w-[50%] items-center justify-center'>
                    <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full '>React</span>
                    <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full '>TypeScript</span>
                    <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full '>Next.js</span>
                    <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full '>Tailwind</span>
                    <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full '>Node.js</span>
                    <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full '>MongoDB</span>
                    <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full '>GSAP</span>
                    <span className='bg-stone-800 border border-stone-500 text-stone-300 px-3 py-1 rounded-full '>Prisma</span>
                </div>
            </div>
        </section>
    )
}

export default SkillSection