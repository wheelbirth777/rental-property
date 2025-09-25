import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";

const Team = () => {
  return (
    <div>
      <BreadCrumb title="our team" />
      {/* Content */}

      {/* Expert Members */}
      <div className="dark:bg-normalBlack py-20 2xl:py-[120px]">
        <div className="Container">
          <div className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 Container">
            {/* Section logo */}
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
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
              Meet Our Team
            </h1>
            <p className="font-Lora leading-7 lg:leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              We are proud to introduce the talented individuals who bring their
              expertise and passion to every project. Our diverse team of
              professionals is committed to delivering outstanding results and
              innovative solutions to help you succeed.
            </p>
          </div>

          {/* Section Content */}
          <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-[30px] ">
            {/* Member one */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/inner/member-1.jpg"
                className="w-full"
                alt=""
                width={500}
                height={500}
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    Jean D. Smith
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
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* Member two */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/inner/member-2.jpg"
                className="w-full"
                alt=""
                width={500}
                height={500}
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    Mery D. Lin
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
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* Member three */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/inner/member-3.jpg"
                className="w-full"
                alt=""
                width={500}
                height={500}
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    Mike B. Parker
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
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* Member four */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/inner/member-5.jpg"
                className="w-full"
                alt=""
                width={500}
                height={500}
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    James B. Colby
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    Chef
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
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* Member five */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/inner/member-4.jpg"
                className="w-full"
                alt=""
                width={500}
                height={500}
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    Benny H. Limar
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    Sous Chef
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
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* Member six */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Image
                src="/images/inner/member-6.jpg"
                className="w-full"
                alt=""
                width={500}
                height={500}
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    Denny R. Roman
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    Supervisor
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
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
