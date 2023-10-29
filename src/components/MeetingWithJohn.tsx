import React from "react";

const MeetingWithJohn = () => {
  return (
    <div>
      <div className="w-[193px] h-[218px] bg-[#fff] flex flex-col justify-between rounded">
        <div className="p-4">
          <h3 className="font-medium text-[18px] leading-[32px]">
            Meeting with John
          </h3>
          <p className="text-[13px] leading-[20px] text-brandMuted">
            11:15am, Sep 10, Sunday
          </p>
          <br />
          <p className="text-[13px] leading-[20px] text-brandMuted">Agenda:</p>
          <p className="text-[13px] leading-[20px] text-brandPrimary">
            How to get more customers for your ecommerce business
          </p>
        </div>
        <div className="text-[#fff] flex justify-between">
          <button className="flex-1 bg-[#F5A623] hover:bg-[#df951e] transition-all p-3 flex items-center justify-between gap-1">
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
          <button className="flex-1 bg-[#FF374F] hover:bg-[#d82b3f] transition-all p-3 flex items-center justify-between gap-1">
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
  );
};

export default MeetingWithJohn;
