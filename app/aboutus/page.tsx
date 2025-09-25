"use client";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import { BsPlay, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { useState } from "react";

// import "../../Components4/Testimonial/testimonials.css";

import FsLightbox from "fslightbox-react";
import Image from "next/image";
const About = () => {
  // const [setLoaded] = useState(false);
  const [toggler, setToggler] = useState(false);

  return (
    <section className="">
      <BreadCrumb title="About Us" />

      {/* about content */}
      <div className=" bg-lightBlack ">
        <section className="">
          <div className="Container relative  top-[-75px] shadow-lg  py-20 2xl:py-[120px] sm:overflow-hidden lg:overflow-auto dark:bg-mediumBlack">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* image */}
              <div className="flex-1">
                <Image
                  src="/images/inner/about-thumb.webp"
                  width={0}
                  height={0}
                  sizes="535px"
                  className="w-full"
                  alt=""
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                />
              </div>

              {/* text */}
              <div
                className="mt-10 md:mt-0 md:ml-10 lg:ml-[90px] 2xl:ml-[100px] font-Garamond space-y-3 xl:space-y-4 flex-1"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h5 className="text-base text-khaki leading-[26px] font-medium">
                  LUXURY HOTEL & RESORT
                </h5>
                <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
                  Experience Unparalleled Elegance at the Chateau
                </h1>
                <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                  Step into a world of sophistication and indulgence at the
                  Chateau, where luxury meets comfort in every corner. Nestled
                  in the heart of Las Vegas, our five-star sanctuary offers a
                  perfect blend of modern opulence and timeless charm. Each of
                  our spacious, exquisitely designed rooms and suites boasts
                  stunning views, plush furnishings, and state-of-the-art
                  amenities, ensuring the utmost in relaxation and convenience.
                </p>

                <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px] mt-5">
                  Whether you’re seeking a romantic getaway, a corporate
                  retreat, or a memorable vacation, The Chateau promises an
                  extraordinary experience that will leave you enchanted.
                </p>

                <div className="bg-whiteSmoke dark:bg-lightBlack px-[30px] py-5">
                  <p className="text-sm sm:text-base leading-10 3xl:leading-[50px] text-lightBlack dark:text-white font-medium font-Lora ">
                    9331, Monarch Street
                  </p>
                  <p className="text-sm sm:text-base leading-10  text-lightBlack dark:text-white font-medium font-Lora ">
                    Las Vegas, Nevada 89139
                  </p>
                </div>
                <button className="btn-primary mt-[30px]">MORE ABOUT</button>
              </div>

              {/* text */}
            </div>
          </div>
        </section>
      </div>
      {/* Hostel Facilities */}
      {/* next --> */}

      {/* best hotel manager */}
      <div className="bg-lightBlack -z-[1] py-20 2xl:py-[120px] shadow-lg">
        <div className="Container ">
          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
            <div className="flex-1 h-[100%] w-full relative ">
              <div className="flex-1 h-[100%] w-full relative ">
                <Image
                  src="/images/home-1/action-img.webp"
                  width={0}
                  height={0}
                  sizes="580px"
                  className="w-full h-full object-cover"
                  alt=""
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                />

                <div
                  className="w-[70px] h-[70px]  text-white absolute top-1/2 md:top-[35%] lg:top-1/2 left-[45%] bg-khaki rounded-full flex items-center justify-center cursor-pointer z-[1] "
                  onClick={() => setToggler(!toggler)}
                >
                  <BsPlay className="w-8 h-8" />
                </div>
                <span className=" top-[47%] md:top-[33%] lg:top-[48%] left-[42%] lg:left-[43.5%] border w-[90px] h-[90px] rounded-full absolute border-white video-animation"></span>
              </div>
              <FsLightbox
                toggler={toggler}
                sources={["https://youtu.be/fFDyoI73viQ?si=GbDzAagjoa_0Nv2x"]}
              />
            </div>
            <div className="bg-[#f8f6f3] dark:bg-normalBlack space-y-5 flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]">
              <h5 className="text-base text-khaki leading-[26px] font-semibold">
                LUXURY HOTEL & RESORT
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
                The Chateau, where Timeless Elegance Meets Modern Luxury
              </h1>
              <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                Step into a world of sophistication and indulgence at the
                Chateau, where luxury meets comfort in every corner. Nestled in
                the heart of Las Vegas, our five-star sanctuary offers a perfect
                blend of modern opulence and timeless charm. Each of our
                spacious, exquisitely designed rooms and suites boasts stunning
                views, plush furnishings, and state-of-the-art amenities,
                ensuring the utmost in relaxation and convenience.
              </p>

              <div className="flex items-center space-x-6 pt-5">
                <div className="">
                  <h4 className="text-lg sm:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                    Jaine A. Smith
                  </h4>
                  <p className="pt-1 text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center font-Lora">
                    <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                    Manger
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Members */}
      <div className="dark:bg-normalBlack py-20 2xl:py-[120px]">
        <div className="Container">
          {/* section header */}
          <div className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 Container">
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2"></div>
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
              Meet the Heart of The Chateau: Our Dedicated Team
            </h1>
            <p className="font-Lora leading-7 lg:leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              Led by seasoned hospitality professionals, our team is passionate
              about creating a personalized and memorable experience for each
              guest. Whether you’re interacting with our attentive concierge,
              skilled chefs, or expert spa therapists, you’ll experience the
              perfect balance of warmth, professionalism, and attention to
              detail.
            </p>
          </div>

          {/* Section Content */}
          <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
            {/* Member one */}
            <div className="member group">
              <Image
                src="/images/inner/member-1.webp"
                width={0}
                height={0}
                sizes="315px"
                className="w-full"
                alt=""
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    Jaine A. Smith
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    General Manager
                  </p>
                </div>
                <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                 duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    jaine@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* Member two */}
            <div className="member group">
              <Image
                src="/images/inner/member-2.webp"
                width={0}
                height={0}
                sizes="315px"
                className="w-full"
                alt=""
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    Anna D. Young
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    Product Manager
                  </p>
                </div>
                <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                 duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    anna@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* Member three */}
            <div className="member group">
              <Image
                src="/images/inner/member-3.webp"
                width={0}
                height={0}
                sizes="315px"
                className="w-full"
                alt=""
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    Jonathan S. Brown
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    General Manager
                  </p>
                </div>
                <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                 duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    Jonathan@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
