import Image from "next/image";
import React from "react";
import MeetingWithJohn from "../MeetingWithJohn";

const Feature1 = () => {
  return (
    <section>
      <div className="section_padding">
        <h3 className="heading2 text-center py-20">
          Control everything <br /> in a single place.
        </h3>
        <div className="w-full max-w-[773px] h-[466px] mx-auto flex justify-center relative bg-[url('/feature1/bitmap.svg')]">
          <Image
            src={"/feature1/bitmap-small.svg"}
            alt="bitmap"
            width={343}
            height={225}
            className="absolute top-[100px] right-0 lg:-right-[160px] z-50"
          />

          <Image
            src={"/feature1/dot-pattern.svg"}
            alt="bitmap"
            width={154}
            height={167}
            className="absolute -top-5 md:-top-[35px] left-0 md:-left-[20px] -z-10"
          />

          {/* Meeting */}
          <div className="absolute bottom-[90px] left-0 lg:-left-[55px] z-50">
            <MeetingWithJohn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
