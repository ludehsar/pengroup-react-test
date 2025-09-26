import React from "react";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export interface TestimonialCardProps {
  id: number;
  message: string;
  name: string;
  age: number;
  course: string;
  facebookProfile?: string;
  linkedinProfile?: string;
  instagramProfile?: string;
  photoUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  message,
  name,
  age,
  course,
  facebookProfile,
  linkedinProfile,
  instagramProfile,
  photoUrl,
}) => {
  return (
    <div
      className={`relative h-[706px] w-[496px] flex-shrink-0 rotate-[13.89deg] transform bg-[#E018E0] p-[3px]`}
    >
      <div className="relative h-full w-full overflow-hidden bg-[#061665CC]">
        <div className="absolute inset-0">
          <Image
            src={photoUrl}
            alt={name}
            fill
            className="object-cover opacity-80"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#4A5FBF]/70 via-[#3B4DB8]/60 to-[#2D3B8F]/80" />

        <div className="relative z-10 flex h-full rotate-[-13.89deg] flex-col items-start justify-center p-8 pl-20">
          <div className="text-white">
            <blockquote className="mb-6 text-[48px] leading-tight font-black uppercase">
              &ldquo;{message}&ldquo;
            </blockquote>

            <div className="mb-4 space-y-1">
              <p className="text-base font-bold tracking-wide uppercase">
                {name} \{age} \{course.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {facebookProfile && (
              <a
                href={facebookProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center text-white transition-colors hover:text-[#E018E0]"
                aria-label={`${name}'s Facebook profile`}
              >
                <FacebookIcon />
              </a>
            )}
            {instagramProfile && (
              <a
                href={instagramProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center text-white transition-colors hover:text-[#E018E0]"
                aria-label={`${name}'s Instagram profile`}
              >
                <InstagramIcon />
              </a>
            )}
            {linkedinProfile && (
              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center text-white transition-colors hover:text-[#E018E0]"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <LinkedinIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
