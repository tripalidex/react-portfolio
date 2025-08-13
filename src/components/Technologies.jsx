import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiAngular } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>
            Technologies
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAngular className='text-7xl text-red-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpring className='text-7xl text-lime-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpringboot className='text-7xl text-lime-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-sky-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies