import React, { useState, useRef, useEffect } from 'react'

export const Faq = ({ ques, ans }) => {
  const [pressed, setPressed] = useState(false)
  const pep = useRef(0)
  const handleClick = (s) => {
    setPressed((old) => {
      return !old
    })
console.log(pressed, 'pressed!')
    // if (pressed) {
    //   pep.current.style.maxHeight = `${pep.current.scrollHeight}px`
    // } else {
    //   pep.current.style.maxHeight = '0px'
    // }
    }
    
  useEffect(() => {
     if (pressed) {
       pep.current.style.maxHeight = `${pep.current.scrollHeight}px`
     } else {
       pep.current.style.maxHeight = '0px'
     }



  },[pressed])
  return (
    <li onClick={(e) => handleClick(e.target)}>
      <h3>{ques}</h3>
      <button className='show'>
        {pressed ? (
          <svg-icon
            _ngcontent-ief-c105=''
            role='img'
            aria-hidden='true'
            fontsize='24px'
            class='dropdown-icon ng-tns-c105-2 svg-icon-cancel'
            _nghost-ief-c41=''
            aria-label='cancel-icon'
          >
            <svg
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              fit=''
              height='100%'
              width='100%'
              preserveAspectRatio='xMidYMid meet'
              focusable='false'
            >
              <path
                d='M4.00024 4L12.0004 12.0001'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
              <path
                d='M11.9998 4L3.99964 12.0001'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </svg>
          </svg-icon>
        ) : (
          <svg-icon
            _ngcontent-ief-c105=''
            role='img'
            aria-hidden='true'
            fontsize='24px'
            class='dropdown-icon ng-tns-c105-2 svg-icon-plus'
            _nghost-ief-c41=''
            aria-label='plus-icon'
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              fit=''
              height='100%'
              width='100%'
              preserveAspectRatio='xMidYMid meet'
              focusable='false'
            >
              <path
                d='M12 20L12 4'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
              <path
                d='M4 12L20 12'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </svg>
          </svg-icon>
        )}
      </button>
      <div ref={pep} >
        <p>{ans}</p>
      </div>
    </li>
  )
}
