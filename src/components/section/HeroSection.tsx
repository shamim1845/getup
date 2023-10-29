import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import MeetingWithJohn from "../MeetingWithJohn";

const HeroSection = () => {
  return (
    <section className="w-full h-full max-w-[1160px] mx-auto min-h-[calc(100vh-67px)] flex justify-center items-center overflow-hidden">
      <div className="section_padding w-full h-full md:min-h-[471px] flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-20">
        <div className="flex-1  flex flex-col justify-center gap-7 py-16">
          <div>
            <h1 className="heading1">Get valuable leads inside WordPress.</h1>
          </div>

          <div>
            <p className="font-normal text-[18px] md:text-[21px] leading-[34px] max-w-[445px]">
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </p>
          </div>

          <div className="w-full">
            <Button className="w-full sm:w-auto">Get Started for Free</Button>
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

          <div className="absolute bottom-[5%] right-[50%] translate-x-[30%] z-50">
            <MeetingWithJohn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
