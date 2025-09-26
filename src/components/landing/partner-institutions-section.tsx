import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const PartnerInstitutionSection = () => {
  return (
    <section
      id="partner-institutions"
      className="flex items-start justify-between gap-8 py-60"
    >
      <div className="flex h-full w-full max-w-[722px] flex-1 flex-col items-start justify-between">
        <h2 className="mb-[120px] align-middle text-[64px] leading-[100%] font-black tracking-[0%] uppercase">
          Partner <br />
          <span className="relative">
            Institutions
            <div className="absolute bottom-3 z-[-1] h-[22px] w-full bg-[#E018E0]" />
          </span>
        </h2>
        <p className="text-2xl">
          Pur partners description here
          jfslkjfslkjafklsajfklsajflkjsadlkj`ldkjakldjkldjkldjk`djkl`
          jdkls`jdkljs`kdljskldjksljdklsjdkjsdkjsdkjskdjsljdklsjdklsj
          dksjdksjkdjskldjklsdjksldjksldjklsjdksjdksjdksjdkjskdjskjdk
          lsjdksjdkjskdjskjdksjdkjskdjskdjskdksjdks
        </p>
      </div>
      <div className="space-y-16">
        <Image
          src="/ravensbourne-logo.svg"
          alt="ravensbourne-logo"
          width={685}
          height={167}
        />
        <Image src="/aup-logo.svg" alt="aup-logo" width={495} height={168} />
      </div>
    </section>
  );
};

export default PartnerInstitutionSection;
