"use client";
import React, { useEffect, useState } from "react";
import HeroSection2 from "@/components/HeroSection/HeroSection2";
import Rooms from "@/components/Rooms/Rooms";
import HotelAndResort from "@/components/HotelAndResort/HotelAndResort";
import HotelAndFacilities from "@/components/HotelAndFacilities/HotelAndFacilities";
import Action from "@/components/CallDoAction/Action";
import Facilities from "@/components/Facilities/Facilities";
import Offers from "@/components/Offers/Offers";
import Testimonial from "@/components/Testimonial/Testimonial";
import Link from "next/link";
import DemoChatbot from "@/components/DemoChatbot";

const Page = () => {
  return (
    <div>
      <HeroSection2 />
      <Rooms />
      <HotelAndResort />
      <HotelAndFacilities />
      <Action />
      <Facilities />
      <Offers />
      <Testimonial />
      <DemoChatbot />
    </div>
  );
};

export default Page;
