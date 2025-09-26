"use client";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Rooms = () => {
  const router = useRouter();

  // NEW: booking state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [open, setOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);

  // UI feedback
  const [msg, setMsg] = useState(null); // {type: "error"|"ok", text:string}

  // slider (unchanged)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": { slides: { perView: 1, spacing: 20 } },
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width:992px)": { slides: { perView: 3, spacing: 20 } },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // NEW: dummy checkout/search
  const handleCheckout = () => {
    setMsg(null);

    if (!checkIn || !checkOut) {
      setMsg({ type: "error", text: "Please select both dates." });
      return;
    }
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    if (!(outDate > inDate)) {
      setMsg({ type: "error", text: "Check-out must be after check-in." });
      return;
    }

    const booking = {
      checkIn,
      checkOut,
      room,
      adult,
      children,
      createdAt: new Date().toISOString(),
      note: "Demo only — no payment required.",
    };
    try {
      localStorage.setItem("demoBooking", JSON.stringify(booking));
    } catch {}

    // Optional little confirmation
    setMsg({ type: "ok", text: "Searching available rooms…" });

    // “Navigate” to your results page with query params
    const qs = new URLSearchParams({
      checkIn,
      checkOut,
      rooms: String(room),
      adults: String(adult),
      children: String(children),
    }).toString();

    // tiny delay to make it feel real
    setTimeout(() => router.push(`/find_room?${qs}`), 450);
  };

  return (
    <div className="bg-whiteSmoke dark:bg-lightBlack overflow-hidden">
      <div className="relative z-[1]">
        <div
          className="Container-Hero bg-lightBlack dark:bg-normalBlack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 items-center justify-center font-Lora py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki left-0 right-0 z-[1]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* Check-in */}
          <div className="p-3">
            <p className="text-sm text-lightGray ml-3">Check In</p>
            <div className="flex items-center pt-[2px] ">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white text-sm lg:text-base focus:ring-transparent"
                required
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="p-3">
            <p className="text-sm text-lightGray ml-3">Check Out</p>
            <div className="flex items-center pt-[2px] ">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white text-sm lg:text-base focus:ring-transparent"
                required
              />
            </div>
          </div>

          {/* Rooms dropdown */}
          <div className="p-3">
            <div>
              <span
                className="flex items-center justify-between text-sm text-lightGray cursor-pointer"
                onClick={() => setOpen(!open)}
                title="click here to open and close rooms extender"
              >
                Rooms
                <BiChevronDown />
              </span>
              <div className="pt-[10px] text-sm sm:text-base">{room} Room</div>
              <div className="absolute pt-5 z-20">
                <div
                  className={`shadow-2xl ${
                    open ? "" : "hidden"
                  } rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 `}
                >
                  <div className="py-2 px-5 group cursor-pointer">
                    <li className="flex items-center justify-between">
                      <div>{room} Room</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setRoom(room + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white disabled:opacity-50"
                          onClick={() => setRoom(room - 1)}
                          disabled={room <= 1}
                        >
                          -
                        </button>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guests dropdown */}
          <div className="p-3">
            <div className="text-white px-3 py-2 w-full block transition-all duration-300 group relative">
              <span
                className="flex items-center justify-between text-sm text-lightGray cursor-pointer"
                onClick={() => setGuestOpen(!guestOpen)}
              >
                Guests
                <BiChevronDown />
              </span>
              <div className="pt-[10px] text-sm sm:text-base">
                {adult} Adult, {children} Child
              </div>
              <div className="absolute pt-5 z-20 ml-[-120px] sm:ml-0">
                <div
                  className={`shadow-2xl ${
                    guestOpen ? "" : "hidden"
                  } rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4`}
                >
                  <div className="py-2 px-5 group cursor-pointer">
                    <li className="flex items-center justify-between">
                      <div>{adult} Adult</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setAdult(adult + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white disabled:opacity-50"
                          onClick={() => setAdult(adult - 1)}
                          disabled={adult <= 1}
                        >
                          -
                        </button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between mt-1">
                      <div>{children} Child</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white disabled:opacity-50"
                          onClick={() => setChildren(children - 1)}
                          disabled={children < 1}
                        >
                          -
                        </button>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout button – now triggers dummy flow */}
          <button
            onClick={handleCheckout}
            className="w-[142px] h-10 lg:h-[50px] text-[15px] bg-khaki font-Garamond border border-khaki text-white mx-auto col-span-2 md:col-span-1 lg:col-span-1 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-lightBlack before:transition-all before:duration-500 hover:before:w-full hover:before:left-0"
          >
            Checkout Now
          </button>
        </div>

        {/* Tiny inline feedback */}
        {msg && (
          <div
            className={`Container-Hero px-4 py-2 ${
              msg.type === "error" ? "text-red-300" : "text-emerald-300"
            }`}
            role="status"
            aria-live="polite"
          >
            {msg.text}
          </div>
        )}
      </div>

      {/* …rest of your slider/room cards unchanged… */}
      {/* (Keep your existing Rooms section below) */}
      <div className=" py-20 2xl:py-[120px] w-full bg-no-repeat bg-top bg-opacity-[0.07]">
        {/* existing content unchanged */}
        {/* ... your slider markup here ... */}
      </div>
    </div>
  );
};

export default Rooms;
