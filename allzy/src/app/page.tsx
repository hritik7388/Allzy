'use client'

import { motion } from 'framer-motion'

const letters = ['A', 'L', 'L', 'Z', 'Y']
const colors = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500', 'text-purple-500']

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-white  overflow-hidden">
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-wider text-center">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.3, type: 'spring', stiffness: 200 }}
            className={`border-4 ${colors[index]} border-current px-2 sm:px-4 py-1 sm:py-2 rounded-md`}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <motion.p
        className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl text-gray-900   max-w-xl text-center px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Everything, delivered easily. This app brings you everything you need in life.
      </motion.p>
    </div>
  )
}
