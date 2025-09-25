"use client";
import { BsArrowLeft, BsArrowRight, BsCheck2 } from "react-icons/bs";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type DemoBooking = {
  id: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  createdAt: string;
};

const RoomDetails = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "/images/inner/room-details-1.jpg",
    "/images/inner/room-details-2.jpg",
  ];

  const prevBtn = () =>
    setImageIndex((i) => (i - 1 + images.length) % images.length);
  const nextBtn = () => setImageIndex((i) => (i + 1) % images.length);

  /* ---------------- Demo booking state ---------------- */
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  }, []);

  const [checkIn, setCheckIn] = useState<string>(today);
  const [checkOut, setCheckOut] = useState<string>(tomorrow);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(1);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<DemoBooking | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  // load last demo booking if any
  useEffect(() => {
    const raw = localStorage.getItem("demoBooking");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as DemoBooking;
        setSuccess(parsed);
      } catch {}
    }
  }, []);

  const validate = (): string | null => {
    if (!checkIn || !checkOut)
      return "Please select both check-in and check-out.";
    if (new Date(checkOut) <= new Date(checkIn))
      return "Check-out must be after check-in.";
    if (adults < 1) return "At least 1 adult is required.";
    if (rooms < 1) return "Please select at least 1 room.";
    return null;
  };

  const handleSubmit = async () => {
    const v = validate();
    if (v) {
      setError(v);
      setSuccess(null);
      setShowSummary(false);
      return;
    }
    setError(null);
    setSubmitting(true);

    // simulate API latency
    await new Promise((r) => setTimeout(r, 900));

    const ref = `RB-${Date.now().toString().slice(-6)}`;
    const booking: DemoBooking = {
      id: ref,
      checkIn,
      checkOut,
      adults,
      children,
      rooms,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("demoBooking", JSON.stringify(booking));
    setSuccess(booking);
    setShowSummary(true);
    setSubmitting(false);
  };

  const clearDemo = () => {
    localStorage.removeItem("demoBooking");
    setSuccess(null);
    setShowSummary(false);
  };

  return (
    <section>
      <BreadCrumb title="room details" />

      {/* Success banner */}
      {success && (
        <div className="Container mt-6">
          <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-200">
            <p className="font-medium">
              ✅ Demo booking created — Reference{" "}
              <span className="font-bold">{success.id}</span>
            </p>
            <button
              onClick={() => setShowSummary((v) => !v)}
              className="mt-2 inline-flex text-xs underline underline-offset-4"
            >
              {showSummary ? "Hide" : "View"} summary
            </button>
          </div>
        </div>
      )}

      {/* Summary drawer */}
      {showSummary && success && (
        <div className="Container mt-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 dark:bg-normalBlack">
            <h5 className="mb-2 font-Garamond text-xl text-white">
              Your Demo Reservation
            </h5>
            <ul className="grid gap-2 text-sm text-slate-200">
              <li>
                <strong>Reference:</strong> {success.id}
              </li>
              <li>
                <strong>Check-in:</strong> {success.checkIn}
              </li>
              <li>
                <strong>Check-out:</strong> {success.checkOut}
              </li>
              <li>
                <strong>Guests:</strong> {success.adults} adult(s)
                {success.children ? `, ${success.children} child(ren)` : ""}
              </li>
              <li>
                <strong>Rooms:</strong> {success.rooms}
              </li>
            </ul>
            <div className="mt-3 flex gap-3">
              <button
                onClick={clearDemo}
                className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-500"
              >
                Clear demo booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Room Details */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          <div className="col-span-6 md:col-span-4">
            {/* Image custom slider */}
            <div
              className="overflow-hidden relative group "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Image
                src={images[imageIndex]}
                alt=""
                width={535}
                height={0}
                className="transition-all duration-500 delay-300 w-full h-full object-cover"
              />
              <div className="flex ">
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] left-[-50px] group-hover:left-4 lg:group-hover:left-6 transition-all duration-300 cursor-pointer"
                  onClick={prevBtn}
                >
                  <BsArrowLeft
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] right-[-50px] group-hover:right-4 lg:group-hover:right-6 transition-all duration-300 cursor-pointer"
                  onClick={nextBtn}
                >
                  <BsArrowRight
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
              </div>
            </div>

            {/* Room content (unchanged text) */}
            <div className="pt-5 lg:pt-[35px]  pr-3">
              <p className="text-base font-Lora text-khaki">LUXURY ROOM</p>
              <h2
                className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                Delux Family Rooms
              </h2>
              <p
                className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                Rapidiously1 myocardinate cross-platform intellectual capital
                after marketing model...
              </p>
              <p
                className="mt-5 2xl:mt-7 text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                Conveniently fashion pandemic potentialities for team driven
                technologies...
              </p>

              {/* Check-In and check-Out (left column info) */}
              <div
                className="md:flex items-center flex-col md:flex-row md:justify-between py-10 lg:py-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {/* check-in */}
                <div>
                  <div className="flex items-center space-x-2">
                    <FiLogOut className="text-khaki rotate-180" size={24} />
                    <h4 className="text-xl md:text-2xl lg:text-[26px] leading-[26px] font-Garamond text-lightBlack dark:text-white font-semibold ">
                      Check In
                    </h4>
                  </div>
                  <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        Check-in from 9:00 AM - anytime
                      </span>
                    </li>
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        Early check-in subject to availability
                      </span>
                    </li>
                  </ul>
                </div>
                {/* check-out */}
                <div className="mt-5 md:mt-0">
                  <div className="flex items-center space-x-2">
                    <FiLogOut className="text-khaki" size={24} />
                    <h4 className="text-xl md:text-2xl lg:text-[26px] leading-[26px] font-Garamond text-lightBlack dark:text-white font-semibold ">
                      Check Out
                    </h4>
                  </div>
                  <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        Check-out before noon
                      </span>
                    </li>
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        Check-out from 9:00 AM - anytime
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* House Rules ... (kept) */}
              <div data-aos="zoom-in-up" data-aos-duration="1000">
                <h2 className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6 font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold">
                  House Rules
                </h2>
                <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                  Professionally deliver fully researched scenarios with turnkey
                  communities...
                </p>
              </div>

              {/* Children & Extra Beds ... (kept) */}
              <div
                className="pt-10 2xl:pt-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h2 className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6 font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold">
                  Childreen & Extra Beds
                </h2>
                <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora mb-5 2xl:mb-[30px]">
                  Applications without seamless data...
                </p>
                <ul className="space-y-2 lg:space-y-3 ">
                  {[
                    "Quickly generate bricks-and-clicks",
                    "Interactively cultivate visionary platforms",
                    "Energistically envisioneer resource",
                    "Uniquely restore turnkey paradigms",
                  ].map((t) => (
                    <li key={t} className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar: interactive demo booking */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <div className="bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-8 md:py-10 lg:px-9 lg:py-11 2xl:px-10 2xl:pt-[45px] 2xl:pb-[30px]">
              <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-4">
                Booking
              </h4>

              {/* inputs */}
              <div className="grid gap-4">
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-lightBlack dark:text-white">
                    Check In
                  </span>
                  <input
                    type="date"
                    value={checkIn}
                    min={today}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full h-10 rounded-md bg-white dark:bg-lightBlack px-3 text-sm text-lightBlack dark:text-white outline-none ring-1 ring-white/10 focus:ring-khaki"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-lightBlack dark:text-white">
                    Check Out
                  </span>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || today}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full h-10 rounded-md bg-white dark:bg-lightBlack px-3 text-sm text-lightBlack dark:text-white outline-none ring-1 ring-white/10 focus:ring-khaki"
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-lightBlack dark:text-white">
                      Adult
                    </span>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full h-10 rounded-md bg-white dark:bg-lightBlack px-3 text-sm text-lightBlack dark:text-white outline-none ring-1 ring-white/10 focus:ring-khaki"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-lightBlack dark:text-white">
                      Children
                    </span>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full h-10 rounded-md bg-white dark:bg-lightBlack px-3 text-sm text-lightBlack dark:text-white outline-none ring-1 ring-white/10 focus:ring-khaki"
                    >
                      {[0, 1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-lightBlack dark:text-white">
                    Rooms
                  </span>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(Number(e.target.value))}
                    className="w-full h-10 rounded-md bg-white dark:bg-lightBlack px-3 text-sm text-lightBlack dark:text-white outline-none ring-1 ring-white/10 focus:ring-khaki"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="mt-2 bg-khaki w-full h-10 2xl:h-[50px] text-white font-Lora font-semibold px-5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Processing..." : "Confirm Booking"}
                </button>

                {success && (
                  <p className="text-xs text-slate-400">
                    Demo only. No payment collected. Ref:{" "}
                    <span className="font-mono">{success.id}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Amenities (unchanged) */}
            <div
              className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-6">
                Amenities
              </h4>
              <div className="grid items-center ">
                {[
                  {
                    img: "/images/inner/room-amenities-1.png",
                    text: "2 - 5 Persons",
                  },
                  {
                    img: "/images/inner/room-amenities-2.png",
                    text: "Free WiFi Available",
                  },
                  {
                    img: "/images/inner/room-amenities-3.png",
                    text: "Swimming Pools",
                  },
                  {
                    img: "/images/inner/room-amenities-4.png",
                    text: "Breakfast",
                  },
                  {
                    img: "/images/inner/room-amenities-5.png",
                    text: "250 SQFT Rooms",
                  },
                  {
                    img: "/images/inner/room-amenities-6.png",
                    text: "Gym facilities",
                  },
                ].map(({ img, text }, i) => (
                  <div
                    key={text}
                    className={`flex items-center py-5 ${
                      i < 5
                        ? "border-b-[1px] border-lightGray dark:border-gray"
                        : ""
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      width={20}
                      height={0}
                      className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                    />
                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
