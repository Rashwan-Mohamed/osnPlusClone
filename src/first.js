import React, { useState, useEffect, useRef } from 'react'

export const First = ({ isOkay }) => {
  const [isDragging, setIsDragging] = useState(false)
  const startPos = useRef(0)
  const currentPosition = useRef(0)
  const currentIndex = useRef(0)
  const [change, setChange] = useState(1)
  const currentTranslate = useRef(0)
  const prevPosition = useRef(0)
  const prevTranslate = useRef(0)
  const requestRef = useRef()
  const pare = useRef(null)
  if (isOkay) {
    let meod = pare.current.children[0]
  }
  let det = [
    {
      head: ' EPIC  ENTERTAINMENT',
      id: 1,
      para: 'From HBO, Paramount+, NBC/Universal, OSN+ Originals and more',
    },
    { head: 'GREAT  VALUE', id: 2, para: 'Just 9.5 USD/month' },
    {
      head: 'NEW CONTENT  EVERY DAY',
      id: 3,
      para: 'New titles & new episodes every 24 hours',
    },
    { head: 'NO  COMMITMENT', id: 4, para: 'Cancel anytime' },
  ]
  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  }
  const touchStart = (index) => {
    return (event) => {
      setIsDragging(true)
      currentIndex.current = index
      startPos.current = getPositionX(event)
    }
  }
  const touchEnd = () => {
    setIsDragging(false)
    let movedBy = currentTranslate.current - prevTranslate.current

    let peo = pare.current.children[0].children.length

    if (movedBy <= -100 && currentIndex.current < peo - 1) {
      currentIndex.current = currentIndex.current + 1
      moveToNextSlide()
    }
    if (movedBy >= 100 && currentIndex.current > 0) {
      currentIndex.current = currentIndex.current - 1
      moveToNextSlide()
    } else {
      currentTranslate.current = prevTranslate.current
      moveThisSuccer()
    }
  }
  const touchMove = (event) => {
    if (isDragging) {
      currentPosition.current = getPositionX(event)
      currentTranslate.current =
        currentPosition.current - startPos.current + prevTranslate.current
      moveThisSuccer()
    }
  }
  const moveThisSuccer = () => {
    return (pare.current.children[0].style.transform = `translateX(${currentTranslate.current}px)`)
  }

  const moveToNextSlide = () => {
    currentTranslate.current = currentIndex.current * -window.innerWidth
    prevTranslate.current = currentTranslate.current
    moveThisSuccer()
  }
  const handleIncrease = () => {
    setChange((old) => {
      return old + 1
    })
  }

  return (
    <section ref={pare} className='first'>
      {isOkay ? (
        <ul
          className={`${
            isDragging ? 'touch-wrapper grabbing' : 'touch-wrapper'
          }`}
        >
          {det.map((item, index) => {
            const { head, para, id } = item
            return (
              <div
                onMouseDown={touchStart(index)}
                onMouseUp={touchEnd}
                onMouseMove={touchMove}
                onMouseLeave={touchEnd}
                onTouchStart={touchStart(index)}
                onTouchEnd={touchEnd}
                onTouchMove={touchMove}
                className='piece'
                key={id}
              >
                <h3>{head}</h3>
                <div className='unlt'></div>
                <p>{para}</p>
              </div>
            )
          })}
        </ul>
      ) : (
        <ul>
          <h3>
            EPIC <br /> ENTERTAINMENT
          </h3>
          <div className='unlt'></div>
          <p>From HBO, Paramount+, NBC/Universal, OSN+ Originals and more</p>
          <h3>
            GREAT <br /> VALUE
          </h3>{' '}
          <div className='unlt'></div>
          <p>Just 9.5 USD/month</p>
          <h3>
            NEW CONTENT <br /> EVERY DAY
          </h3>{' '}
          <div className='unlt'></div>
          <p>New titles & new episodes every 24 hours</p>
          <h3>
            NO <br /> COMMITMENT
          </h3>
          <div className='unlt'></div>
          <p>Cancel anytime</p>
        </ul>
      )}
      {isOkay && (
        <div className='paginton'>
          {det.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  currentIndex.current = index
                  moveToNextSlide()
                  handleIncrease()
                }}
                className='iser'
              >
                <div
                  className={`${
                    currentIndex.current === index ? 'circle' : 'undefined'
                  }`}
                ></div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
