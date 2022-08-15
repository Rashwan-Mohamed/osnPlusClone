import { Slider } from './slider'
import { First } from './first.js' 

import React, { useState, useEffect } from 'react'
export const Main = ({ isOkay, isPhone }) => {
  // const [isOkay, setIsOkay] = useState(false)

  // useEffect(() => {
  //   window.addEventListener('DOMContentLoaded', () => {
  //     setIsOkay(window.innerWidth <= 1024)
  //   })
  //   window.addEventListener('resize', () => {
  //     setIsOkay(window.innerWidth <= 1024)
  //   })

  //   return () => {
  //     window.removeEventListener('resize', () => {
  //       setIsOkay(window.innerWidth <= 1024)
  //     })
  //     window.removeEventListener('DOMContentLoaded', () => {
  //       setIsOkay(window.innerWidth <= 1024)
  //     })
  //   }
  // })

  return (
    <main>
      <First isOkay={isOkay} />
      <section className='second'>
        <div className='smart'>
          <h1>
            1 SUBSCRIPTION. <br /> MULTIPLE DEVICES
          </h1>
          <div className='unlt unlt2'></div>
          <p>From mobiles to Smart TVs</p>
          <button className='bld my'>START MY FREE TRIAL</button>
        </div>
        <picture>
          <source srcSet='./images/middlemin.webp' media='(max-width:767px)' />
          <source
            srcSet='./images/middle768.webp'
            media='(min-width:768px) and (max-width:1023px)'
          />

          <source
            srcSet='./images/middle1024.webp'
            media='(min-width:1024px) and (max-width:1365px)'
          />
          <source
            srcSet='./images/middle1366.png'
            media='(min-width:1366px) and (max-width:1919px)'
          />
          <source srcSet='./images/middlemax.webp' media='(min-width:1920px)' />
          <img src='./images/middledefault.webp' alt='' />
        </picture>
      </section>
      <Slider isPhone={isPhone} isOkay={isOkay} />
      <section className='originals'>
        <div className='line'>
          <h1>FEATURING THE POWER PLAYERS IN ENTERTAINMENT</h1>
          <div className='unlt'></div>
        </div>
        <p>The best new shows from the biggest studios.</p>
        <div className='pictures'>
          <picture>
            <source srcSet='images/hbomax.webp' media='(min-width:1920px)' />
            <source
              srcSet='images/hbo1366.webp'
              media='(min-width:1366px) and (max-width:1920px)'
            />
            <source
              srcSet='images/hbo1024.webp'
              media='(min-width:1024px) and (max-width:1366px)'
            />
            <source
              srcSet='images/hbo768.webp'
              media='(min-width:768px) and (max-width:1024px)'
            />
            <source srcSet='images/hbomin.webp' media='(max-width:768px)' />
            <img src='images/hbodefault.webp' alt='' />
          </picture>
          <picture>
            <source srcSet='images/osnmax.webp' media='(min-width:1920px)' />
            <source
              srcSet='images/osn1366.webp'
              media='(min-width:1366px) and (max-width:1920px)'
            />
            <source
              srcSet='images/osn1024.webp'
              media='(min-width:1024px) and (max-width:1366px)'
            />
            <source
              srcSet='images/osn768.webp'
              media='(min-width:768px) and (max-width:1024px)'
            />
            <source srcSet='images/osnmin.webp' media='(max-width:768px)' />
            <img src='images/osndefault.webp' alt='' />
          </picture>
          <picture>
            <source
              srcSet='images/universalMax.webp'
              media='(min-width:1920px)'
            />
            <source
              srcSet='images/universal1366.webp'
              media='(min-width:1366px) and (max-width:1920px)'
            />
            <source
              srcSet='images/universal1024.webp'
              media='(min-width:1024px) and (max-width:1366px)'
            />
            <source
              srcSet='images/universal768.webp'
              media='(min-width:768px) and (max-width:1024px)'
            />
            <source
              srcSet='images/universalMin.webp'
              media='(max-width:768px)'
            />
            <img src='images/universaldefault.webp' alt='' />
          </picture>
          <picture>
            <source srcSet='images/paraMax.webp' media='(min-width:1920px)' />
            <source
              srcSet='images/para1366.webp'
              media='(min-width:1366px) and (max-width:1920px)'
            />
            <source
              srcSet='images/para1024.webp'
              media='(min-width:1024px) and (max-width:1366px)'
            />
            <source
              srcSet='images/para768.webp'
              media='(min-width:768px) and (max-width:1024px)'
            />
            <source srcSet='images/paramin.webp' media='(max-width:768px)' />
            <img src='images/paramountDefault.webp' alt='' />
          </picture>
        </div>
        <button className='bld my'>START MY FREE TRIAL </button>
      </section>

      <section className='family'>
        <div className='boss'>
          <img src='images/boss.webp' alt='' />
          <img src='images/sponge.webp' alt='' />
          <img src='images/loud.webp' alt='' />
          <img src='images/cocomelon.webp' alt='' />
          <img src='images/harry.webp' alt='' />
          <img src='images/kong.webp' alt='' />
        </div>
        <div className='line scroll'>
          <h1>#1 IN KIDS & FAMILY CONTENT</h1>
          <div className='unlt'></div>
          <p>The titles they want, the safety you demand.</p>
          <div className='alignit'>
            <picture>
              <source
                srcSet='images/parentalmax.webp'
                media='(min-width:1920px)'
              />
              <source
                srcSet='images/parental1366.webp'
                media='(min-width:1366px) and (max-width:1920px)'
              />
              <source
                srcSet='images/parental1024.webp'
                media='(min-width:1024px) and (max-width:1366px)'
              />
              <source
                srcSet='images/parental768.webp'
                media='(min-width:768px) and (max-width:1024px)'
              />
              <source
                srcSet='images/parentalmin.webp'
                media='(max-width:768px)'
              />
              <img src='images/parentaldefault.webp' alt='' />
            </picture>
            <h3>Parental Control & Lock</h3>
            <picture>
              <source srcSet='images/kidsmax.webp' media='(min-width:1920px)' />
              <source
                srcSet='images/kids1366.webp'
                media='(min-width:1366px) and (max-width:1920px)'
              />
              <source
                srcSet='images/kids1024.webp'
                media='(min-width:1024px) and (max-width:1366px)'
              />
              <source
                srcSet='images/kids768.webp'
                media='(min-width:768px) and (max-width:1024px)'
              />
              <source srcSet='images/kidsmin.webp' media='(max-width:768px)' />
              <img src='images/kidsdefault.webp' alt='' />
            </picture>
            <h3>Kids Mode Profile</h3>
          </div>
          <button className='bld my'>START MY FREE TRIAL</button>
        </div>
        <div className='paw'>
          {' '}
          <img src='images/paw.webp' alt='' />
          <img src='images/croods.jpg' alt='' />
          <img src='images/addams.jpg' alt='' />
          <img src='images/sing.webp' alt='' />
          <img src='images/rumble.jpg' alt='' />
          <img src='images/pets.webp' alt='' />
        </div>
      </section>
    </main>
  )
}
