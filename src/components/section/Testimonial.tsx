"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const testimonialsConstant = [
  {
    id: 1,
    avatar: "/testimonials/avatar1.svg",
    comment:
      "I owe these guys my life. Already used their landing page templates for my latest two projects.",
    username: "- @thepatwalls",
  },
  {
    id: 2,
    avatar: "/testimonials/avatar2.svg",
    comment:
      "Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…",
    username: "- @thepatwalls",
  },
  {
    id: 3,
    avatar: "/testimonials/avatar3.svg",
    comment:
      "I owe these guys my life. Already used their landing page templates for my latest two projects.",
    username: "- @thepatwalls",
  },
  {
    id: 4,
    avatar: "/testimonials/avatar4.svg",
    comment:
      "I owe these guys my life. Already used their landing page templates for my latest two projects.",
    username: "- @thepatwalls",
  },
];

const Testimonial = () => {
  const [id, setId] = useState<number>(0);

  // bottom handler
  const handleClick = (id: number) => {
    setId(-id + 1);
  };

  const step = 390;

  //
  function moveSlider(direction: string) {
    if (direction === "prev") {
      setId((prev) => (prev < 0 ? prev + 1 : prev));
    }
    if (direction === "next") {
      setId((prev) =>
        prev > (testimonialsConstant.length - 1) * -1 ? prev - 1 : prev
      );
    }
  }

  return (
    <section className="">
      <div className="section_padding max-w-[997px] mx-auto  overflow-hidden">
        <div className="py-20 ">
          <svg
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-10"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84Z"
              fill="#E9F7FE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.8587 29.0628C53.671 24.9801 46.8557 24.9801 42.6671 29.0628C42.4349 29.2892 42.2127 29.5277 42.0003 29.7774C41.7879 29.5269 41.5657 29.2892 41.3327 29.062C37.145 24.9793 30.3296 24.9793 26.1411 29.062C21.9526 33.1447 21.9534 39.7892 26.1411 43.8727L41.4153 58.764C41.5764 58.9211 41.788 59 41.9995 59C42.211 59 42.4226 58.9211 42.5837 58.764L57.8579 43.8727C62.0472 39.79 62.0472 33.1455 57.8587 29.0628Z"
              fill="#258AFF"
            />
          </svg>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
            <h3 className="heading2 max-w-[563px] text-center md:text-left">
              1,000+ customers are loving Instappoint.
            </h3>
            <div className="flex items-center gap-10">
              <button
                onClick={() => moveSlider("prev")}
                className={cn(
                  "group   w-10 h-10 flex justify-center items-center rounded transition-colors",
                  id < 0 ? "hover:bg-brandSecondary/20" : "cursor-not-allowed"
                )}
              >
                <svg
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "",
                    id < 0 ? "stroke-[#258AFF]" : "stroke-[#E2E4E8]"
                  )}
                >
                  <path
                    d="M14 26L2 14L14 2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => moveSlider("next")}
                className={cn(
                  "group w-10 h-10 flex justify-center items-center rounded transition-colors",
                  id * -1 + 1 < testimonialsConstant.length
                    ? "hover:bg-brandSecondary/20"
                    : "cursor-not-allowed"
                )}
              >
                <svg
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "",
                    id * -1 + 1 < testimonialsConstant.length
                      ? "stroke-[#258AFF]"
                      : "stroke-[#E2E4E8]"
                  )}
                >
                  <path
                    d="M2 26L14 14L2 2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* slider-container */}
        <div className="w-full overflow-x-hidden">
          <div
            className={`w-[${
              testimonialsConstant.length * step
            }px] transition-[translate] duration-500 flex gap-10`}
            style={{ translate: `${id * step}px` }}
          >
            {testimonialsConstant.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[350px] border border-[#E2E4E8] p-7 flex flex-col gap-5 rounded-lg float-left"
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.username}
                  width={48}
                  height={48}
                />
                <p>{testimonial.comment}</p>

                <div>{testimonial.username}</div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <div className="w-full flex gap-10 pb-5">
          {testimonialsConstant.map((testimonial) => (
            <button
              className="py-2"
              onClick={() => handleClick(testimonial.id)}
              key={testimonial.id}
            >
              <div
                className={cn(
                  "h-2 w-10 rounded-lg cursor-pointer transition-colors",
                  id * -1 + 1 == testimonial.id
                    ? "bg-brandSecondary "
                    : "bg-[#E2E4E8] "
                )}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
