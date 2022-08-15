import './App.css'
import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

function App() {
  const [isOkay, setIsOkay] = useState(false)
  const [isPhone, setIsPhone] = useState(false)

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsOkay(window.innerWidth <= 1024)
      setIsPhone(window.innerWidth <= 480)
    })
    window.addEventListener('DOMContentLoaded', () => {
      setIsOkay(window.innerWidth <= 1024)
      setIsPhone(window.innerWidth <= 480)
    })
    window.addEventListener('resize', () => {
      setIsOkay(window.innerWidth <= 1024)
      setIsPhone(window.innerWidth <= 480)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setIsOkay(window.innerWidth <= 1024)
        setIsPhone(window.innerWidth <= 480)
      })
      window.removeEventListener('load', () => {
        setIsOkay(window.innerWidth <= 1024)
        setIsPhone(window.innerWidth <= 480)
      })
      window.removeEventListener('DOMContentLoaded', () => {
        setIsOkay(window.innerWidth <= 1024)
        setIsPhone(window.innerWidth <= 480)
      })
    }
  })

  return (
    <>
      <Header isOkay={isOkay} />
      <Main isPhone={isPhone} isOkay={isOkay} />
      <Footer isPhone={isPhone} isOkay={isOkay} />
    </>
  )
}

export default App
