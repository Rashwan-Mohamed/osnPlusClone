import { data } from './data.js'
import Swiper from './swiper.js'
import Wiber from './Sniper.js'

export const Slider = ({ isOkay, isPhone }) => {
  console.log(isOkay, 'okay')
  // const swiper = useSwiper()
  return (
    <section className='third'>
      <div className='smart'>
        <h1>TRENDING NOW</h1>
        <div className='unlt unlt2'></div>
        <p>Check the most popular TV series and movies</p>
        <button className='bld my'>START MY FREE TRIAL</button>
      </div>

      <div className='clever'>
        {isOkay ? (
          <Wiber isPhone={isPhone} data={data.slider_img} />
        ) : (
          <Swiper data={data.slider_img} />
        )}

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
  )
}
