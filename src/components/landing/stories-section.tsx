import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const StoriesSection = () => {
  return (
    <section id="stories" className="space-y-8 py-10 lg:space-y-12 lg:py-20">
      <h2 className="align-middle text-3xl leading-[100%] font-black tracking-[0%] uppercase sm:text-4xl md:text-5xl lg:text-[64px]">
        <span className="relative">
          Stories
          <div className="absolute bottom-0 z-[-1] h-[22px] w-full bg-[#061665] lg:bottom-3" />
        </span>
      </h2>
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-8">
        <Image
          src="/stories-1.jpg"
          alt="Stories 1"
          width={800}
          height={900}
          className="h-[400px] w-full border border-white object-cover lg:h-[709px] lg:w-[677px]"
        />
        <div className="w-full max-w-[791px] flex-1 space-y-8">
          <h3 className="mb-4 align-middle text-2xl leading-[100%] font-black tracking-[0%] uppercase sm:text-3xl md:text-4xl lg:mb-8 lg:text-[64px]">
            Induction in VCAD Canary Wharf campus
          </h3>
          <p className="text-lg lg:text-2xl">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:gap-4">
            <Button>Read article</Button>
            <Button variant="outlined">View full gallery</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-8">
        <Image
          src="/stories-2.jpg"
          alt="Stories 2"
          width={800}
          height={900}
          className="h-[400px] w-full border border-white object-cover lg:h-[709px] lg:w-[677px]"
        />
        <div className="w-full max-w-[791px] flex-1 space-y-8">
          <h3 className="mb-4 align-middle text-2xl leading-[100%] font-black tracking-[0%] uppercase sm:text-3xl md:text-4xl lg:mb-8 lg:text-[64px]">
            Be ready for applying! Five tips to{" "}
            <span className="text-accent">build your portfolio</span>
          </h3>
          <p className="text-lg lg:text-2xl">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:gap-4">
            <Button>Read article</Button>
            <Button variant="outlined">View full gallery</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
