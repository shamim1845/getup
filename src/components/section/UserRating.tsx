import Image from "next/image";
import React from "react";

const UserRating = () => {
  return (
    <section className="w-full max-w-[1114px] mx-auto py-[100px] md:pt-0">
      <div className="section_padding flex flex-col md:flex-row justify-between gap-20 lg:gap-40">
        <div className="flex-1 flex justify-between sm:justify-evenly md:justify-between">
          <div className="flex flex-col gap-5">
            <h4 className="heading1">10k</h4>
            <div className="flex gap-2">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6774 1.29938C12.9141 -0.432673 10.0445 -0.432673 8.2809 1.29938C8.18313 1.39542 8.08955 1.49658 8.00013 1.60253C7.91072 1.49624 7.81713 1.39542 7.71901 1.29904C5.95577 -0.433014 3.08615 -0.433014 1.32256 1.29904C-0.441028 3.0311 -0.44068 5.84997 1.32256 7.58237L7.75381 13.8999C7.82165 13.9665 7.91072 14 7.99978 14C8.08885 14 8.17792 13.9665 8.24576 13.8999L14.677 7.58237C16.4409 5.85031 16.4409 3.03144 14.6774 1.29938Z"
                  fill="#FF523D"
                />
              </svg>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6774 1.29938C12.9141 -0.432673 10.0445 -0.432673 8.2809 1.29938C8.18313 1.39542 8.08955 1.49658 8.00013 1.60253C7.91072 1.49624 7.81713 1.39542 7.71901 1.29904C5.95577 -0.433014 3.08615 -0.433014 1.32256 1.29904C-0.441028 3.0311 -0.44068 5.84997 1.32256 7.58237L7.75381 13.8999C7.82165 13.9665 7.91072 14 7.99978 14C8.08885 14 8.17792 13.9665 8.24576 13.8999L14.677 7.58237C16.4409 5.85031 16.4409 3.03144 14.6774 1.29938Z"
                  fill="#FF523D"
                />
              </svg>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6774 1.29938C12.9141 -0.432673 10.0445 -0.432673 8.2809 1.29938C8.18313 1.39542 8.08955 1.49658 8.00013 1.60253C7.91072 1.49624 7.81713 1.39542 7.71901 1.29904C5.95577 -0.433014 3.08615 -0.433014 1.32256 1.29904C-0.441028 3.0311 -0.44068 5.84997 1.32256 7.58237L7.75381 13.8999C7.82165 13.9665 7.91072 14 7.99978 14C8.08885 14 8.17792 13.9665 8.24576 13.8999L14.677 7.58237C16.4409 5.85031 16.4409 3.03144 14.6774 1.29938Z"
                  fill="#FF523D"
                />
              </svg>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6774 1.29938C12.9141 -0.432673 10.0445 -0.432673 8.2809 1.29938C8.18313 1.39542 8.08955 1.49658 8.00013 1.60253C7.91072 1.49624 7.81713 1.39542 7.71901 1.29904C5.95577 -0.433014 3.08615 -0.433014 1.32256 1.29904C-0.441028 3.0311 -0.44068 5.84997 1.32256 7.58237L7.75381 13.8999C7.82165 13.9665 7.91072 14 7.99978 14C8.08885 14 8.17792 13.9665 8.24576 13.8999L14.677 7.58237C16.4409 5.85031 16.4409 3.03144 14.6774 1.29938Z"
                  fill="#FF523D"
                />
              </svg>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6774 1.29938C12.9141 -0.432673 10.0445 -0.432673 8.2809 1.29938C8.18313 1.39542 8.08955 1.49658 8.00013 1.60253C7.91072 1.49624 7.81713 1.39542 7.71901 1.29904C5.95577 -0.433014 3.08615 -0.433014 1.32256 1.29904C-0.441028 3.0311 -0.44068 5.84997 1.32256 7.58237L7.75381 13.8999C7.82165 13.9665 7.91072 14 7.99978 14C8.08885 14 8.17792 13.9665 8.24576 13.8999L14.677 7.58237C16.4409 5.85031 16.4409 3.03144 14.6774 1.29938Z"
                  fill="#FF523D"
                />
              </svg>
            </div>
            <div>
              <p>Active Downloads</p>
              <p className="text-brandSecondary">On Websites</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="heading1">4.7</h4>
            <div className="flex gap-2">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0361 5.83232L11.7083 5.05825L9.32661 0.230548C9.25881 0.115239 9.13504 0.0444336 9.00127 0.0444336C8.8675 0.0444336 8.74373 0.115239 8.67593 0.230548L6.2931 5.05716L0.96387 5.83232C0.827167 5.85205 0.713515 5.94768 0.670694 6.07899C0.627872 6.21031 0.663304 6.35455 0.762096 6.45107L4.61831 10.2093L3.70814 15.5157C3.68492 15.6517 3.74086 15.7891 3.85249 15.8703C3.96413 15.9514 4.11212 15.9622 4.23435 15.8982L9 13.393L13.7656 15.8971C13.8879 15.9612 14.0359 15.9503 14.1475 15.8692C14.2591 15.7881 14.3151 15.6506 14.2919 15.5146L13.3817 10.2093L17.2379 6.45107C17.3367 6.3546 17.3722 6.21042 17.3294 6.07913C17.2867 5.94783 17.1731 5.85217 17.0365 5.83232H17.0361Z"
                  fill="#F5A623"
                />
              </svg>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0361 5.83232L11.7083 5.05825L9.32661 0.230548C9.25881 0.115239 9.13504 0.0444336 9.00127 0.0444336C8.8675 0.0444336 8.74373 0.115239 8.67593 0.230548L6.2931 5.05716L0.96387 5.83232C0.827167 5.85205 0.713515 5.94768 0.670694 6.07899C0.627872 6.21031 0.663304 6.35455 0.762096 6.45107L4.61831 10.2093L3.70814 15.5157C3.68492 15.6517 3.74086 15.7891 3.85249 15.8703C3.96413 15.9514 4.11212 15.9622 4.23435 15.8982L9 13.393L13.7656 15.8971C13.8879 15.9612 14.0359 15.9503 14.1475 15.8692C14.2591 15.7881 14.3151 15.6506 14.2919 15.5146L13.3817 10.2093L17.2379 6.45107C17.3367 6.3546 17.3722 6.21042 17.3294 6.07913C17.2867 5.94783 17.1731 5.85217 17.0365 5.83232H17.0361Z"
                  fill="#F5A623"
                />
              </svg>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0361 5.83232L11.7083 5.05825L9.32661 0.230548C9.25881 0.115239 9.13504 0.0444336 9.00127 0.0444336C8.8675 0.0444336 8.74373 0.115239 8.67593 0.230548L6.2931 5.05716L0.96387 5.83232C0.827167 5.85205 0.713515 5.94768 0.670694 6.07899C0.627872 6.21031 0.663304 6.35455 0.762096 6.45107L4.61831 10.2093L3.70814 15.5157C3.68492 15.6517 3.74086 15.7891 3.85249 15.8703C3.96413 15.9514 4.11212 15.9622 4.23435 15.8982L9 13.393L13.7656 15.8971C13.8879 15.9612 14.0359 15.9503 14.1475 15.8692C14.2591 15.7881 14.3151 15.6506 14.2919 15.5146L13.3817 10.2093L17.2379 6.45107C17.3367 6.3546 17.3722 6.21042 17.3294 6.07913C17.2867 5.94783 17.1731 5.85217 17.0365 5.83232H17.0361Z"
                  fill="#F5A623"
                />
              </svg>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0361 5.83232L11.7083 5.05825L9.32661 0.230548C9.25881 0.115239 9.13504 0.0444336 9.00127 0.0444336C8.8675 0.0444336 8.74373 0.115239 8.67593 0.230548L6.2931 5.05716L0.96387 5.83232C0.827167 5.85205 0.713515 5.94768 0.670694 6.07899C0.627872 6.21031 0.663304 6.35455 0.762096 6.45107L4.61831 10.2093L3.70814 15.5157C3.68492 15.6517 3.74086 15.7891 3.85249 15.8703C3.96413 15.9514 4.11212 15.9622 4.23435 15.8982L9 13.393L13.7656 15.8971C13.8879 15.9612 14.0359 15.9503 14.1475 15.8692C14.2591 15.7881 14.3151 15.6506 14.2919 15.5146L13.3817 10.2093L17.2379 6.45107C17.3367 6.3546 17.3722 6.21042 17.3294 6.07913C17.2867 5.94783 17.1731 5.85217 17.0365 5.83232H17.0361Z"
                  fill="#F5A623"
                />
              </svg>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0361 5.83232L11.7083 5.05825L9.32661 0.230548C9.25881 0.115239 9.13504 0.0444336 9.00127 0.0444336C8.8675 0.0444336 8.74373 0.115239 8.67593 0.230548L6.2931 5.05716L0.96387 5.83232C0.827167 5.85205 0.713515 5.94768 0.670694 6.07899C0.627872 6.21031 0.663304 6.35455 0.762096 6.45107L4.61831 10.2093L3.70814 15.5157C3.68492 15.6517 3.74086 15.7891 3.85249 15.8703C3.96413 15.9514 4.11212 15.9622 4.23435 15.8982L9 13.393L13.7656 15.8971C13.8879 15.9612 14.0359 15.9503 14.1475 15.8692C14.2591 15.7881 14.3151 15.6506 14.2919 15.5146L13.3817 10.2093L17.2379 6.45107C17.3367 6.3546 17.3722 6.21042 17.3294 6.07913C17.2867 5.94783 17.1731 5.85217 17.0365 5.83232H17.0361Z"
                  fill="#F5A623"
                />
              </svg>
            </div>
            <div>
              <p>1,938 Rating</p>
              <p className="text-brandSecondary">WordPress Community</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-10">
          <h5 className="font-bold text-[34px] leading-[45px] -tracking-[0.59px]">
            Trusted by 25,000+ happy Marketers and WordPress users since 2018.
          </h5>
          <div className="flex flex-col gap-10">
            <p className="text-brandMuted">Also featured in</p>
            <div className=" flex justify-between flex-wrap gap-5">
              <Image src={"/slack.svg"} alt="slack" width={129} height={34} />
              <Image
                src={"/microsoft.svg"}
                alt="microsoft"
                width={156}
                height={33}
              />
              <Image
                src={"/facebook.svg"}
                alt="facebook"
                width={150}
                height={29}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRating;
