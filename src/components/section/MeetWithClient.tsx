import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const MeetWithClient = () => {
  return (
    <section>
      <div className="section_padding max-w-[997px] mx-auto">
        <h3 className="heading2 py-20">
          Meet with clients <br /> anytime, anywhere.
        </h3>

        <div className="flex flex-col md:flex-row gap-10">
          {/* left */}
          <div className="flex-1 relative">
            <Image
              src={"/meet-client/dot-pattern.svg"}
              alt="pattern"
              width={176}
              height={191}
              className="absolute bottom-0 left-0 right-0"
            />

            <Image
              src={"/meet-client/client-meeting.svg"}
              alt="pattern"
              width={475}
              height={593}
              // className="absolute top-0 left-0"
            />
          </div>

          {/* right */}
          <div className="flex-1 flex flex-col gap-10">
            <p className="text-[18px] leading-[32px]">
              Computer users and programmers have become so accustomed to using
              Windows, even for the changing capabilities and the appearances of
              the graphical interface of the versions, therefore it has remained
              Microsoft’s product.
              <br /> <br /> These companies release their own versions of the
              operating systems with minor changes, and yet always with the same
              bottom line.
            </p>

            <div className="">
              <Button className="">Get Started for Free</Button>
            </div>

            <div>
              <p className="text-[13px] leading-[20px] text-brandMuted">
                “The following article covers a topic that has recently moved to
                center stage–at least it seems that way. If you’ve been thinking
                you need to know more about unconditional love, here’s your
                opportunity.”
              </p>
            </div>

            <div>
              <p className="font-medium text-[13px] leading-[16px]">
                John Doe, Founder of Matrix
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetWithClient;
