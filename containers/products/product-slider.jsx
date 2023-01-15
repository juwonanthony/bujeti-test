import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { chevron_left, chevron_right, raap_logo, voltron_svg } from 'assets/icons'
import { olumide, raap, raap_lady, ProductSliderItem1 } from 'assets/image'
import SwiperCore, { Controller, Autoplay, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// import required modules
import { Pagination } from 'swiper'
const products = [
  {
    name: 'Olumide Soyombo',
    postion: 'Co-Founder, Voltron Capital',
    logo: voltron_svg,
    title: `Fully control & automate your business expenses.`,
    body: `Boost your finance teams by providing a powerful decision support tool.`,
    imgSrc: ProductSliderItem1,
    feature: 'Corporate Cards',
  },
  {
    name: 'Anthony Daniel',
    postion: 'Co-Founder, Voltron Capital',
    logo: raap_logo,
    title: `Reimbursement for your business expenses.`,
    body: `Boost your finance teams by providing a powerful decision support tool.`,
    imgSrc: raap_lady,
    feature: 'Reimbursement',
  },
  {
    name: 'Olabisi Samson',
    postion: 'Co-Founder, Voltron Capital',
    logo: voltron_svg,
    title: `Credit Card to automate your business expenses.`,
    body: `Boost your finance teams by providing a powerful decision support tool.`,
    imgSrc: raap,
    feature: 'Bank Transfer payments',
  },
  {
    name: 'Olumide Mani',
    postion: 'Co-Founder, Voltron Capital',
    logo: voltron_svg,
    title: `Fully control & automate your business expenses.`,
    body: `Boost your finance teams by providing a powerful decision support tool.`,
    imgSrc: olumide,
    feature: 'Reporting and Insights',
  },

  {
    name: 'Olumide Joe',
    postion: 'Co-Founder, Voltron Capital',
    logo: raap_logo,
    title: `Fully control & automate your business expenses.`,
    body: `Boost your finance teams by providing a powerful decision support tool.`,
    imgSrc: raap_lady,
    feature: 'Transactions Approval',
  },
]

const ProductSlider = () => {
  const [count, setCount] = useState(0)
  const [controlledSwiper, setControlledSwiper] = useState(0)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  let changeText = products[controlledSwiper]
  SwiperCore.use([Autoplay])
  const swiperRef = useRef(null)

  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    modules: [Pagination, Controller, EffectFade, Navigation],
    effect: 'fade',
    navigation: {
      nextEl: '.image-swiper-button-next',
      prevEl: '.image-swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
    },
  }

  const startTimer = () => {
    setInterval(() => {
      if (count === 105) {
        clearInterval()
        setCount(0)
        swiperRef.current.swiper.slideNext()
      } else {
        setCount(count + 5)
      }
    }, 1000)
  }

  useEffect(() => {
    if (count === 105) {
      clearInterval()
      setCount(0)
    } else {
      startTimer()
    }
  }, [count])

  return (
    <div>
      <div className="product-features-name mb-20 flex gap-[20px]">
        {products.map((product, i) => {
          return (
            <span
              key={i}
              className={`${
                i === controlledSwiper ? 'text-accent-orange' : 'text-grey-warm-400'
              } image-swiper-button-next cursor-pointer text-xl`}
            >
              {product.feature}
            </span>
          )
        })}
      </div>
      <div className="relative grid overflow-hidden rounded-3xl md:grid-cols-2">
        {/* <div className="min-h-full w-full"> */}
        <div className="flex flex-col pr-20">
          <h5 className="text-[48px] font-semibold text-accent-gray">{changeText.title}</h5>
          <p className="text-[40px] text-support">{changeText.body}</p>
          <div className="flex items-center pt-7 pb-20">
            <Link className="text-2xl" href="/">
              Discover more
            </Link>
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15H25M25 15L17.5 7.5M25 15L17.5 22.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="flex gap-4">
            <Image
              src={chevron_left}
              alt=""
              className="image-swiper-button-prev  swiper-button-disabled flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black p-2"
            />
            <Image
              src={chevron_right}
              alt=""
              className="image-swiper-button-next swiper-button-disabled flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black p-2"
            />
          </div>
          <div className="mt-[60px] h-[2px] w-full bg-grey-semi">
            <div
              className="progress h-[2px] overflow-hidden bg-black"
              style={{ width: `${count}%` }}
            ></div>
          </div>
        </div>
        <Swiper
          {...params}
          controller={{ control: controlledSwiper }}
          onSlideChange={(e) => {
            setControlledSwiper(e.realIndex)
          }}
          className="flex items-center"
          // effect="fade"
          ref={swiperRef}
        >
          {products.map((items, i) => (
            <SwiperSlide key={i}>
              <Image
                src={items.imgSrc}
                alt=""
                className="static h-[560px] w-full max-w-xl rounded-3xl object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductSlider
