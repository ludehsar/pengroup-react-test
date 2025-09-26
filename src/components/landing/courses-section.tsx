import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const CoursesSection = () => {
  return (
    <section id="courses" className="flex items-start justify-between gap-8 py-20">
      <Image
        src="/course-section-img.jpg"
        alt="Course"
        width={677}
        height={709}
        className="max-h-[709px] border border-white object-cover"
      />
      <div className="w-full max-w-[791px] flex-1 space-y-8">
        <h2 className="mb-8 align-middle text-[64px] leading-[100%] font-black tracking-[0%] uppercase">
          What will you{" "}
          <span className="relative">
            study?
            <div className="absolute bottom-3 z-[-1] h-[22px] w-full bg-[#061665]" />
          </span>
        </h2>
        <p className="text-2xl">
          If you join Victoria College of Arts and Design, you can expect the
          highest calibre of teaching, cutting-edge facilities, and exceptional
          industry connections, which will help to prepare you for a rewarding
          career in the creative and tech industries.
        </p>
        <div className="flex items-center gap-4">
          <Button>View Courses</Button>
          <Button variant="outlined">Download Prospectus</Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
