import { motion } from 'framer-motion'
import { ArrowLeft, Heart } from 'lucide-react'

function GuiltTrip({ onBack, questionNumber }) {
  const sadGif = "https://media.tenor.com/bHyK6nL7mykAAAAi/sad-sadge.gif"

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-2xl"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-pink-600 mb-8"
        >
          HAWWWWW!!!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <img
            src={sadGif}
            alt="Sad GIF"
            className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl object-cover shadow-lg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/320x320/FFB6C1/FFFFFF?text=😢'
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-pink-500 mb-10 font-medium"
        >
          You dont mean it right?...... 💔<br />
          think again love 👉🏼👈🏼<br />
          <span className="text-base text-pink-400 mt-2 block">
            TRY AGAIN 🤗
          </span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <ArrowLeft className="w-5 h-5" />
          Say yes this time!
        </motion.button>
      </motion.div>
    </div>
  )
}

export default GuiltTrip
