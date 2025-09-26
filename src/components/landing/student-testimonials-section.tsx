import React from "react";
import TestimonialCard from "./testimonial-card";
import { Testimonial } from "../../app/api/testimonials/route";

const StudentTestimonialsSection = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/testimonials");

    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const testimonials: Testimonial[] = await response.json();

    return (
      <section
        id="student-testimonials"
        className="relative overflow-hidden py-10 lg:py-20"
      >
        <h2 className="mb-8 align-middle text-3xl leading-[100%] font-black tracking-[0%] uppercase sm:text-4xl md:text-5xl lg:mb-[120px] lg:text-[64px]">
          Student <br />
          <span className="relative">
            Testimonials
            <div className="absolute bottom-0 z-[-1] h-[22px] w-full bg-[#8EC8EE] lg:bottom-3" />
          </span>
        </h2>

        <div className="no-scrollbar flex gap-20 overflow-x-scroll p-20 lg:gap-40">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              id={testimonial.id}
              message={testimonial.message}
              name={testimonial.name}
              age={testimonial.age}
              course={testimonial.course}
              facebookProfile={testimonial.facebookProfile}
              linkedinProfile={testimonial.linkedinProfile}
              instagramProfile={testimonial.instagramProfile}
              photoUrl={testimonial.photoUrl}
            />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return (
      <section
        id="student-testimonials"
        className="relative overflow-hidden py-10 lg:py-20"
      >
        <h2 className="mb-8 align-middle text-3xl leading-[100%] font-black tracking-[0%] uppercase sm:text-4xl md:text-5xl lg:mb-[120px] lg:text-[64px]">
          Student <br />
          <span className="relative">
            Testimonials
            <div className="absolute bottom-0 z-[-1] h-[22px] w-full bg-[#8EC8EE] lg:bottom-3" />
          </span>
        </h2>

        <div className="flex items-center justify-center py-20">
          <p className="text-xl text-white">
            Unable to load testimonials at this time.
          </p>
        </div>
      </section>
    );
  }
};

export default StudentTestimonialsSection;
