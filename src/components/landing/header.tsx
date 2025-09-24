import Image from "next/image";
import React from "react";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <Image src="/logo.svg" alt="Logo" width={184} height={69} />
      <MenuIcon />
    </nav>
  );
};

export default Header;
