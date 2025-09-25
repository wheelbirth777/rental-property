"use client";
import { FaStar } from "react-icons/fa";

import Link from "next/link";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContactUs from "@/components/ContactUs/ContactUs";
import Image from "next/image";

const Rooms = () => {
  // facilities slider breckpoints

  return (
    <section className="">
      <BreadCrumb title="Rooms & Suites" />

      {/* All rooms */}

      <div className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container ">
          {/* section heading */}
          <div
            className=" text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section Logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <Image
                src="/images/home-1/logoHotel2.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
                width={50}
                height={50}
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
              The Chateau’s Rooms & Suites
            </h1>
          </div>
          {/* Rooms Slider Container */}

          <div className="mt-14 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
            {/* Room - 1 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/inner/room-1.jpg"
                    className="w-full h-full object-cover group-group-hover:scale-110 transition-all duration-300"
                    alt=""
                    width={410}
                    height={410}
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$450</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>

                <Link href={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link
                      href="/find_room"
                      //state={{ price: "450", title: "Delux Family Rooms" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Delux Family Rooms
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <Image
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 2 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/inner/room-2.jpg"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                    width={410}
                    height={410}
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$550</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>
                <Link href={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link
                      href="/find_room"
                      // state={{ price: "550", title: "Double Suite Rooms" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Double Suite Rooms
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <Image
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 3 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/inner/room-3.jpg"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                    width={410}
                    height={410}
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$560</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>
                <Link href={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link
                      href="/find_room"
                      //  state={{ price: "560", title: "Suprior Bed Rooms" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Suprior Bed Rooms
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <Image
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 4 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/inner/room-4.jpg"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                    width={410}
                    height={410}
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$480</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>
                <Link href={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link
                      href="/find_room"
                      // state={{ price: "480", title: "Junior Suite Room" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Junior Suite Room
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <Image
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 5 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/home-1/room-2.jpg"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                    width={410}
                    height={410}
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$520</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>
                <Link href={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link
                      href="/find_room"
                      // state={{ price: "520", title: "Family Suite Room" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Family Suite Room
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <Image
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 6 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <Image
                    src="/images/home-1/room-3.jpg"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                    width={410}
                    height={410}
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$500</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>
                <Link href={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link
                      href="/find_room"
                      // state={{ price: "500", title: "Beautiful Family Rooms" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Beautiful Family Rooms
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <Image
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Facilities */}
      <div className="bg-normalBlack py-20 lg:py-[120px] relative">
        <div className="Container pb-[100px] ">
          {/* Section heading */}
          <div
            className="flex items-center justify-between relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" sapce-y-3 md:space-y-4 lg:space-y-5 md:w-[450px] xl:w-[550px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                LUXURY HOTEL AND RESORT
              </h5>
              <h1 className="text-xl sm:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-white font-semibold uppercase">
                Unparalleled Luxury at Your Fingertips
              </h1>
            </div>
            <div className="hidden sm:flex items-center lg:space-x-5  space-x-3">
              <button
                className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-gray  text-lightGray hover:bg-khaki hover:border-none group"
                title="Button disabled use swapping"
                disabled
              >
                <BsChevronLeft className="w-5 h-5 text-gray  group-hover:text-white " />
              </button>
              <button
                className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-gray  text-lightGray hover:bg-khaki
             hover:border-none group"
                title="Button disabled use swapping"
                disabled
              >
                <BsChevronRight className="w-5 h-5 text-gray   group-hover:text-white" />
              </button>
            </div>
          </div>
          <hr className="w-full h-[2px] text-gray bg-gray mt-10 " />

          {/* Clients Facilities  */}
          <div className="mt-14 2xl:mt-[60px] grid grid-cols-6 gap-5 md:gap-[30px] ">
            <div
              className="col-span-6 sm:col-span-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/inner/faciliies-icon.png"
                alt="facilities-icon"
                className="w-10 h-10 md:w-20 md:h-20 xl:h-[100px] xl:w-[100px]"
                width={100}
                height={100}
              />
              <div className="my-5 2xl:my-[30px]">
                <h2 className="text-white text-xl sm:text-2xl 2xl:text-3xl leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] font-semibold font-Garamond">
                  SPA & GYM Center
                </h2>
                <p className="text-sm sm:text-base font-Lora leading-[26px] text-lightGray">
                  Stay active and energized at our state-of-the-art gym,
                  equipped with the latest in fitness technology. Whether you’re
                  focused on cardio, strength training, or flexibility, our
                  modern facilities cater to every workout need. With
                  personalized training options and top-tier equipment, you’ll
                  have everything required to maintain your fitness routine or
                  try something new, all within a luxurious setting that
                  inspires motivation and well-being.
                </p>
              </div>
              <Link
                href={"/room_details"}
                className="flex items-center text-lightGray text-base font-Garamond font-semibold group hover:text-khaki dark:hover:text-khaki"
              >
                VIEW DETAILS
                <HiArrowLongRight className="w-6 h-5 text-khaki ml-2 group-hover:ml-3 transition-all duration-300" />
              </Link>
            </div>
            {/* facilities slider */}
            <div
              className="keen-slider col-span-6 sm:col-span-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              {/* slide 1 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <Image
                    src="/images/inner/facilities-1.jpg"
                    className="w-full h-full object-cover object-center"
                    alt=""
                    width={200}
                    height={200}
                  />
                  <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Outdoor Pool
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div>
                </div>
              </div>
              {/* slide 2 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <Image
                    src="/images/inner/facilities-2.jpg"
                    className="w-full h-full object-cover object-center"
                    alt=""
                    width={200}
                    height={200}
                  />
                  <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Stay Fit in Style
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div>
                </div>
              </div>
              {/* slide 3 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <Image
                    src="/images/inner/facilities-3.jpg"
                    className="w-full h-full object-cover object-center"
                    alt=""
                    width={200}
                    height={200}
                  />
                  <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Elevate Your Fitness Experience
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      {/* Contact with Us */}
      <div className="">
        <div className="relative  z-[1] mt-[-100px] mb-[100px]">
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default Rooms;
