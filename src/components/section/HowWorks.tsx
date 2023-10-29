import React from "react";

const HowWorks = () => {
  return (
    <section className="border-t">
      <div className="section_padding">
        <h3 className="heading2 text-center py-20">
          Working with <br /> Instappoint is simple.
        </h3>

        <div className="max-w-[1200px] mx-auto grid grid-cols-[273px] sm:grid-cols-[273px_273px] lg:grid-cols-[273px_273px_273px] gap-10 place-content-center sm:mb-20 md:mb-10 ">
          {/* 1 */}
          <div className="flex flex-col gap-10   ">
            <div className="flex gap-5 ">
              <div
                className="bg-brandSecondary w-[97px] h-[97px] flex justify-center items-center rounded relative "
                style={{ boxShadow: "0px 32px 54px 0px #258AFF39" }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.1264 18.7269C17.6 17.7491 14.2784 17.7693 10.8656 18.7179C9.1512 19.1936 8 20.6404 8 22.3176V23.2496C8 23.6638 8.3576 24 8.8 24H23.2C23.6424 24 24 23.6638 24 23.2496V22.3281C24 20.6509 22.8456 19.2034 21.1264 18.7269Z"
                    fill="white"
                  />
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5 16C19.0343 16 21 13.1054 21 10.6154C21 8.07 18.9818 6 16.5 6C14.0182 6 12 8.07 12 10.6154C12 13.1054 13.9657 16 16.5 16Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.2135 28C29.5411 28.7998 28.7999 29.5408 28 30.213L33.7865 36L36 33.7862L30.2135 28Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5 0C25.5978 0 33 7.40143 33 16.5C33 25.5986 25.5978 33 16.5 33C7.40221 33 0 25.5986 0 16.5C0 7.40143 7.40221 0 16.5 0ZM1.57143 16.5C1.57143 24.7319 8.26807 31.4286 16.5 31.4286C24.7319 31.4286 31.4286 24.7319 31.4286 16.5C31.4286 8.26807 24.7319 1.57143 16.5 1.57143C8.26807 1.57143 1.57143 8.26807 1.57143 16.5Z"
                    fill="white"
                  />
                </svg>

                {/* mobile */}
                <svg
                  width="252"
                  height="198"
                  viewBox="0 0 252 198"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[130px] -top-[30px] hidden sm:block lg:hidden rotate-[10deg]"
                >
                  <path
                    d="M11.6252 70.7864C11.6252 70.7864 122.254 36.7247 231.137 127.753"
                    stroke="#8C97AC"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="0 11"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M227.704 133.904L226.945 131.315L234.42 129.773L232.273 122.449L234.915 121.904L237.442 130.522C237.652 131.237 237.23 131.939 236.5 132.089L227.704 133.904Z"
                    fill="#8C97AC"
                  />
                </svg>
              </div>

              <svg
                width="224"
                height="89"
                viewBox="0 0 224 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block flex-1 mt-5"
              >
                <path
                  d="M2 2C2 2 73.0845 93.3555 214.488 81.2422"
                  stroke="#8C97AC"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0 11"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M216.984 89L215 87.1718L220.613 82L215 76.8282L216.984 75L223.589 81.0859C224.137 81.5908 224.137 82.4092 223.589 82.9141L216.984 89Z"
                  fill="#8C97AC"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-5 ">
              <h6 className="font-bold text-[24px]">Find Leads</h6>
              <p className="text-brandMuted">
                We’ve helped over 2,500 job seekers to get into the most popular
                tech teams.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-10 sm:translate-y-[150px] md:translate-y-[50px]">
            <div className="flex gap-5 sm:justify-center">
              <div
                className="bg-brandSecondary w-[97px] h-[97px] flex justify-center items-center rounded relative "
                style={{ boxShadow: "0px 32px 54px 0px #258AFF39" }}
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 6C7.44772 6 7 5.70152 7 5.33333V0.666667C7 0.298477 7.44772 0 8 0C8.55228 0 9 0.298477 9 0.666667V5.33333C9 5.70152 8.55228 6 8 6Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 6C23.4477 6 23 5.70152 23 5.33333V0.666667C23 0.298477 23.4477 0 24 0C24.5523 0 25 0.298477 25 0.666667V5.33333C25 5.70152 24.5523 6 24 6Z"
                    fill="white"
                  />
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.4909 27.6316H2.18182C1.78016 27.6316 1.45455 27.3252 1.45455 26.9474V11.2105C1.45455 10.8326 1.78016 10.5263 2.18182 10.5263H29.8182C30.2198 10.5263 30.5455 10.8326 30.5455 11.2105V19.2753C31.0768 19.6029 31.5651 19.9885 32 20.4241V4.36842C32 3.61266 31.3488 3 30.5455 3H26.1818V5.73684C26.1818 6.87048 25.205 7.78947 24 7.78947C22.795 7.78947 21.8182 6.87048 21.8182 5.73684V3H10.1818V5.73684C10.1818 6.87048 9.20498 7.78947 8 7.78947C6.79502 7.78947 5.81818 6.87048 5.81818 5.73684V3H1.45455C0.651222 3 0 3.61266 0 4.36842V27.6316C0 28.3873 0.651222 29 1.45455 29H19.0618C18.824 28.5627 18.6328 28.1043 18.4909 27.6316Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.5 32C22.9101 32 20 29.0899 20 25.5C20.004 21.9118 22.9118 19.004 26.5 19C30.0899 19 33 21.9101 33 25.5C33 29.0899 30.0899 32 26.5 32ZM30.6217 23.8439C30.9037 23.5619 30.9037 23.1048 30.6217 22.8227C30.3397 22.5408 29.8825 22.5408 29.6005 22.8227L25.0556 27.3677L23.3995 25.7116C23.1161 25.4379 22.6657 25.4418 22.3871 25.7204C22.1085 25.999 22.1046 26.4494 22.3783 26.7328L24.5449 28.8995C24.827 29.1814 25.2841 29.1814 25.5662 28.8995L30.6217 23.8439Z"
                    fill="white"
                  />
                </svg>
              </div>

              <svg
                width="252"
                height="198"
                viewBox="0 0 252 198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block flex-1 -mt-10 translate-x-3"
              >
                <path
                  d="M11.6252 70.7864C11.6252 70.7864 122.254 36.7247 231.137 127.753"
                  stroke="#8C97AC"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="0 11"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M227.704 133.904L226.945 131.315L234.42 129.773L232.273 122.449L234.915 121.904L237.442 130.522C237.652 131.237 237.23 131.939 236.5 132.089L227.704 133.904Z"
                  fill="#8C97AC"
                />
              </svg>
            </div>

            <div className="flex flex-col sm:items-center md:items-start  gap-5 lg:-mt-14">
              <h6 className="font-bold text-[24px]">Book Appointments</h6>
              <p className="text-brandMuted">
                We’ve helped over 2,500 job seekers <br /> to get into the most
                popular tech teams.
              </p>
            </div>
          </div>
          {/*  3 */}
          <div className="flex flex-col gap-10 sm:translate-y-[150px] md:translate-y-[110px]">
            <div className="flex gap-5">
              <div
                className="bg-brandSecondary w-[97px] h-[97px] flex justify-center items-center rounded relative "
                style={{ boxShadow: "0px 32px 54px 0px #258AFF39" }}
              >
                <svg
                  width="46"
                  height="36"
                  viewBox="0 0 46 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.631 32.841L0 22L3 19L11 24L34 0L37 2L13.65 32.653C13.2981 33.1148 12.7629 33.4009 12.1835 33.437C11.604 33.4731 11.0374 33.2556 10.631 32.841Z"
                    fill="white"
                  />
                  <path
                    opacity="0.497489"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45 9H40C39.4477 9 39 8.55228 39 8C39 7.44772 39.4477 7 40 7H45C45.5523 7 46 7.44772 46 8C46 8.55228 45.5523 9 45 9Z"
                    fill="white"
                  />
                  <path
                    opacity="0.497489"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45 18H33C32.4477 18 32 17.5523 32 17C32 16.4477 32.4477 16 33 16H45C45.5523 16 46 16.4477 46 17C46 17.5523 45.5523 18 45 18Z"
                    fill="white"
                  />
                  <path
                    opacity="0.497489"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45 27H26C25.4477 27 25 26.5523 25 26C25 25.4477 25.4477 25 26 25H45C45.5523 25 46 25.4477 46 26C46 26.5523 45.5523 27 45 27Z"
                    fill="white"
                  />
                  <path
                    opacity="0.497489"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45 36H19C18.4477 36 18 35.5523 18 35C18 34.4477 18.4477 34 19 34H45C45.5523 34 46 34.4477 46 35C46 35.5523 45.5523 36 45 36Z"
                    fill="white"
                  />
                </svg>

                {/* mobile */}
                <svg
                  width="252"
                  height="198"
                  viewBox="0 0 252 198"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[100px] -top-[80px] rotate-[145deg] hidden sm:block lg:hidden "
                >
                  <path
                    d="M11.6252 70.7864C11.6252 70.7864 122.254 36.7247 231.137 127.753"
                    stroke="#8C97AC"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="0 11"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M227.704 133.904L226.945 131.315L234.42 129.773L232.273 122.449L234.915 121.904L237.442 130.522C237.652 131.237 237.23 131.939 236.5 132.089L227.704 133.904Z"
                    fill="#8C97AC"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col  justify-center gap-5 ">
              <h6 className="font-bold text-[24px]">Get Paid</h6>
              <p className="text-brandMuted">
                We’ve helped over 2,500 job seekers to get into the most popular
                tech teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
