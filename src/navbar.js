import logo from './images/osn-logo.svg'
import React, { useState, useEffect } from 'react'
export const Nav = ({isOkay}) => {
  const [scrolled, setScrolled] = useState(false)

  
  const scrollNot = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  }
  scrollNot()

  return (
    <nav className={`${!scrolled ? 'unfix' : 'fix'}`}>
      {isOkay ? (
        <div className='img-con'>
          <img src={logo} alt='logo' />
        </div>
      ) : (
        <div className='img-con'>
          {scrolled && <img src={logo} alt='logo' />}
        </div>
      )}
      <div>
        <button className='lan'>العربية</button>
        <button className='lan'>login</button>
        <button className='start bld'>START MY FREE TRIAL</button>
      </div>
    </nav>
  )
}
