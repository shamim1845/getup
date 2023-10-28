import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" w-full max-w-[1160px] mx-auto h-[calc(100vh-67px)] flex justify-center items-center overflow-hidden ">
      <div className="section_padding w-full h-full md:max-h-[471px] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
        <div className="flex-1 flex flex-col justify-center gap-7 py-10">
          <div>
            <h1 className="heading1">Get valuable leads inside WordPress.</h1>
          </div>

          <div>
            <p className="font-normal text-[18px] md:text-[21px] leading-[34px]">
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </p>
          </div>

          <div className="w-full">
            <Button className="w-full md:w-auto">Get Started for Free</Button>
          </div>

          <div className="leading-[28px]">
            <span> Still confused? </span>
            <Link href={"/"} className="text-brandSecondary hover:underline ">
              Check our 1 min video
            </Link>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            src="/hero-img.svg"
            alt="hero img"
            width={609}
            height={471}
            className=" w-full h-full"
          />

          <div className="absolute bottom-[10%] right-[50%] translate-x-[30%] w-[193px] h-[218px] bg-[#fff] flex flex-col justify-between rounded z-50">
            <div className="p-4">
              <h3 className="font-medium text-[18px] leading-[32px]">
                Meeting with John
              </h3>
              <p className="text-[13px] leading-[20px] text-brandMuted">
                11:15am, Sep 10, Sunday
              </p>
              <br />
              <p className="text-[13px] leading-[20px] text-brandMuted">
                Agenda:
              </p>
              <p className="text-[13px] leading-[20px] text-brandPrimary">
                How to get more customers for your ecommerce business
              </p>
            </div>
            <div className="text-[#fff] flex justify-between">
              <button className="flex-1 bg-[#F5A623] p-3 flex items-center justify-between gap-1">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[10px] h-[11px] border"
                >
                  <path
                    d="M1 5.99998H11"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="1"
                    y="2"
                    width="10"
                    height="10"
                    rx="1"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4V1"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 4V1"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium text-[13px] leading-[16.44px]">
                  Reschedule
                </span>
              </button>
              <button className="flex-1 bg-[#FF374F] p-3 flex items-center justify-between gap-1">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[10px] h-[11px]"
                >
                  <path
                    d="M9 1L1 9"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9L1 1"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="font-medium text-[13px] leading-[16.44px]">
                  Cancel
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
