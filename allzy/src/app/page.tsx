// src/app/page.tsx 
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const letters = ['A', 'L', 'L', 'Z', 'Y']
const colors = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500', 'text-purple-500']

const welcomeLetters = ['W', 'E', 'L', 'C', 'O', 'M', 'E']
const welcomeColors = [
  'text-pink-500',
  'text-teal-500',
  'text-orange-500',
  'text-indigo-500',
  'text-emerald-500',
  'text-rose-500',
  'text-cyan-500'
]

const bubbleColors = [
  'bg-pink-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-purple-100',
  'bg-red-100', 'bg-orange-100', 'bg-indigo-100', 'bg-teal-100', 'bg-emerald-100',
  'bg-cyan-100', 'bg-rose-100', 'bg-lime-100', 'bg-fuchsia-100', 'bg-sky-100',
  'bg-violet-100', 'bg-amber-100'
]
const random = (min: number, max: number) => Math.random() * (max - min) + min

export default function Home() {
 const [bubbles, setBubbles] = useState<any[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 50 }, () => ({
      id: crypto.randomUUID(),
      top: random(5, 90),
      left: random(5, 90),
      size: random(30, 60),
      delay: random(0, 4),
      duration: random(5, 10),
      color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
    }))
    setBubbles(generated)
  }, [])
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-white overflow-hidden">
      
      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id} 
          className={`absolute rounded-full cursor-pointer shadow-lg ${bubble.color}`}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            zIndex: 0,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [0, 10, 0]
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: bubble.delay
          }}
        />
      ))}

      {/* WELCOME with animation */}
  {/* WELCOME with animation */}
      <div className="relative z-10 bg-white"> {/* ✅ Fix applied here */}
        <div className="flex flex-wrap justify-center space-x-1 sm:space-x-3 text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-center mt-6 sm:mt-10">
          {welcomeLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ rotate: 360, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 150, damping: 10 }}
              className={`border-2 ${welcomeColors[index]} border-current px-2 sm:px-3 py-1 sm:py-2 rounded-lg`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* ALLZY */}
        <div className="mt-10 flex flex-wrap justify-center space-x-2 sm:space-x-4 text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-wider text-center">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3 + 2, type: 'spring', stiffness: 200 }}
              className={`border-4 ${colors[index]} border-current px-2 sm:px-4 py-1 sm:py-2 rounded-md`}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="z-10 mt-6 sm:mt-10 text-base sm:text-lg md:text-xl text-gray-900 max-w-xl text-center px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Everything, delivered easily. This app brings you everything you need in life.
      </motion.p>
    </div>
  )
}
