import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col-reverse items-center justify-between md:flex-row">
      <div className="w-[50%] space-y-4">
        <h1 className="align-middle text-[150px] leading-[100%] font-black tracking-[0%] uppercase">
          Welcome to VCAD
        </h1>
        <p className="text-2xl">
          Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas. We work with a
          variety of experts and esteemed companies using a collaborative
          approach. Located in London's Design District, we have valuable
          connections within our industry. Search our latest courses.
        </p>
        <Button>Apply Now</Button>
      </div>
      <Image src="/hero.svg" alt="Hero image" width={928} height={885} />
    </section>
  );
};

export default HeroSection;
