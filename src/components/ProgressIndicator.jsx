import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

function ProgressIndicator({ current, total }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <Heart
            className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${
              index < current
                ? 'text-pink-500 fill-pink-500'
                : index === current
                ? 'text-pink-300 fill-pink-300 animate-pulse'
                : 'text-gray-300 fill-gray-200'
            }`}
          />
          {index === current && (
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-400 fill-pink-400" />
            </motion.div>
          )}
        </motion.div>
      ))}
      <span className="ml-3 text-sm md:text-base text-pink-500 font-medium">
        {current + 1} of {total}
      </span>
    </div>
  )
}

export default ProgressIndicator
