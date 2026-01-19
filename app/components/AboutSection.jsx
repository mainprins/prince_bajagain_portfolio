import React from 'react'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { CiLocationArrow1, CiLocationOn } from 'react-icons/ci'
import { FaLocationArrow } from 'react-icons/fa'
import { HiOutlineViewfinderCircle } from 'react-icons/hi2'
import { LiaLinkedin } from 'react-icons/lia'
import { MdOutlineMailOutline } from 'react-icons/md'
import { SiGooglegemini } from 'react-icons/si'

const AboutSection = () => {
  return (
    <section className='flex gap-3 items-center justify-center mt-10 p-10'>
      <div id="left" className='border border-stone-800 h-120 flex flex-col gap-10 p-4 rounded-xl'>
        <div id="top" className='flex flex-col gap-1'>
          <span className='flex gap-4 items-center justify-center'><span className='text-2xl font-bold font-saira'>Prince</span> <span className='font-dancing text-stone-500 text-2xl font-bold'>Bajgain</span></span>
          <div className='text-stone-500 flex gap-2 items-center justify-center'>
            <CiLocationOn />
            <span>Itahari, Nep 3:28PM</span>
          </div>
        </div>
        <div id="middle" className='flex min-h-60 w-80'></div>
        <div id="bottom" className='flex w-full items-center justify-center gap-3'>
          <LiaLinkedin />
          <BsGithub />
          <BsTwitterX />
        </div>
      </div>
      <div id="middle" className='flex flex-col gap-8 h-120 border border-stone-800 p-4 rounded-xl'>
        <div id="top" className='flex gap-20 w-max justify-between items-center'>
          <div id="left" className='flex flex-col gap-6'>
            <div id="top" className='flex gap-4 items-center  text-stone-500 text-sm tracking-widest'>
              <CiLocationArrow1 />
              <span>DETAIL-DRIVEN UI</span>
            </div>
            <div id="bottom" className='flex flex-col gap-2'>
              <span className='text-3xl font-bold font-saira'>Interfaces</span>
              <span className='font-dancing text-stone-500 text-3xl font-bold'>you can feel.</span>
              <span className=' text-stone-500 text-xs w-60'>I strive to create digital experiences that feel organic and human, where every pixel has a purpose.</span>
            </div>
          </div>
          <div id="right" className='flex flex-col gap-6'>
            <div id="top" className='font-saira text-stone-500 justify-end flex gap-4 items-center font-bold'>
              <SiGooglegemini />
              <span >Philosophy</span>
            </div>
            <div id="bottom" className='flex flex-col gap-3'>
              <div id="top" className='flex gap-2'>
                <span className='p-2 rounded-full  border border-stone-800 text-xs'>Motion</span>
                <span className='p-2 rounded-full  border border-stone-800 text-xs'>Type</span>
                <span className='p-2 rounded-full  border border-stone-800 text-xs'>Feedback</span>
                <span className='p-2 rounded-full  border border-stone-800 text-xs'>Craft</span>
              </div>
              <div id="bottom" className='flex flex-col gap-2 w-full justify-end items-end'>
                <span className=' font-bold font-saira'>Attention to detail</span>
                <span className=' text-stone-500 text-xs w-60 text-right'>Polish lives in the edges: spacing, timing, and states.</span>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom"></div>
      </div>
      <div id="right" className='border border-stone-800 h-120 flex flex-col gap-12 p-4 rounded-xl'>
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
              <MdOutlineMailOutline size={20}/>
            </div>
            
            <div id="bottom" className='flex flex-col gap-4'>
              <span className='font-dancing font-bold text-3xl '>prnncebajgain@gmail.com</span>
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