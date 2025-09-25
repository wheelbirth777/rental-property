import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContactUs from "@/components/ContactUs/ContactUs";
import React from "react";

const page = () => {
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <ContactUs />
    </>
  );
};

export default page;
