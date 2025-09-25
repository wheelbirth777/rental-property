import { BsPlay } from "react-icons/bs";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
const Action = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="dark:bg-mediumBlack dark:z-[-1] overflow-hidden">
      <section className="Container mt-[-90px] dark:z-[1]">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div
            className="bg-[#f8f6f3] dark:bg-normalBlack space-y-[14px] flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5 className="text-base text-khaki leading-[26px] font-semibold">
              LUXURY HOTEL AND RESORT
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
              LUXURY BEST HOTEL IN CITY CALIFORNIA, USA
            </h1>
            <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
              Nestled in the heart of California, our luxury hotel offers a
              sanctuary of sophistication and tranquility. With impeccably
              designed rooms, world-class dining, and exceptional service, every
              detail is crafted to create a memorable experience. Whether you
              seek a peaceful retreat or an indulgent getaway, our exquisite
              amenities, breathtaking views, and personalized attention ensure
              an unforgettable stay.
            </p>
          </div>
          <div
            className="flex-1 h-[100%] w-full relative "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Image
              src="/images/home-1/action-img.png"
              width={1000}
              height={1000}
              className="h-full w-full md:h-[80%] lg:h-full 2xl:h-[99%] "
              alt=""
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
      </section>
    </div>
  );
};

export default Action;
