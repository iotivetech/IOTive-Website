import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import { HiSparkles } from 'react-icons/hi'

const HeroSection: React.FC = () => {
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [loopNum, setLoopNum] = useState<number>(0)

  const fullText = 'Innovation'
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseTime = 1500

  // Typing animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        if (currentIndex < fullText.length) {
          setDisplayText(prev => prev + fullText[currentIndex])
          setCurrentIndex(prev => prev + 1)
        } else {
          // Pause at full text
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting mode
        if (currentIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1))
          setCurrentIndex(prev => prev - 1)
        } else {
          setIsDeleting(false)
          setLoopNum(prev => prev + 1)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, loopNum])

  return (
    <section className="min-h-screen flex items-center justify-center animated-gradient pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg mb-6 md:mb-8"
          >
            <HiSparkles className="text-yellow-500 text-lg md:text-xl" />
            <span className="text-gray-700 font-medium text-sm md:text-base">Where Innovation Meets Technology</span>
          </motion.div>

          {/* Main Heading - FIXED: Stable container */}
          <div className="mb-6 md:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2"
            >
              {/* LEFT PART - FIXED WIDTH */}
              <div className="w-full md:w-auto mb-2 md:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
                  Turning Ideas into
                </h1>
              </div>

              {/* RIGHT PART - ANIMATED TEXT WITH FIXED CONTAINER */}
              <div className="min-w-[280px] md:min-w-[320px] lg:min-w-[380px] h-[4.5rem] md:h-[5.5rem] lg:h-[6.5rem] flex items-center justify-start">
                <span className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative">
                  {displayText}
                  {/* Blinking cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute -right-2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"
                  />
                </span>
              </div>
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto px-4"
          >
            IOTive brings your electronics dreams to life. From PCB design to IoT development we build, teach, and innovate together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
          >
            <Button
              onClick={() => navigate('/projects')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 text-sm md:text-base"
            >
              Explore Our Work
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 text-sm md:text-base"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Floating Elements - Responsive */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-5 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-blue-400/20 rounded-full blur-xl hidden lg:block"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-5 md:right-10 w-16 h-16 md:w-32 md:h-32 bg-purple-400/20 rounded-full blur-xl hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
