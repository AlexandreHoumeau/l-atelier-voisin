'use client'

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

type TransitionContextType = {
  startTransition: (cb: () => void) => void
  transitioning: boolean
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const firstLoad = useRef(true)

  // Etat controlé par le provider
  const [isExiting, setIsExiting] = useState(false)   // quand on clique -> voile descend
  const [isEntering, setIsEntering] = useState(false) // après navigation -> voile remonte
  const callbackRef = useRef<(() => void) | null>(null)

  // Hook exposé : lance l'animation de sortie, puis appelle cb() (navig) mid-animation
  const startTransition = useCallback((cb: () => void) => {
    callbackRef.current = cb
    setIsExiting(true)
    // on déclenchera la navigation depuis ici après X ms
    const timer = setTimeout(() => {
      callbackRef.current && callbackRef.current()
      callbackRef.current = null
      // laisse l'exiting true un peu (le veil couvre), on attend que la nouvelle route monte qui déclenchera l'entrée
      setIsExiting(false)
      // now the new pathname will trigger the isEntering (see useEffect below)
    }, 600) // --- ajuster ce délai si besoin (600 ms)
    return () => clearTimeout(timer)
  }, [])

  // Detect route change to run entry animation (veil remonte)
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }
    // quand pathname change, on veut une animation d'entrée (veil remonte)
    setIsEntering(true)
    const t = setTimeout(() => setIsEntering(false), 700) // durée de l'entry
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <TransitionContext.Provider value={{ startTransition, transitioning: isExiting || isEntering }}>
      {children}

      {/* Overlay animations */}
      <AnimatePresence mode="wait">
        {/* Exit animation: voile descend (visible when isExiting) */}
        {isExiting && (
          <motion.div
            key="exit-overlay"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
          />
        )}

        {/* Entry animation: voile remonte pour révéler la page (visible when isEntering) */}
        {isEntering && (
          <motion.div
            key="enter-overlay"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  )
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('usePageTransition must be used within PageTransitionProvider')
  return ctx
}
