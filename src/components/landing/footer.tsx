import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between pt-[120px]">
      <div className="space-y-4">
        <Image src="/logo.svg" alt="Logo" width={184} height={69} />
        <p>
          &copy; {new Date().getFullYear()} Victoria College of Arts and Design,
          All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-8 border border-[#8EC7EE] px-8 py-2 text-2xl text-[#8EC8EE]">
        <ul className="flex items-center gap-8">
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
        <ul className="flex items-center gap-4">
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
