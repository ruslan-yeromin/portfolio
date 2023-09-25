'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SectionDivider = () => {
  return (
    <motion.div className='bg-gray-200 dark:bg-opacity-20 my-24 h-16 w-1 rounded-fu;; hidden sm:block'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
    ></motion.div>
  )
}

export default SectionDivider