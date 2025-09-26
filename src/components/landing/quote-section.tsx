import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const QuoteSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 py-10 lg:py-20 pb-20 lg:pb-[200px]">
      <figure className="mx-auto max-w-screen-md space-y-[40px]">
        <svg
          width="72"
          height="55"
          viewBox="0 0 72 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.931819 54.3623V37.3168C0.931819 32.6767 1.87879 28.0129 3.77273 23.3254C5.66667 18.6379 8.05777 14.3055 10.946 10.3282C13.8343 6.35094 16.7462 3.13124 19.6818 0.669117L35.875 8.90775C33.4129 13.0271 31.4953 17.3358 30.1222 21.8339C28.7964 26.332 28.1572 31.493 28.2045 37.3168V54.3623H0.931819ZM36.4432 54.3623V37.3168C36.4432 32.6767 37.3902 28.0129 39.2841 23.3254C41.178 18.6379 43.5691 14.3055 46.4574 10.3282C49.3456 6.35094 52.2576 3.13124 55.1932 0.669117L71.3864 8.90775C68.9242 13.0271 67.0066 17.3358 65.6335 21.8339C64.3078 26.332 63.6686 31.493 63.7159 37.3168V54.3623H36.4432Z"
            fill="white"
          />
        </svg>
        <blockquote>
          <p className="ml-4 lg:ml-[72px] w-full max-w-[535px] align-middle text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[100%] font-black tracking-[0%]">
            A World where <span className="text-primary">EVERYONE has</span> the{" "}
            <span className="text-primary">opportunity</span> to fulfil their
            potential
          </p>
        </blockquote>
        <svg
          width="71"
          height="55"
          viewBox="0 0 71 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4 lg:mr-[82px] ml-auto"
        >
          <path
            d="M70.5316 0.984375V18.0298C70.5316 22.67 69.5846 27.3338 67.6907 32.0213C65.7967 36.7088 63.4056 41.0412 60.5174 45.0185C57.6291 48.9957 54.7172 52.2154 51.7816 54.6776L35.5884 46.4389C38.0505 42.3196 39.9681 38.0109 41.3412 33.5128C42.667 29.0147 43.3062 23.8537 43.2588 18.0298V0.984375H70.5316ZM35.0202 0.984375V18.0298C35.0202 22.67 34.0732 27.3338 32.1793 32.0213C30.2853 36.7088 27.8942 41.0412 25.006 45.0185C22.1177 48.9957 19.2058 52.2154 16.2702 54.6776L0.0770104 46.4389C2.53914 42.3196 4.45675 38.0109 5.82985 33.5128C7.15561 29.0147 7.79482 23.8537 7.74747 18.0298V0.984375H35.0202Z"
            fill="white"
          />
        </svg>
      </figure>
      <div className="relative w-full flex-1">
        <Image
          src="/quote-section-img.png"
          alt="Quote section"
          width={1058}
          height={585}
          className="z-0 object-cover"
        />
        <Image
          src="/play-btn.svg"
          alt="Play button"
          className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]"
          width={130}
          height={130}
        />
        <div className="text-primary absolute right-0 lg:right-[-50px] bottom-[-60px] lg:bottom-[-180px] z-10 flex flex-col lg:flex-row w-full max-w-full lg:w-[852px] items-center justify-between bg-[#061665] px-4 lg:px-12 py-8 lg:py-16 gap-4 lg:gap-0">
          <div className="max-w-[430px] align-middle text-xl sm:text-2xl lg:text-[40px] leading-[100%] font-black tracking-[0%] text-center lg:text-left">
            There's Still Time <br />
            to Apply for September 2025
          </div>
          <Button>View Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
