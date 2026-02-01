import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QuestionPage from './components/QuestionPage'
import GuiltTrip from './components/GuiltTrip'
import Finale from './components/Finale'
import WelcomeScreen from './components/WelcomeScreen'
import FloatingHearts from './components/FloatingHearts'

const questions = [
  {
    id: 1,
    title: "Are you free next week? 👈🏼👉🏼",
    gif: "https://media1.tenor.com/m/DkAKG__lI08AAAAd/shinchan.gif",
    bottomText: "You are nah? hehe",
  },
  {
    id: 2,
    title: "Yayyyy, Now Do you like spending time with me?",
    gif: "https://media.tenor.com/LNCDaEdnjw0AAAAi/bubu-dudu-bubu-dudu-love.gif",
    bottomText: "I think this is a yes right? 😊",
  },
  {
    id: 3,
    title: "Hehe okay... So are you ready for a surprise?",
    gif: "https://media.tenor.com/AZ12YafzVwwAAAAi/bubu-dudu-prince-bubu-dudu-princess.gif",
    bottomText: "DRUMROLL PLSSSSS",
  },
  {
    id: 4,
    title: "Will you be my Valentine?",
    gif: "https://media1.tenor.com/m/zUO49UV7SE4AAAAC/chandler-bing.gif",
    bottomText: "I am not an italian though!....",
  },
]

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [showGuiltTrip, setShowGuiltTrip] = useState(false)
  const [showFinale, setShowFinale] = useState(false)

  const handleYes = () => {
    if (currentStep === questions.length - 1) {
      // Final question - show finale
      setShowFinale(true)
    } else {
      // Move to next question
      setCurrentStep(currentStep + 1)
    }
  }

  const handleNo = () => {
    if (currentStep === questions.length - 1) {
      // 4th question - No button should be evasive (handled in QuestionPage)
      return
    } else {
      // First 3 questions - show guilt trip
      setShowGuiltTrip(true)
    }
  }

  const handleBackFromGuiltTrip = () => {
    setShowGuiltTrip(false)
  }

  const handleStart = () => {
    setShowWelcome(false)
  }

  if (showWelcome) {
    return (
      <>
        <FloatingHearts />
        <WelcomeScreen onStart={handleStart} />
      </>
    )
  }

  if (showFinale) {
    return (
      <>
        <FloatingHearts />
        <Finale />
      </>
    )
  }

  if (showGuiltTrip) {
    return (
      <>
        <FloatingHearts />
        <GuiltTrip
          onBack={handleBackFromGuiltTrip}
          questionNumber={currentStep + 1}
        />
      </>
    )
  }

  return (
    <>
      <FloatingHearts />
      <div className="min-h-screen flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full max-w-2xl"
          >
            <QuestionPage
              question={questions[currentStep]}
              onYes={handleYes}
              onNo={handleNo}
              isLastQuestion={currentStep === questions.length - 1}
              currentStep={currentStep}
              totalSteps={questions.length}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
