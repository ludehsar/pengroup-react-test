import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CampusSection = () => {
  return (
    <section
      id="campuses"
      className="relative mt-20 flex min-h-[400px] flex-col items-center justify-end gap-6 bg-[#061665CC] py-20 lg:mt-[200px] lg:h-[771px] lg:gap-12 lg:py-[150px]"
    >
      <div className="absolute top-[-60px] left-[50%] z-[3] flex max-w-full translate-x-[-50%] items-center justify-center gap-1 overflow-x-auto lg:top-[-100px] lg:gap-2">
        <div className="relative h-[200px] w-[120px] flex-shrink-0 overflow-hidden lg:h-[484px] lg:w-[245px]">
          <div className="bg-primary absolute top-0 left-0 flex w-full items-center justify-between px-1 py-1 text-xs font-black text-[#061665] lg:px-2 lg:text-xl">
            <span className="truncate">Canary Wharf</span>{" "}
            <ArrowRight className="h-3 w-3 flex-shrink-0 lg:h-6 lg:w-6" />
          </div>
          <Image
            src="/campus-1.jpg"
            alt="Campus 1"
            width={900}
            height={484}
            className="h-full object-cover"
          />
        </div>
        <div className="relative h-[200px] w-[120px] flex-shrink-0 overflow-hidden lg:h-[484px] lg:w-[245px]">
          <div className="bg-primary absolute top-0 left-0 flex w-full items-center justify-between px-1 py-1 text-xs font-black text-[#061665] lg:px-2 lg:text-xl">
            <span className="truncate">Borough</span>{" "}
            <ArrowRight className="h-3 w-3 flex-shrink-0 lg:h-6 lg:w-6" />
          </div>
          <Image
            src="/campus-2.png"
            alt="Campus 1"
            width={900}
            height={484}
            className="h-full object-cover"
          />
        </div>
        <div className="relative h-[200px] w-[120px] flex-shrink-0 overflow-hidden lg:h-[484px] lg:w-[245px]">
          <div className="bg-primary absolute top-0 left-0 flex w-full items-center justify-between px-1 py-1 text-xs font-black text-[#061665] lg:px-2 lg:text-xl">
            <span className="truncate">Manchester</span>{" "}
            <ArrowRight className="h-3 w-3 flex-shrink-0 lg:h-6 lg:w-6" />
          </div>
          <Image
            src="/campus-3.png"
            alt="Campus 1"
            width={900}
            height={484}
            className="h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute top-[80px] left-4 hidden rotate-[-13.87deg] bg-[#FF379E] px-2 py-1 text-sm leading-[100%] font-black tracking-[0%] uppercase lg:top-[200px] lg:left-[120px] lg:px-4 lg:py-2 lg:text-3xl xl:block">
        Canary Wharf
      </div>
      <div className="absolute bottom-[80px] left-4 hidden rotate-[19.25deg] bg-[#8EC8EE] px-2 py-1 text-sm leading-[100%] font-black tracking-[0%] text-[#061665] uppercase lg:bottom-[200px] lg:left-[120px] lg:px-4 lg:py-2 lg:text-3xl xl:block">
        Manchester
      </div>
      <div className="absolute top-[50%] right-4 hidden rotate-[16.44deg] bg-[#00FFD2] px-2 py-1 text-sm leading-[100%] font-black tracking-[0%] text-[#061665] uppercase lg:right-[120px] lg:px-4 lg:py-2 lg:text-3xl xl:block">
        Borough
      </div>
      <h1 className="relative z-[3] text-3xl leading-[100%] font-black tracking-[0%] uppercase sm:text-4xl md:text-5xl lg:text-[64px]">
        Campuses
        <div className="absolute bottom-0 z-[-1] h-[26px] w-full bg-[#8EC8EE] lg:bottom-3" />
      </h1>
      <p className="z-[3] max-w-[752px] px-4 text-center text-lg lg:px-0 lg:text-2xl">
        We have multiple locations across the UK, all strategically situated in
        vibrant city centers and easily accessible by public transport.
      </p>
    </section>
  );
};

export default CampusSection;
