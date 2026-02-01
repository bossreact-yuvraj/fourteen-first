import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import ProgressIndicator from './ProgressIndicator'
import SparkleEffect from './SparkleEffect'

function QuestionPage({ question, onYes, onNo, isLastQuestion, currentStep, totalSteps }) {
  const [noButtonPosition, setNoButtonPosition] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const noButtonRef = useRef(null)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      )
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const moveButtonToRandomPosition = () => {
    if (!isLastQuestion) return

    const button = noButtonRef.current
    if (!button) return

    const buttonWidth = button.offsetWidth || 150
    const buttonHeight = button.offsetHeight || 50
    const padding = 20
    
    // Calculate safe bounds
    const maxX = Math.max(0, window.innerWidth - buttonWidth - padding)
    const maxY = Math.max(0, window.innerHeight - buttonHeight - padding)
    const minX = padding
    const minY = padding

    // Ensure we have valid bounds
    if (maxX <= minX || maxY <= minY) {
      // If screen is too small, just move it slightly
      const currentX = noButtonPosition?.x || window.innerWidth / 2
      const currentY = noButtonPosition?.y || window.innerHeight / 2
      const offsetX = (Math.random() - 0.5) * 500
      const offsetY = (Math.random() - 0.5) * 500
      
      setNoButtonPosition({
        x: Math.max(minX, Math.min(maxX, currentX + offsetX)),
        y: Math.max(minY, Math.min(maxY, currentY + offsetY)),
      })
      return
    }

    // Generate random position within bounds
    const randomX = Math.max(minX, Math.min(maxX, Math.random() * maxX + minX))
    const randomY = Math.max(minY, Math.min(maxY, Math.random() * maxY + minY))

    setNoButtonPosition({ x: randomX, y: randomY })
  }

  const handleNoHover = () => {
    if (isMobile) return // Don't use hover on mobile
    moveButtonToRandomPosition()
  }

  const handleNoClick = (e) => {
    if (!isLastQuestion) {
      onNo()
      return
    }

    // On mobile or if button is clicked, move it
    if (isMobile || noButtonPosition) {
      e.preventDefault()
      moveButtonToRandomPosition()
    } else {
      // First click on desktop - just move it
      e.preventDefault()
      moveButtonToRandomPosition()
    }
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center relative">
      {/* Progress Indicator */}
      {totalSteps && (
        <ProgressIndicator current={currentStep} total={totalSteps} />
      )}

      {/* Title */}
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="text-3xl md:text-4xl font-bold text-pink-600 mb-8"
      >
        {question.title}
      </motion.h1>

      {/* GIF */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <img
          src={question.gif}
          alt="Cute GIF"
          className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl object-cover shadow-lg"
          onError={(e) => {
            // Fallback if GIF doesn't load
            e.target.src = 'https://via.placeholder.com/320x320/FFB6C1/FFFFFF?text=💕'
          }}
        />
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-pink-500 mb-10 font-medium"
      >
        {question.bottomText}
      </motion.p>

      {/* Cute decorative hearts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-2 mb-6"
      >
        {['💕', '💖', '💗', '💝'].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-2xl"
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>

      {/* Buttons Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center relative"
      >
        {/* Yes Button */}
        <SparkleEffect>
          <motion.button
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 10px 25px rgba(236, 72, 153, 0.3)',
                '0 15px 35px rgba(236, 72, 153, 0.5)',
                '0 10px 25px rgba(236, 72, 153, 0.3)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            onClick={onYes}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto z-10 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <Heart className="w-5 h-5 relative z-10" fill="currentColor" />
            <span className="relative z-10">Yes</span>
          </motion.button>
        </SparkleEffect>

        {/* No Button - Evasive on last question */}
        {isLastQuestion ? (
          <motion.button
            ref={noButtonRef}
            style={
              noButtonPosition
                ? {
                    position: 'fixed',
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                    zIndex: 1000,
                    transition: 'all 0.3s ease-out',
                  }
                : {}
            }
            onMouseEnter={handleNoHover}
            onClick={handleNoClick}
            animate={
              !noButtonPosition
                ? {
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }
                : {}
            }
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="bg-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full sm:w-auto touch-none"
          >
            Maybe? 😏
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={onNo}
            className="bg-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            No
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}

export default QuestionPage