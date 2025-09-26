import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const PartnerInstitutionSection = () => {
  return (
    <section
      id="partner-institutions"
      className="flex flex-col items-start justify-between gap-6 py-20 lg:flex-row lg:gap-8 lg:py-60"
    >
      <div className="flex h-full w-full max-w-[722px] flex-1 flex-col items-start justify-between">
        <h2 className="mb-8 align-middle text-3xl leading-[100%] font-black tracking-[0%] uppercase sm:text-4xl md:text-5xl lg:mb-[120px] lg:text-[64px]">
          Partner <br />
          <span className="relative">
            Institutions
            <div className="absolute bottom-0 z-[-1] h-[22px] w-full bg-[#E018E0] lg:bottom-3" />
          </span>
        </h2>
        <p className="w-full text-lg break-words lg:text-2xl">
          Pur partners description here
          jfslkjfslkjafklsajfklsajflkjsadlkj`ldkjakldjkldjkldjk`djkl`
          jdkls`jdkljs`kdljskldjksljdklsjdkjsdkjsdkjskdjsljdklsjdklsj
          dksjdksjkdjskldjklsdjksldjksldjklsjdksjdksjdksjdkjskdjskjdk
          lsjdksjdkjskdjskjdksjdkjskdjskdjskdksjdks
        </p>
      </div>
      <div className="mt-8 flex flex-1 flex-col items-start justify-start space-y-8 lg:mt-0 lg:space-y-16">
        <Image
          src="/ravensbourne-logo.svg"
          alt="ravensbourne-logo"
          width={685}
          height={167}
          className="h-auto w-full max-w-[400px] lg:w-[685px]"
        />
        <Image
          src="/aup-logo.svg"
          alt="aup-logo"
          width={495}
          height={168}
          className="h-auto w-full max-w-[300px] lg:w-[495px]"
        />
      </div>
    </section>
  );
};

export default PartnerInstitutionSection;
