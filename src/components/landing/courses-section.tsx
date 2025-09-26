import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const CoursesSection = () => {
  return (
    <section
      id="courses"
      className="flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:gap-8 lg:py-20"
    >
      <Image
        src="/course-section-img.jpg"
        alt="Course"
        width={677}
        height={709}
        className="h-auto w-full border border-white object-cover lg:max-h-[709px] lg:w-[677px]"
      />
      <div className="w-full max-w-[791px] flex-1 space-y-8">
        <h2 className="mb-4 align-middle text-3xl leading-[100%] font-black tracking-[0%] uppercase sm:text-4xl md:text-5xl lg:mb-8 lg:text-[64px]">
          What will you <br />
          <span className="relative">
            study?
            <div className="absolute bottom-0 z-[-1] h-[22px] w-full bg-[#061665] lg:bottom-3" />
          </span>
        </h2>
        <p className="text-lg lg:text-2xl">
          If you join Victoria College of Arts and Design, you can expect the
          highest calibre of teaching, cutting-edge facilities, and exceptional
          industry connections, which will help to prepare you for a rewarding
          career in the creative and tech industries.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row lg:gap-4">
          <Button>View Courses</Button>
          <Button variant="outlined">Download Prospectus</Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
