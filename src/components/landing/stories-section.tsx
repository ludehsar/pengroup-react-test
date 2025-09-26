import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const StoriesSection = () => {
  return (
    <section className="space-y-12 py-20">
      <h2 className="align-middle text-[64px] leading-[100%] font-black tracking-[0%] uppercase">
        <span className="relative">
          Stories
          <div className="absolute bottom-3 z-[-1] h-[22px] w-full bg-[#061665]" />
        </span>
      </h2>
      <div className="flex items-start justify-between gap-8">
        <Image
          src="/stories-1.jpg"
          alt="Stories 1"
          width={800}
          height={900}
          className="h-[709px] w-[677px] border border-white object-cover"
        />
        <div className="w-full max-w-[791px] flex-1 space-y-8">
          <h3 className="mb-8 align-middle text-[64px] leading-[100%] font-black tracking-[0%] uppercase">
            Induction in VCAD Canary Wharf campus
          </h3>
          <p className="text-2xl">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex items-center gap-4">
            <Button>Read article</Button>
            <Button variant="outlined">View full gallery</Button>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-8">
        <Image
          src="/stories-2.jpg"
          alt="Stories 2"
          width={800}
          height={900}
          className="h-[709px] w-[677px] border border-white object-cover"
        />
        <div className="w-full max-w-[791px] flex-1 space-y-8">
          <h3 className="mb-8 align-middle text-[64px] leading-[100%] font-black tracking-[0%] uppercase">
            Be ready for applying! Five tips to{" "}
            <span className="text-accent">build your portfolio</span>
          </h3>
          <p className="text-2xl">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex items-center gap-4">
            <Button>Read article</Button>
            <Button variant="outlined">View full gallery</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
