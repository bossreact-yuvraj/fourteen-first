import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

function SparkleEffect({ children, className = '' }) {
  const sparkles = Array.from({ length: 5 })

  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          initial={{
            opacity: 0,
            scale: 0,
            x: '50%',
            y: '50%',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: `${50 + (Math.random() - 0.5) * 100}%`,
            y: `${50 + (Math.random() - 0.5) * 100}%`,
            rotate: [0, 180],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </motion.div>
      ))}
    </div>
  )
}

export default SparkleEffect
