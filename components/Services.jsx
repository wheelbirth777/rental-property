import { HiArrowLongRight } from "react-icons/hi2";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <section className="">
      <BreadCrumb title="services" />

      {/* service page content */}
      <div className="dark:bg-mediumBlack ">
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
                Indulge in Our Exclusive Hotel Services and Amenities
              </h1>
            </div>
            <div className="mt-5 md:mt-0">
              <Link href="/our_team">
                <button className="btn-items">view more item</button>
              </Link>
            </div>
          </div>
          {/* facilities container */}
          <div className="">
            {/* facilities section -1  */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <Image
                  src="/images/home-1/facilities-1.png"
                  alt=""
                  className="w-full h-full"
                  width={500}
                  height={500}
                />
                <div className=" hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    01
                  </h2>
                </div>
              </div>
              <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  Fitness
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link href="/service_details">Gym Center</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                  Stay fit and energized during your stay at our
                  state-of-the-art fitness center. Our fully equipped gym offers
                  the latest in cardio and strength training equipment,
                  including treadmills, free weights, and resistance machines.
                  Whether you’re looking for a quick workout or a full fitness
                  routine, our gym provides a comfortable, modern environment to
                  meet your exercise needs. Open 24/7, our facility ensures you
                  can work out at your convenience, helping you maintain your
                  health and wellness goals while traveling.
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
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                  Fitness
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link href="/service_details"> Indoor Swimming Pool</Link>
                </h1>

                <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Take a refreshing dip in our luxurious indoor swimming pool, a
                  serene oasis designed for relaxation and rejuvenation. With
                  crystal-clear waters, temperature-controlled comfort, and
                  elegant surroundings, our pool offers the perfect escape for
                  both leisure and fitness. Whether you’re looking to swim laps
                  or simply unwind poolside, our indoor facility ensures
                  year-round enjoyment, no matter the weather. Comfortable
                  lounge chairs and attentive service make it easy to relax
                  after your swim, enhancing your experience of tranquility and
                  comfort.
                </p>
                <Link href="/service_details">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%] md:pl-[30px] relative mt-5 md:mt-0">
                <Image
                  src="/images/home-1/facilities-thumb-2.jpg"
                  alt=""
                  className="w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    02
                  </h1>
                </div>
              </div>
            </div>
            {/* facilities section - 3 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <Image
                  src="/images/home-1/facilities-thumb-3.jpg"
                  alt=""
                  className="w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    03
                  </h2>
                </div>
              </div>
              <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  FOODS
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link href="/service_details">The Restaurant Center</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Savor a culinary journey at our exquisite on-site restaurant,
                  where gourmet cuisine meets exceptional service. Offering a
                  diverse menu crafted by our expert chefs, our restaurant
                  features a fusion of local and international flavors, using
                  the freshest ingredients to create unforgettable dining
                  experiences. Whether you’re enjoying a hearty breakfast, a
                  leisurely lunch, or a romantic dinner, the elegant ambiance
                  and attention to detail will enhance every meal. Pair your
                  dishes with a selection of fine wines and signature cocktails
                  for the perfect dining experience.
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
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                  EXPERIENCE
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link href="/service_details">Gym & Sauna Locker Room</Link>
                </h1>

                <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Enhance your fitness and wellness experience with the
                  convenience of our modern gym and sauna locker rooms. Designed
                  for your comfort and privacy, our locker rooms are equipped
                  with secure lockers, spacious changing areas, and high-end
                  amenities. After a workout in our fully equipped gym or a
                  relaxing session in the sauna, you can freshen up in our
                  well-appointed showers, complete with premium toiletries and
                  soft towels. Whether you’re preparing for your next activity
                  or winding down, our locker rooms offer a seamless and
                  comfortable transition.
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
                  src="/images/home-1/facilities-thumb-4.jpg"
                  alt=""
                  className="w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    04
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
