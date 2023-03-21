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

const ProductSlider = ({ products }) => {
  const [count, setCount] = useState(0)
  const [controlledSwiper, setControlledSwiper] = useState(0)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  let changeText = products[controlledSwiper]

  const { description, image, link, main_link_label, sub_link, sub_link_label, title } =
    changeText || {}

  SwiperCore.use([Autoplay])
  const swiperRef = useRef(null)

  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    modules: [Pagination, Controller, EffectFade, Navigation],
    effect: 'fade',
    navigation: {
      nextEl: '.image-swiper-button-next',
      prevEl: '.image-swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
    },
  }

  const [startInterval, setStartInterval] = useState(0)

  useEffect(() => {
    if (count === 105) {
      setCount(0)
      setStartInterval((add) => add + 1)
      swiperRef.current.swiper.slideNext()
    }
  }, [count])

  const interval = useRef(null)
  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 80)
    return () => {
      clearInterval(interval.current)
    }
  }, [startInterval])

  const clickSwipe = (index) => {
    swiperRef.current.swiper.slideTo(index)
    // setCount(0)
  }

  const featuresRef = useRef()

  return (
    <div>
      <div
        className="product-features-name scrollbar-hide relative mb-8 flex max-w-7xl gap-[20px] overflow-x-scroll md:mb-20 lg:mb-20"
        ref={featuresRef}
      >
        {products.map((product, i) => {
          return (
            <span
              key={i}
              onClick={() => {
                clickSwipe(i + 1)
              }}
              className={`${
                i === controlledSwiper ? 'text-accent-orange' : 'text-grey-warm-400'
              } cursor-pointer whitespace-nowrap md:text-xl lg:text-xl`}
            >
              {product.title}
            </span>
          )
        })}
        <div className="absolute right-0 hidden h-full w-full max-w-[400px] bg-gradient-to-r from-transparent via-white to-white  md:flex lg:flex" />
      </div>
      <div className="relative grid overflow-hidden md:grid-cols-2 md:rounded-none">
        {/* <div className="min-h-full w-full"> */}
        <div className="flex flex-col justify-center md:pr-20 lg:pr-20">
          <h5 className="mb-6 text-2xl font-semibold text-accent-gray md:text-5xl lg:text-5xl">
            {title}
          </h5>
          <p className="text-2xl text-support md:text-4xl lg:text-4xl">{description}</p>
          <div className="flex items-center pt-7 pb-10 md:pb-20">
            <Link className="text-lg md:text-2xl lg:text-2xl" href="/">
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
          <div className="hidden gap-4 md:flex">
            <Image
              src={chevron_left}
              alt=""
              className="image-swiper-button-prev flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black p-2"
            />
            <Image
              src={chevron_right}
              alt=""
              className="image-swiper-button-next flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black p-2"
            />
          </div>
          <div className="mt-[60px] hidden h-[2px] w-full bg-grey-semi md:block">
            <div
              className="progress h-[2px] overflow-hidden bg-black"
              style={{ width: `${count}%`, transition: 'width .5s ease' }}
            ></div>
          </div>
        </div>
        <Swiper
          {...params}
          controller={{ control: controlledSwiper }}
          onSlideChange={(e) => {
            setControlledSwiper(e.realIndex)
            setCount(0)
          }}
          className="product-slide flex items-center"
          // effect="fade"
          ref={swiperRef}
        >
          {products.map(({ image: { filename } }, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-square h-full  w-full shrink-0 rounded-3xl md:w-10/12">
                <Image
                  fill
                  objectFit="contain"
                  src={filename}
                  alt="Bujeti dashboard"
                  className="h-full w-full rounded-3xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-6 flex gap-4 md:hidden">
          <Image
            src={chevron_left}
            alt=""
            className="image-swiper-button-prev flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black p-2"
          />
          <Image
            src={chevron_right}
            alt=""
            className="image-swiper-button-next flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black p-2"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductSlider
//  max-w-xl
