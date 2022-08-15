import { Swiper, SwiperSlide } from 'swiper/react'
// import { data } from './data.js'
import { Autoplay, Navigation, Virtual, EffectCoverflow } from 'swiper'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import 'swiper/css/virtual'
import 'swiper/css/navigation'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data, isOkay }) => {
  //   const swiper = useSwiper()

  return (
    <Swiper
      modules={[Autoplay, Navigation, Virtual, EffectCoverflow]}
      spaceBetween={50}
      loop={true}
      effect={'coverflow'}
      slidesPerView={3}
      centeredSlides={true}
      initialSlide={2}
      navigation={{
        nextEl: '.left',
        prevEl: '.right',
      }}
      coverflowEffect={{
        rotate: 0,
        slideShadows: false,
        // depth: 100,
        modifier: 1 ,
      }}
      autoplay={{
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        delay: 4000,
      }}
      className='desktop-swiper'
    >
      {data.map((item, imgIndex) => {
        const { max, mm1366, mm1024, mm768, min, normal } = item
        return (
          <SwiperSlide virtualIndex={imgIndex} key={imgIndex}>
            <picture>
              <source srcSet={max} media='(min-width:1920px)' />
              <source
                srcSet={mm1366}
                media='(min-width:1366px) and (max-width:1919px)'
              />
              <source
                srcSet={mm1024}
                media='(min-width:1024px) and (max-width:1365px)'
              />
              <source
                srcSet={mm768}
                media='(min-width:768px) and (max-width:1023px)'
              />
              <source srcSet={min} media='(max-width:767px)' />

              <img src={normal} alt='' />
            </picture>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
