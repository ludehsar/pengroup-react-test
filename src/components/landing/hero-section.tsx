import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col-reverse items-center justify-between px-4 pb-16 md:flex-row md:px-0">
      <div className="w-full max-w-[820px] space-y-8">
        <h1 className="align-middle text-4xl leading-[100%] font-black tracking-[0%] uppercase sm:text-6xl lg:text-[150px]">
          Welcome to VCAD
        </h1>
        <p className="text-lg md:text-2xl">
          Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas. We work with a
          variety of experts and esteemed companies using a collaborative
          approach. Located in London's Design District, we have valuable
          connections within our industry. Search our latest courses.
        </p>
        <Button>Apply Now</Button>
      </div>
      <div className="w-full">
        <Image
          src="/hero.svg"
          alt="Hero image"
          width={928}
          height={885}
          className="h-auto w-full max-w-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
