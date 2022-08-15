import logo from './images/osn-logo.svg'
import React, { useState, useEffect, useRef } from 'react'
import { data } from './data'

export const Hero = () => {
  const container = useRef(0)
  const [email, setEmail] = useState('')
  const [enter, setEnter] = useState('')
  let child = []
  const checkIt = () => {
    let regex = /\w+@\w+\.\w+/g
    if (email.match(regex) !== null) {
      setEnter(false)
    } else {
      setEnter(true)
    }
  }
  useEffect(() => {
    for (let i = 0; i < container.current.children.length - 1; i++) {
      child.push(container.current.children[i])
    }

    // console.log(child, 'just four!')

    handleOpacity(child)
  }, [])

  const handleOpacity = (ele) => {
    // console.log('called with ', ele)
    let cont = true
    let y = ele.length - 1
    setInterval(() => {
      if (cont) {
        // console.log(y, 'opacity')

        if (y !== 0 && y < ele.length) ele[y].style.opacity = '0'

        if (y === 0) {
          ele[y].style.opacity = '0'
          ele[ele.length - 1].style.opacity = '1'
          ele.forEach((item) => {
            item.style.opacity = '1'
          })
          y = ele.length

          // cont = false
          // setTimeout(() => {
          //   ele.forEach((item) => {
          //     item.style.opacity = '1'
          //   })
          //   y = ele.length - 1
          //   cont = true
          // }, 3400)
          // console.log(y, 'i equal zero')
        }

        if (cont) y = y - 1
      }
    }, 4000)
  }
  return (
    <header ref={container}>
      <picture className='pc-1'>
        <source srcSet='./images/Wwmin.webp' media='(max-width:767px) ' />
        <source
          srcSet='./images/Wwtapwebp.webp'
          media='(min-width:768px) and (max-width:1023px) '
        />
        <source
          srcSet='./images/Ww1024.webp'
          media='(min-width:1024px) and (max-width:1365px) '
        />
        <source
          srcSet='./images/westWorld1366.webp'
          media='(min-width:1366px) and (max-width:1919px) '
        />
        <source
          srcSet='./images/westWorldmax.webp'
          media='(min-width:1920px) '
        />
        <img className='behold' src='./images/wwdefault.webp' alt='' />
      </picture>
      <picture className='pc-2'>
        <source srcSet='./images/Smin.jpg' media='(max-width:767px) ' />
        <source
          srcSet='./images/Stap.png'
          media='(min-width:768px) and (max-width:1023px) '
        />
        <source
          srcSet='./images/S1024.jpg'
          media='(min-width:1024px) and (max-width:1365px) '
        />
        <source
          srcSet='./images/S1366.jpg'
          media='(min-width:1366px) and (max-width:1919px) '
        />
        <source srcSet='./images/Smax.jpg' media='(min-width:1920px) ' />
        <img className='behold' src='./images/sdefault.jpg' alt='' />
      </picture>
      <picture className='pc-3'>
        <source srcSet='./images/omin.webp' media='(max-width:767px) ' />
        <source
          srcSet='./images/otab.webp'
          media='(min-width:768px) and (max-width:1023px) '
        />
        <source
          srcSet='./images/o1024.jpg'
          media='(min-width:1024px) and (max-width:1365px) '
        />
        <source
          srcSet='./images/o1366.jpg'
          media='(min-width:1366px) and (max-width:1919px) '
        />
        <source srcSet='./images/ofmax.jpg' media='(min-width:1920px) ' />
        <img className='behold' src='./images/odefault.jpg' alt='' />
      </picture>
      <picture className='pc-4'>
        <source srcSet='./images/hodmin.jpg' media='(max-width:767px) ' />
        <source
          srcSet='./images/hod768.webp'
          media='(min-width:768px) and (max-width:1023px) '
        />
        <source
          srcSet='./images/hod1040.jpg'
          media='(min-width:1024px) and (max-width:1365px) '
        />
        <source
          srcSet='./images/hod1366.jpg'
          media='(min-width:1366px) and (max-width:1919px) '
        />
        <source srcSet='./images/hod1920.jpg' media='(min-width:1920px) ' />
        <img className='behold' src='./images/hoddefault.jpg' alt='' />
      </picture>

      <div className='hwrapper'>
        <img src={logo} alt='' />
        <h5>
          The freshest series. The hottest movies. The best originals. Just 9.5
          USD /month
        </h5>
        <h3>Enjoy a 7-DAY FREE TRIAL!</h3>
        <form action=''>
          <div className='input-container'>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Email address'
            />
            <div className='oops'>
              <p className={`${enter ? 'blackops' : 'zezo'}`}>
                Oops! Please enter a valid e-mail address
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              checkIt()
            }}
            className='bld opp'
          >
            Start 7-DAY FREE TRIAL
          </button>
          <p>
            By proceeding, you agree to hear from OSN+ and agree to our{' '}
            <span>Terms of Use</span> and <span>Privacy Policy</span>
          </p>
        </form>
      </div>
    </header>
  )
}
