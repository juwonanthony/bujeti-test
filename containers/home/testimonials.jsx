import Image from 'next/image'
import React, { useState } from 'react'
import { chevron_left, chevron_right, partner_svg, raap_logo, voltron_svg } from 'assets/icons'
import { olumide, CardPhone, raap, raap_lady } from 'assets/image'
import { SmallHeading } from 'components/index'
import parse from 'html-react-parser'
import SwiperCore, { Controller, Autoplay, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// import required modules
import { Pagination } from 'swiper'
import HTMLReactParser from 'html-react-parser'
const Testi = [
  {
    name: 'Olumide Soyombo',
    postion: 'Co-Founder, Voltron Capital',
    logo: voltron_svg,
    para: `Since we started using Bujeti, we’ve had peace of mind.
    <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>`,
    imgSrc: olumide,
  },
  {
    name: 'Anthony Daniel',
    postion: 'Co-Founder, Voltron Capital',
    logo: raap_logo,
    para: `The magic is to using Bujeti, we’ve had peace of mind.
    <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>`,
    imgSrc: raap_lady,
  },
  {
    name: 'Olabisi Samson',
    postion: 'Co-Founder, Voltron Capital',
    logo: voltron_svg,
    para: `Since we started using Bujeti, we’ve had peace of mind.
    <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>`,
    imgSrc: raap,
  },
  {
    name: 'Olumide Mani',
    postion: 'Co-Founder, Voltron Capital',
    logo: voltron_svg,
    para: `Since we started using Bujeti, we’ve had peace of mind.
    <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>`,
    imgSrc: olumide,
  },
  {
    name: 'Olumide Joe',
    postion: 'Co-Founder, Voltron Capital',
    logo: raap_logo,
    para: `Since we started using Bujeti, we’ve had peace of mind.
    <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>`,
    imgSrc: raap_lady,
  },
]

const Testimonials = ({ testimonials }) => {
  const [controlledSwiper, setControlledSwiper] = useState(0)
  SwiperCore.use([Autoplay])
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

  const {
    header = '',
    header_icon: { filename: icon } = {},
    title = '',
    testimony = [],
  } = testimonials || {}

  let changeText = testimony[controlledSwiper]

  const {
    logo: { filename: logo },
    name,
    position,
    text,
  } = changeText

  return (
    <section className="container mx-auto flex flex-col px-5 py-16 md:py-37 lg:py-37">
      <div className="mb-4 space-y-3 md:mb-20 lg:mb-20">
        <SmallHeading svg={icon} title={header} color="#D28B28" />
        <h1 className="text-3xl font-semibold text-accent-gray md:text-5xl lg:text-5xl">
          {HTMLReactParser(title)}
        </h1>
      </div>

      <div className="relative grid items-center overflow-hidden rounded-3xl bg-[#FBF5EC] md:grid-cols-2">
        {/* <div className="min-h-full w-full"> */}
        <Swiper
          {...params}
          controller={{ control: controlledSwiper }}
          onSlideChange={(e) => setControlledSwiper(e.realIndex)}
          className="flex items-center"
          // effect="fade"
        >
          {testimony.map(({ image: { filename: image } }, i) => (
            <SwiperSlide key={i}>
              <Image
                src={image}
                alt=""
                fill
                className="static h-fit w-full max-w-xl rounded-t-3xl object-cover md:rounded-none md:rounded-l-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col justify-between py-7 px-4 leading-normal md:py-20 md:pr-28 lg:py-20 lg:pr-28">
          {/* <Image src={changeText.logo} alt="" className="mb-10" /> */}
          <div className="relative mb-10 aspect-[4/1] h-[45px] w-fit shrink-0 overflow-hidden">
            <Image fill objectFit="contain" src={logo} alt="logo" className="w-full" />
          </div>
          {/* <div className="relative mb-10 aspect-square h-[40px] w-full shrink-0 ">
            <Image fill objectFit="contain" src={logo} alt="logo" className="h-full w-full" />
          </div> */}

          <h5 className="text-base font-semibold leading-tight tracking-tighter text-accent-gray md:text-[42px] lg:text-[42px]">
            {parse(text)}
          </h5>
          <div className="my-8">
            <p className="mb-3 font-semibold text-gray-800 ">
              {name} <br /> <span className="mt-2 font-normal">{position}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Image
              src={chevron_left}
              alt=""
              className="image-swiper-button-prev  swiper-button-disabled flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black p-2"
            />
            <Image
              src={chevron_right}
              alt=""
              className="image-swiper-button-next swiper-button-disabled flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black p-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
