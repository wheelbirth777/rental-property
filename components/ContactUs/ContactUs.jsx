"use client";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";

import { IoIosCall } from "react-icons/io";

const ContactUs = () => {
  return (
    <div>
      {/* Contact */}
      {/* Contact with Us */}
      <div className="py-20 2xl:py-[20px] bg-lightBlack">
        <div className="Container relative  top-[-75px] shadow-lg bg-whiteSmoke dark:bg-normalBlack px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] ">
          <div className="flex items-center flex-col md:flex-row">
            <div
              className="py-5 sm:p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p className="text-Garamond text-base leading-[26px] text-khaki font-medium">
                CONTACT US
              </p>
              <h2 className="text-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack dark:text-white font-semibold my-3 md:my-5">
                Get in Touch with Us
              </h2>
              <p className="text-Lora text-sm sm:text-base leading-[26px]  text-gray dark:text-lightGray font-normal mb-5">
                At The Chateau, we’re here to ensure your experience is seamless
                from the moment you reach out to us. Whether you have questions
                about your stay, need assistance with a reservation, or have
                special requests, our dedicated team is always ready to assist
                you.
              </p>
              <p className="text-Lora text-sm sm:text-base leading-[26px]  text-gray dark:text-lightGray font-normal">
                Contact us anytime for personalized support, and we’ll be happy
                to help you plan the perfect getaway. You can reach us via
                phone, email, or by filling out the contact form below. We look
                forward to hearing from you and welcoming you to The Chateau.
              </p>

              {/* call */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <IoIosCall
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Call Us Now
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium">
                    725-1355-5678
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* email */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdEmail
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Send Email
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                    support@chateuhotel.com
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* location */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-lightBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdOutlineShareLocation
                    size={22}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Our Locations
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                    5332 Edmond St. Las Vegas, Nevad 89139
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex-1 py-5 sm:p-5"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="bg-lightBlack  p-[30px] lg:p-[45px] 2xl:p-[61px]">
                <h2 className="font-Garamond text-[22px] sm:text-2xl md:text-[28px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-white font-semibold text-center">
                  GET IN TOUCH
                </h2>
                <div className="grid items-center grid-cols-1 gap-2 mt-8">
                  <input
                    type="text"
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none  bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:border-gray dark:focus:border-lightGray focus:outline-none"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border  border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none  bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:border-gray dark:focus:border-lightGray focus:outline-none"
                    placeholder="Enter E-mail"
                    required
                  />
                  <select
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none  bg-transparent mt-4 focus:ring-0  focus:border-gray dark:focus:border-lightGray focus:outline-none"
                    onFocus={(e) => {
                      e.target.size = 6;
                    }}
                    onBlur={(e) => {
                      e.target.size = 0;
                    }}
                    onChange={(e) => {
                      e.target.size = 1;
                      e.target.blur();
                    }}
                  >
                    <option
                      className="bg-khaki text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Subject
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option1"
                    >
                      Subject One
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option2"
                    >
                      Subject Two
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option3"
                    >
                      Select Three
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option4"
                    >
                      Select Four
                    </option>
                  </select>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full h-[121px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none  bg-transparent mt-4 focus:ring-0 placeholder:text-gray resize-none focus:border-gray dark:focus:border-lightGray focus:outline-none"
                    placeholder="Write Message:"
                  ></textarea>
                  <button className="w-full bg-khaki text-white text-center h-10 2xl:h-[55px] mt-5">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
