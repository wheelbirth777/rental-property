import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

const Facilities = () => {
  return (
    <div className="dark:bg-mediumBlack overflow-hidden ">
      <section className="Container py-[120px] md:py-0 md:pb-[120px] lg:py-[120px]">
        {/* section title and button */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className=" md:w-[450px] font-Garamond">
            <h5 className="text-base text-khaki leading-[26px] font-medium mb-[14px]  ">
              FACILITIES
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px]  text-lightBlack dark:text-white font-semibold ">
              ENJOY COMPLETE & BEST QUALITY FACILITIES
            </h1>
          </div>
          <div className="mt-5 md:mt-0">
            <Link href="/services">
              <button className="btn-items">view more item</button>
            </Link>
          </div>
        </div>
        {/* facilities container */}
        <div className="">
          {/* facilities section -1  */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative w-full h-[100%] md:pr-[30px]">
              <Image
                src="/images/home-1/facilities-1.webp"
                width={0}
                height={0}
                sizes="550px"
                className="w-full"
                alt=""
              />
              <div className=" hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%] xl:-right-[5%]">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  01
                </h2>
              </div>
            </div>
            <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0  h-full">
              <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                Fitness
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link href="/service_details">
                  Elevate Your Fitness: The Chateau Wellness Gym
                </Link>
              </h1>

              <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                Our state-of-the-art Wellness Gym offers everything you need to
                maintain your fitness routine while traveling. Equipped with the
                latest cardio machines, free weights, and functional training
                equipment, it’s designed for all fitness levels. Whether you’re
                aiming for a quick workout or an intense training session, our
                modern facilities provide a welcoming space to energize your
                body and mind. Open 24/7 for your convenience, with personal
                trainers available upon request, we ensure that your wellness
                goals are always within reach.
              </p>
              <Link href="/service_details">
                <HiArrowLongRight
                  size={30}
                  className="text-gray hover:text-khaki"
                />
              </Link>
            </div>
          </div>

          {/* facilities section - 2 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
              <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                Fitness
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link href="/service_details">
                  Immerse in Luxury: The Chateau Indoor Swimming Pool”
                </Link>
              </h1>

              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Dive into relaxation at our exquisite indoor swimming pool,
                where elegance meets tranquility. Surrounded by sleek, modern
                design, our heated pool provides the perfect escape year-round,
                whether you’re swimming laps or simply unwinding. Lounge
                poolside in our comfortable seating areas, or enjoy a refreshing
                dip after a long day of exploring. With pristine water and
                ambient lighting, the experience is as soothing as it is
                invigorating. Ideal for guests of all ages, our pool offers a
                serene oasis for both relaxation and recreation.
              </p>
              <Link href="/service_details">
                <HiArrowLongRight
                  className="text-gray hover:text-khaki"
                  size={30}
                />
              </Link>
            </div>

            <div className="w-full  md:pl-[30px] relative mt-5 md:mt-0">
              <Image
                src="/images/home-1/indoorpool1.webp"
                width={0}
                height={0}
                sizes="550px"
                className="w-full"
                alt=""
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki  font-Garamond">
                  02
                </h1>
              </div>
            </div>
          </div>
          {/* facilities section - 3 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative w-full h-[100%] md:pr-[30px]">
              <Image
                src="/images/home-1/resto-1.webp"
                width={0}
                height={0}
                sizes="550px"
                className="w-full"
                alt=""
              />
              <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%] xl:-right-[5%]">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  03
                </h2>
              </div>
            </div>
            <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
              <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                FOODS
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link href="/service_details"> Taste of Elegance</Link>
              </h1>

              <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Indulge in our carefully curated wine selection, perfectly
                paired to enhance your dining experience, or enjoy signature
                cocktails in a sophisticated atmosphere. With warm, attentive
                service and a beautifully designed space, Culinary Haven is not
                just a restaurant; it’s a delightful escape for both hotel
                guests and local diners alike. Join us for an unforgettable
                culinary journey that will tantalize your taste buds and create
                lasting memories.
              </p>
              <Link href="/service_details">
                <HiArrowLongRight
                  className="text-gray hover:text-khaki"
                  size={30}
                />
              </Link>
            </div>
          </div>

          {/* facilities section - 4 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
              <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                EXPERIENCE
              </h4>
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link href="/service_details">Prestige Fitness Studio</Link>
              </h1>

              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Whether you’re an experienced athlete or just beginning your
                wellness journey, our expert trainers are here to provide
                personalized guidance and support. Enjoy a variety of fitness
                classes, from yoga and Pilates to high-intensity interval
                training, all tailored to rejuvenate and energize your spirit.
              </p>
              <Link href="/service_details">
                <HiArrowLongRight
                  className="text-gray hover:text-khaki"
                  size={30}
                />
              </Link>
            </div>

            <div className="w-full h-[100%]  relative md:pl-[30px] mt-5 md:mt-0">
              <Image
                src="/images/home-1/gym-1.webp"
                width={0}
                height={0}
                sizes="550px"
                className="w-full"
                alt=""
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  04
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
