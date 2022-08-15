// import { Slider } from './slider'
import { data } from './data.js'
import Swiper from './swiper.js'
import Wniper from './Sniper.js'

import { Faq } from './faq.js'
import React, { useState, useEffect } from 'react'
export const Footer = ({isOkay,isPhone}) => {
  const [email, setEmail] = useState('')
  const [enter, setEnter] = useState('')
 

  const checkIt = () => {
    let regex = /\w+@\w+\.\w+/g
    if (email.match(regex) !== null) {
      setEnter(false)
    } else {
      setEnter(true)
    }
  }
  return (
    <footer>
      <section className='third  fourth'>
        <div className='smart'>
          <h1>ARABIC SHOWS YOU SIMPLY CAN'T MISS</h1>
          <div className='unlt unlt2'></div>
          <p>Unrivaled selection of global & regional titles</p>
          <button className='bld my'>START MY FREE TRIAL</button>
        </div>
        <div className='clever'>
          {isOkay ? (
            <Wniper isPhone={isPhone} data={data.footer_img} />
          ) : (
            <Swiper data={data.footer_img} />
          )}

          {/* <Swiper data={data.footer_img} /> */}
          {isOkay || (
            <div className='btns'>
              <div className=' left'>
                {' '}
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
                    d='M14 4L7.41421 10.5858C6.63316 11.3668 6.63316 12.6332 7.41421 13.4142L14 20'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </div>
              <div className=' right'>
                {' '}
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
                    d='M10 4L16.5858 10.5858C17.3668 11.3668 17.3668 12.6332 16.5858 13.4142L10 20'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>
      <article className='frequently'>
        <h1>Frequently Asked Questions</h1>
        <ul>
          {data.FAQ.map((item, index) => {
            const { ques, ans } = item
            return <Faq key={index} ques={ques} ans={ans} />
          })}
        </ul>
      </article>
      <section className='last'>
        <img src='images/osn-logo.svg' alt='osn-logo' />
        <h1>HOME TO MENA ENTERTAINMENT</h1>
        <h5>10000+ hours on demand - start your 7-day free trial now!</h5>
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
            START MY FREE TRIAL{' '}
          </button>
          <p>
            By proceeding, you agree to hear from OSN+ and agree to our{' '}
            <span>Terms of Use</span> and <span>Privacy Policy</span>
          </p>
        </form>

        <ul className='Voucher'>
          <li>Help</li>
          <li>Redeem Your Voucher</li> <li>Terms of use</li>{' '}
          <li>Privacy Policy</li>
        </ul>
        <div className='social-links'>
          <a href='https://www.facebook.com/OSNPlusOfficial'>
            <svg-icon
              _ngcontent-fiy-c85=''
              role='img'
              aria-hidden='true'
              size='lg'
              key='facebook'
              _nghost-fiy-c41=''
              aria-label='facebook-icon'
              class='svg-icon-facebook'
            >
              <svg
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                fit=''
                height='100%'
                width='100%'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <path
                  d='M30 16.0853C30 8.30537 23.7328 2 16 2C8.26719 2 2 8.30537 2 16.0853C2 23.1169 7.11875 28.9436 13.8125 30V20.1568H10.2578V16.0853H13.8125V12.9821C13.8125 9.45255 15.9016 7.50206 19.1008 7.50206C20.632 7.50206 22.2344 7.77717 22.2344 7.77717V11.2435H20.468C18.7289 11.2435 18.1875 12.3301 18.1875 13.4443V16.0853H22.0703L21.4496 20.1568H18.1875V30C24.8813 28.9436 30 23.1169 30 16.0853Z'
                  fill='currentColor'
                ></path>
              </svg>
            </svg-icon>
          </a>
          <a href='https://twitter.com/osnplus'>
            <svg-icon
              _ngcontent-fiy-c85=''
              role='img'
              aria-hidden='true'
              size='lg'
              key='twitter'
              _nghost-fiy-c41=''
              aria-label='twitter-icon'
              class='svg-icon-twitter'
            >
              <svg
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                fit=''
                height='100%'
                width='100%'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <path
                  d='M10.7955 27C21.3613 27 27.1429 18.1486 27.1429 10.4857C27.1429 10.2367 27.1429 9.9877 27.1317 9.73868C28.2521 8.92372 29.2269 7.8937 30 6.72785C28.9692 7.19193 27.8599 7.49754 26.6947 7.64469C27.8824 6.93159 28.7899 5.78839 29.2269 4.43012C28.1176 5.09793 26.8852 5.57333 25.5742 5.83366C24.521 4.70177 23.0308 4 21.3838 4C18.2129 4 15.6359 6.60335 15.6359 9.80659C15.6359 10.2593 15.6919 10.7008 15.7815 11.1309C11.0084 10.8932 6.77311 8.57283 3.93838 5.06398C3.44538 5.92421 3.16527 6.92028 3.16527 7.98425C3.16527 9.99902 4.18487 11.7761 5.71989 12.8174C4.77871 12.7835 3.89356 12.5231 3.12045 12.093C3.12045 12.1156 3.12045 12.1383 3.12045 12.1722C3.12045 14.9793 5.10364 17.3337 7.72549 17.8656C7.2437 18.0015 6.7395 18.0694 6.21288 18.0694C5.84314 18.0694 5.48459 18.0354 5.13725 17.9675C5.86555 20.2766 7.9944 21.9518 10.5042 21.997C8.53221 23.5591 6.05602 24.4872 3.36695 24.4872C2.90756 24.4872 2.44818 24.4646 2 24.408C4.53221 26.0379 7.55742 27 10.7955 27Z'
                  fill='currentColor'
                ></path>
              </svg>
            </svg-icon>
          </a>
          <a href='https://www.instagram.com/osn'>
            <svg-icon
              _ngcontent-fiy-c85=''
              role='img'
              aria-hidden='true'
              size='lg'
              key='insta'
              _nghost-fiy-c41=''
              aria-label='insta-icon'
              class='svg-icon-insta'
            >
              <svg
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                fit=''
                height='100%'
                width='100%'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <path
                  d='M15.9944 4.52272C19.7333 4.52272 20.1722 4.53939 21.65 4.60607C23.0167 4.6672 23.7556 4.89502 24.25 5.0895C24.9056 5.34511 25.3722 5.64517 25.8611 6.13415C26.35 6.62314 26.6556 7.0899 26.9056 7.74558C27.0944 8.24013 27.3278 8.97916 27.3889 10.3461C27.4556 11.8242 27.4722 12.2631 27.4722 16.0028C27.4722 19.7424 27.4556 20.1814 27.3889 21.6595C27.3278 23.0264 27.1 23.7654 26.9056 24.26C26.65 24.9157 26.35 25.3824 25.8611 25.8714C25.3722 26.3604 24.9056 26.666 24.25 26.9161C23.7556 27.105 23.0167 27.3384 21.65 27.3995C20.1722 27.4662 19.7333 27.4828 15.9944 27.4828C12.2556 27.4828 11.8167 27.4662 10.3389 27.3995C8.97222 27.3384 8.23333 27.1105 7.73889 26.9161C7.08333 26.6604 6.61667 26.3604 6.12778 25.8714C5.63889 25.3824 5.33333 24.9157 5.08333 24.26C4.89444 23.7654 4.66111 23.0264 4.6 21.6595C4.53333 20.1814 4.51667 19.7424 4.51667 16.0028C4.51667 12.2631 4.53333 11.8242 4.6 10.3461C4.66111 8.97916 4.88889 8.24013 5.08333 7.74558C5.33889 7.0899 5.63889 6.62314 6.12778 6.13415C6.61667 5.64517 7.08333 5.33955 7.73889 5.0895C8.23333 4.90058 8.97222 4.6672 10.3389 4.60607C11.8167 4.53384 12.2611 4.52272 15.9944 4.52272ZM15.9944 2C12.1944 2 11.7167 2.01667 10.2222 2.08335C8.73333 2.15003 7.71667 2.38897 6.82778 2.73348C5.90556 3.08911 5.12778 3.57253 4.35 4.35047C3.57222 5.1284 3.09444 5.91189 2.73333 6.82874C2.38889 7.7178 2.15 8.73467 2.08333 10.2294C2.01667 11.7186 2 12.1965 2 15.9972C2 19.798 2.01667 20.2758 2.08333 21.7706C2.15 23.2598 2.38889 24.2766 2.73333 25.1713C3.08889 26.0937 3.57222 26.8716 4.35 27.6495C5.12778 28.4275 5.91111 28.9053 6.82778 29.2665C7.71667 29.611 8.73333 29.85 10.2278 29.9167C11.7222 29.9833 12.1944 30 16 30C19.8056 30 20.2778 29.9833 21.7722 29.9167C23.2611 29.85 24.2778 29.611 25.1722 29.2665C26.0944 28.9109 26.8722 28.4275 27.65 27.6495C28.4278 26.8716 28.9056 26.0881 29.2667 25.1713C29.6111 24.2822 29.85 23.2653 29.9167 21.7706C29.9833 20.2758 30 19.8035 30 15.9972C30 12.1909 29.9833 11.7186 29.9167 10.2239C29.85 8.73467 29.6111 7.7178 29.2667 6.82318C28.9111 5.90077 28.4278 5.12284 27.65 4.34491C26.8722 3.56698 26.0889 3.08911 25.1722 2.72792C24.2833 2.38341 23.2667 2.14447 21.7722 2.07779C20.2722 2.01667 19.7944 2 15.9944 2Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M16.0001 8.81372C12.0319 8.81372 8.80835 12.0317 8.80835 16.0055C8.80835 19.9793 12.0263 23.1972 16.0001 23.1972C19.9739 23.1972 23.1918 19.9793 23.1918 16.0055C23.1918 12.0317 19.9739 8.81372 16.0001 8.81372ZM16.0001 20.6684C13.4213 20.6684 11.3316 18.5787 11.3316 15.9999C11.3316 13.4211 13.4213 11.3314 16.0001 11.3314C18.5789 11.3314 20.6686 13.4211 20.6686 15.9999C20.6686 18.5787 18.5789 20.6684 16.0001 20.6684Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M23.4753 10.2033C24.4023 10.2033 25.1538 9.45186 25.1538 8.52488C25.1538 7.5979 24.4023 6.84644 23.4753 6.84644C22.5483 6.84644 21.7969 7.5979 21.7969 8.52488C21.7969 9.45186 22.5483 10.2033 23.4753 10.2033Z'
                  fill='currentColor'
                ></path>
              </svg>
            </svg-icon>
          </a>
          <a href='https://www.youtube.com/c/OSNplus'>
            <svg-icon
              _ngcontent-jwe-c85=''
              role='img'
              aria-hidden='true'
              size='lg'
              key='youtube'
              _nghost-jwe-c41=''
              aria-label='youtube-icon'
              class='svg-icon-youtube'
            >
              <svg
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                fit=''
                height='100%'
                width='100%'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M28.5205 5.67294C29.8911 6.03529 30.9719 7.09647 31.3409 8.44235C32.0262 10.9012 31.9999 16.0259 31.9999 16.0259C31.9999 16.0259 31.9999 21.1247 31.3409 23.5835C30.9719 24.9294 29.8911 25.9906 28.5205 26.3529C26.0164 27 15.9999 27 15.9999 27C15.9999 27 6.00986 27 3.47939 26.3271C2.10872 25.9647 1.028 24.9035 0.658976 23.5576C0 21.1247 0 16 0 16C0 16 0 10.9012 0.658976 8.44235C1.028 7.09647 2.13508 6.00941 3.47939 5.64706C5.9835 5 15.9999 5 15.9999 5C15.9999 5 26.0164 5 28.5205 5.67294ZM21 16L13 11V21L21 16Z'
                  fill='currentColor'
                ></path>
              </svg>
            </svg-icon>
          </a>
          <a href='https://www.tiktok.com/@osnplus'>
            <svg-icon
              _ngcontent-jwe-c85=''
              role='img'
              aria-hidden='true'
              size='lg'
              key='tiktok'
              _nghost-jwe-c41=''
              aria-label='tiktok-icon'
              class='svg-icon-tiktok'
            >
              <svg
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                fit=''
                height='100%'
                width='100%'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <path
                  d='M27.9871 9.01082C26.4257 9.01082 24.9851 8.48062 23.8282 7.5862C22.5014 6.56087 21.5481 5.05683 21.2115 3.32329C21.1281 2.89497 21.0832 2.45296 21.079 2H16.6187V14.4924L16.6133 21.3351C16.6133 23.1645 15.4511 24.7156 13.84 25.2611C13.3725 25.4194 12.8675 25.4945 12.3417 25.4649C11.6705 25.4271 11.0416 25.2195 10.495 24.8843C9.33166 24.1712 8.54295 22.8774 8.52158 21.3975C8.48791 19.0845 10.3122 17.1987 12.5672 17.1987C13.0123 17.1987 13.4398 17.2732 13.84 17.4085V13.994V12.7665C13.4179 12.7025 12.9883 12.669 12.5538 12.669C10.0856 12.669 7.77722 13.7207 6.12713 15.6152C4.87994 17.047 4.13184 18.8736 4.01642 20.789C3.8652 23.3052 4.76345 25.6971 6.50545 27.4619C6.76141 27.7209 7.03019 27.9614 7.31126 28.1832C8.80479 29.3614 10.6307 30 12.5538 30C12.9883 30 13.4179 29.9671 13.84 29.9031C15.6365 29.6303 17.2941 28.7873 18.6022 27.4619C20.2096 25.8335 21.0977 23.6716 21.1073 21.3707L21.0843 11.1524C21.8511 11.7587 22.6895 12.2604 23.5894 12.6499C24.9888 13.2551 26.4727 13.5618 27.9999 13.5613V10.2415V9.00972C28.001 9.01082 27.9882 9.01082 27.9871 9.01082Z'
                  fill='currentColor'
                ></path>
              </svg>
            </svg-icon>
          </a>
        </div>
        <div className='download'>
          <img src='images/app-store-badge.svg' alt='' />
          <img src='images/google-play-badge.svg' alt='' />
        </div>
        <p className='reserved'>Gulf DTH FZ LLC 2022. All rights reserved</p>
        <p className='contact'>
          Contact us: <span>‎0097142473534</span>{' '}
        </p>
      </section>
    </footer>
  )
}
