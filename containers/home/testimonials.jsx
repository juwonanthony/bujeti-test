import Image from 'next/image';
import React, { useState } from 'react';
import { chevron_left, chevron_right, partner_svg, voltron_svg } from '../../assets/icons';
import { olumide, CardPhone } from '../../assets/image';
import { SmallHeading } from '../../components';
import parse from 'html-react-parser';
import SwiperCore, { Controller, Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination } from 'swiper';
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
    logo: voltron_svg,
    para: `The magic is to using Bujeti, we’ve had peace of mind.
    <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>`,
    imgSrc: olumide,
  },
  {
    name: 'Olabisi Samson',
    postion: 'Co-Founder, Voltron Capital',
    logo: voltron_svg,
    para: `Since we started using Bujeti, we’ve had peace of mind.
    <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>`,
    imgSrc: olumide,
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
    logo: voltron_svg,
    para: `Since we started using Bujeti, we’ve had peace of mind.
    <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>`,
    imgSrc: olumide,
  },
];

const Testimonials = () => {
  const [controlledSwiper, setControlledSwiper] = useState(0);
  let changeText = Testi[controlledSwiper];
  SwiperCore.use([Autoplay]);
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
  };
  console.log(controlledSwiper);
  return (
    <section className="container mx-auto flex flex-col px-5 py-24">
      <div className="space-y-3 mb-20">
        <SmallHeading svg={partner_svg} title="Partners" color="#D28B28" />
        <h1 className="text-5xl font-semibold text-gray-900">Here’s what they say {'"'}</h1>
      </div>

      <div className="grid md:grid-cols-2 items-center bg-[#FBF5EC] rounded-3xl">
        {/* <div className="min-h-full w-full"> */}
        <Swiper
          {...params}
          controller={{ control: controlledSwiper }}
          onSlideChange={(e) => setControlledSwiper(e.realIndex)}
          className="flex items-center"
          // effect="fade"
        >
          {Testi.map((items, i) => (
            <SwiperSlide key={i}>
              <Image
                src={items.imgSrc}
                alt=""
                className="object-cover w-full max-w-xl rounded-t-3xl h-full md:rounded-none md:rounded-l-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col justify-between pr-28 py-20 leading-normal">
          <Image src={changeText.logo} alt="" className="mb-10" />

          <h5 className="text-[42px] font-semibold tracking-tighter text-gray-900">{parse(changeText.para)}</h5>
          <div className="my-8">
            <p className="mb-3 font-semibold text-gray-800 ">
              {changeText.name} <br /> <span className="font-normal mt-2">{changeText.postion}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Image
              src={chevron_left}
              alt=""
              className="image-swiper-button-prev  swiper-button-disabled bg-black flex justify-center items-center p-2 h-8 w-8 rounded-full cursor-pointer"
            />
            <Image
              src={chevron_right}
              alt=""
              className="image-swiper-button-next swiper-button-disabled bg-black flex justify-center items-center p-2 h-8 w-8 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
