"use client";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { useEffect, useState } from "react";

export default function ContactUs() {
  // ---------------- state ----------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  // Load last demo contact (if any)
  useEffect(() => {
    const raw = localStorage.getItem("demoContact");
    if (raw) {
      try {
        setSuccess(JSON.parse(raw));
      } catch {}
    }
  }, []);

  const isEmailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim() || !isEmailValid(email))
      return "Please enter a valid email.";
    if (!subject.trim()) return "Please select a subject.";
    if (!message.trim() || message.trim().length < 10)
      return "Please write a message (at least 10 characters).";
    return null;
  };

  const handleSubmit = async () => {
    const v = validate();
    if (v) {
      setError(v);
      setShowSummary(false);
      return;
    }
    setError(null);
    setSubmitting(true);

    // simulate API latency
    await new Promise((r) => setTimeout(r, 900));

    const ref = `CT-${Date.now().toString().slice(-6)}`;
    const payload = {
      id: ref,
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("demoContact", JSON.stringify(payload));
    setSuccess(payload);
    setShowSummary(true);
    setSubmitting(false);

    // clear form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const clearDemo = () => {
    localStorage.removeItem("demoContact");
    setSuccess(null);
    setShowSummary(false);
  };

  // ---------------- UI ----------------
  return (
    <div>
      {/* Success banner */}
      {success && (
        <div className="Container mt-6">
          <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-200">
            <p className="font-medium">
              ✅ Message sent (demo) — Reference{" "}
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

      {showSummary && success && (
        <div className="Container mt-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 dark:bg-normalBlack">
            <h5 className="mb-2 font-Garamond text-xl text-white">
              Message Summary
            </h5>
            <ul className="grid gap-2 text-sm text-slate-200">
              <li>
                <strong>Reference:</strong> {success.id}
              </li>
              <li>
                <strong>Name:</strong> {success.name}
              </li>
              <li>
                <strong>Email:</strong> {success.email}
              </li>
              <li>
                <strong>Subject:</strong> {success.subject}
              </li>
              <li className="whitespace-pre-wrap">
                <strong>Message:</strong> {success.message}
              </li>
              <li>
                <strong>Timestamp:</strong>{" "}
                {new Date(success.createdAt).toLocaleString()}
              </li>
            </ul>
            <div className="mt-3 flex gap-3">
              <button
                onClick={clearDemo}
                className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-500"
              >
                Clear demo message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <div className="py-20 2xl:py-[20px] bg-lightBlack">
        <div className="Container relative top-[-75px] shadow-lg bg-whiteSmoke dark:bg-normalBlack px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] ">
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
              <p className="text-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal mb-5">
                At The Chateau, we’re here to ensure your experience is seamless
                from the moment you reach out to us. Whether you have questions
                about your stay, need assistance with a reservation, or have
                special requests, our dedicated team is always ready to assist
                you.
              </p>
              <p className="text-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal">
                Contact us anytime for personalized support, and we’ll be happy
                to help you plan the perfect getaway. You can reach us via
                phone, email, or by filling out the contact form below.
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

            {/* Form */}
            <div
              className="flex-1 py-5 sm:p-5"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="bg-lightBlack p-[30px] lg:p-[45px] 2xl:p-[61px]">
                <h2 className="font-Garamond text-[22px] sm:text-2xl md:text-[28px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-white font-semibold text-center">
                  GET IN TOUCH
                </h2>

                <div className="grid items-center grid-cols-1 gap-2 mt-8">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:border-gray dark:focus:border-lightGray"
                    placeholder="Your Name"
                    required
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:border-gray dark:focus:border-lightGray"
                    placeholder="Enter E-mail"
                    required
                  />

                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0 focus:border-gray dark:focus:border-lightGray"
                  >
                    <option value="" disabled>
                      Select Subject
                    </option>
                    <option value="Reservation Question">
                      Reservation Question
                    </option>
                    <option value="Group Booking">Group Booking</option>
                    <option value="Special Request">Special Request</option>
                    <option value="Feedback">Feedback</option>
                  </select>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full h-[121px] px-4 border border-gray dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0 placeholder:text-gray resize-none focus:border-gray dark:focus:border-lightGray"
                    placeholder="Write Message:"
                  />

                  {error && (
                    <p className="mt-1 text-sm text-red-400">{error}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full bg-khaki text-white text-center h-10 2xl:h-[55px] mt-5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "SEND MESSAGE"}
                  </button>

                  {success && (
                    <p className="text-xs text-slate-400 mt-2">
                      Demo only. Your message was not actually sent. Ref:{" "}
                      <span className="font-mono">{success.id}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* /Form */}
          </div>
        </div>
      </div>
    </div>
  );
}
