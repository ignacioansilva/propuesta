import Image from 'next/image'
import React from 'react'
import profile from "@/app/images/profile.jpeg"

function FirstModal() {
  return (
    <div className='px-10 bg-gradient-to-t from-sky-500 to-indigo-500 h-2/3 w-screen m-0 absolute'>
    <div className='font-sans m-24 bg-white rounded-xl align-middle container mx-auto flex flex-col lg:flex-row items-center justify-between px-20 py-16 lg:px-10 xl:max-w-6xl '>
      <div className='sm:p-10 pl-0 text-center lg:text-left'>
        <p className="lg:pb-5 pb-4 lg:text-5xl font-semibold text-4xl">Hi, I am</p>
        <h1 className=" lg:text-7xl text-5xl font-bold">Ignacio Silva</h1>
        <div className='flex pt-5'>
        <p className='lg:pt-5 lg:text-5xl text-4xl font-semibold'>I design</ p>
        <p className='lg:pt-5 pl-2 lg:text-5xl text-4xl font-semibold text-orange-500'> and build</ p>
        </div>
        <p className='lg:text-5xl text-4xl font-semibold'> user interfaces </ p>

      </div>
      <div className='py-10 pr-20 w-96'>
        <Image src={profile} alt="Profile picture" className='rounded-full border-8 border-violet-950' />
      </div>
    </div>
    </div>
  )
}

export default FirstModal
