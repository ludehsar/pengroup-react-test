import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CampusSection = () => {
  return (
    <section id="campuses" className="relative mt-[200px] flex h-[771px] flex-col items-center justify-end gap-12 bg-[#061665CC] py-[150px]">
      <div className="absolute top-[-100px] left-[50%] flex translate-x-[-50%] items-center justify-center gap-2">
        <div className="relative h-[484px] w-[245px] overflow-hidden">
          <div className="bg-primary absolute top-0 left-0 flex w-full items-center justify-between px-2 py-1 text-xl font-black text-[#061665]">
            Canary Wharf <ArrowRight />
          </div>
          <Image
            src="/campus-1.jpg"
            alt="Campus 1"
            width={900}
            height={484}
            className="h-full object-cover"
          />
        </div>
        <div className="relative h-[484px] w-[245px] overflow-hidden">
          <div className="bg-primary absolute top-0 left-0 flex w-full items-center justify-between px-2 py-1 text-xl font-black text-[#061665]">
            Borough <ArrowRight />
          </div>
          <Image
            src="/campus-2.png"
            alt="Campus 1"
            width={900}
            height={484}
            className="h-full object-cover"
          />
        </div>
        <div className="relative h-[484px] w-[245px] overflow-hidden">
          <div className="bg-primary absolute top-0 left-0 flex w-full items-center justify-between px-2 py-1 text-xl font-black text-[#061665]">
            Manchester <ArrowRight />
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
      <div className="absolute top-[200px] left-[120px] rotate-[-13.87deg] bg-[#FF379E] px-4 py-2 text-3xl leading-[100%] font-black tracking-[0%] uppercase">
        Canary Wharf
      </div>
      <div className="absolute bottom-[200px] left-[120px] rotate-[19.25deg] bg-[#8EC8EE] px-4 py-2 text-3xl leading-[100%] font-black tracking-[0%] text-[#061665] uppercase">
        Manchester
      </div>
      <div className="absolute top-[50%] right-[120px] rotate-[16.44deg] bg-[#00FFD2] px-4 py-2 text-3xl leading-[100%] font-black tracking-[0%] text-[#061665] uppercase">
        Borough
      </div>
      <h1 className="relative text-[64px] leading-[100%] font-black tracking-[0%] uppercase">
        Campuses
        <div className="absolute bottom-3 z-[-1] h-[26px] w-full bg-[#8EC8EE]" />
      </h1>
      <p className="max-w-[752px] text-2xl">
        We have multiple locations across the UK, all strategically situated in
        vibrant city centers and easily accessible by public transport.
      </p>
    </section>
  );
};

export default CampusSection;
