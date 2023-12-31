'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { skillsData } from '@/utils/data'
import { useScrollSection } from '@/types/hooks';
import { motion } from 'framer-motion';

const fadeInAnimation = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
}

const Skills = () => {

    const { ref } = useScrollSection("Skills");

  return (
    <section id='skills' ref={ref} className='mb-28 2xl:mt-28 max-w-[53rem] 2xl:max-w-[70rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionTitle title="My skills" />
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li 
                        className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 cursor-pointer hover:bg-blue-50 transition dark:bg-white/10 dark:text-white/80' 
                        key={index}
                        variants={fadeInAnimation}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once: true
                        }}
                        custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>
    </section>
  )
}

export default Skills