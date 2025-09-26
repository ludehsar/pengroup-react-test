import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-between gap-8 pt-20 pb-16 lg:flex-row lg:items-center lg:gap-0 lg:pt-40 lg:pb-[120px]">
      <div className="space-y-4">
        <Image src="/logo.svg" alt="Logo" width={184} height={69} />
        <p>
          &copy; 2025 Victoria College of Arts and Design, All rights reserved.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 border border-[#8EC7EE] px-4 py-2 text-lg text-[#8EC8EE] lg:flex-row lg:gap-8 lg:px-8 lg:text-2xl">
        <ul className="flex items-center gap-4 text-center lg:gap-8 lg:text-left">
          <li>
            <a href="#">Policies</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Meet the team</a>
          </li>
        </ul>
        <ul className="flex items-center gap-3 lg:gap-4">
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
