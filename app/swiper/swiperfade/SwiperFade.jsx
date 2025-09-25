import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  HashNavigation,
  Navigation,
  Scrollbar,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/hash-navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import "./swiper.css";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function SwiperFade() {
  const swiperParameters = {
    modules: [
      A11y,
      Autoplay,
      HashNavigation,
      Navigation,
      Scrollbar,
      EffectFade,
    ],
    loop: true,
    effect: "fade",
    speed: 1200,
    navigation: true,
    autoplay: { enabled: true },
    scrollbar: { draggable: true, hide: false },
    hashNavigation: { enabled: true, watchState: true },
    watchSlidesProgress: true,
    slidesPerGroupAuto: false,
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-a38d" data-hash="slide-1">
          <Image
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b w-full"
            src="/images/home-1/hero-bg.jpg"
            width={0}
            height={0}
            sizes="2000px"
            alt=""
          />

          <div
            className="font-Garamond 2xl:w-[720px] text-center z-10 text-white"
            data-aos="fade-left"
          >
            <div className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
            </div>
            <h4 className="text-base mb-4">The Chateau</h4>
            <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                WHERE EVERY STAY
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] lg:leading-[50px] 2xl:leading-[60px]">
                IS AN UNFORGETABLE ESCAPE
              </h1>
            </div>
            <Link href="/rooms">
              <button
                className="w-[185px] h-[48px] lg:h-[56px  bg-khaki relative -bottom-20  before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
               font-Garamond
                font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase"
              >
                Discover More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d" data-hash="slide-2">
          <Image
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
            src="/images/home-1/hero-bg3.jpg"
            width={0}
            height={0}
            sizes="2000px"
            alt=""
          />

          <div className="font-Garamond 2xl:w-[720px] text-center z-10 text-white">
            <div className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
            </div>
            <h4 className="text-base mb-4">The Chateau</h4>
            <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                THE BEST LUXURY VILLAS
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] lg:leading-[50px] 2xl:leading-[60px]">
                in Las Vegas
              </h1>
            </div>
            <Link href={"/about"}>
              <button
                className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative -bottom-20 before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
               font-Garamond
                font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase"
              >
                Discover More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d" data-hash="slide-3">
          <Image
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
            src="/images/home-1/hero-bg2.jpg"
            width={0}
            height={0}
            sizes="2000px"
            alt=""
          />

          <div className="font-Garamond 2xl:w-[720px] text-center z-10 text-white">
            <div className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
              <FaStar className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
            </div>
            <h4 className="text-base mb-4">The Chateau</h4>
            <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                YOUR DESTINATION
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] lg:leading-[50px] 2xl:leading-[60px]">
                FOR TIMELESS LUXURY
              </h1>
            </div>
            <Link href={"/about"}>
              <button
                className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative  -bottom-20 before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
               font-Garamond
                font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase"
              >
                Discover More
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
