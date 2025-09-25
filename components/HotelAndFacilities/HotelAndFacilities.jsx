//import { Avatar } from "flowbite-react";

const HotelAndFacilities = () => {
  return (
    <section className="bg-lightBlack z-[1] overflow-hidden">
      <div className="py-[110px]   bg-no-repeat bg-top bg-opacity-[0.07]">
        <div className="Container">
          <div
            className=" text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}

            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond font-semibold uppercase">
              HOTEL’S FACILITIES
            </h1>
            <p className="font-Lora leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              Whether you’re looking to unwind by the pool, rejuvenate in our
              luxurious spa, or stay active in our state-of-the-art fitness
              center, we have something for everyone. Indulge in fine dining at
              our signature restaurant, enjoy a refreshing cocktail at the
              rooftop lounge, or take advantage of our fully equipped business
              center for any professional needs.
            </p>
          </div>
          {/* HOTEL’S FACILITIES content */}
        </div>
      </div>
    </section>
  );
};

export default HotelAndFacilities;
