"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";

const navbarItems = [
  { title: "Courses", href: "#courses" },
  { title: "Campuses", href: "#campuses" },
  { title: "Partner Institutions", href: "#partner-institutions" },
  { title: "Student Testimonials", href: "#student-testimonials" },
  { title: "Stories", href: "#stories" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navbarItems
        .map((item) => {
          const element = document.querySelector(item.href);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: item.href,
              top: rect.top,
              bottom: rect.bottom,
              height: rect.height,
            };
          }
          return null;
        })
        .filter(Boolean);

      const viewportHeight = window.innerHeight;
      let currentSection = "";
      let maxVisibleArea = 0;

      sections.forEach((section) => {
        if (section) {
          const visibleTop = Math.max(0, -section.top);
          const visibleBottom = Math.min(
            section.height,
            viewportHeight - section.top,
          );
          const visibleArea = Math.max(0, visibleBottom - visibleTop);

          if (
            visibleArea > maxVisibleArea &&
            section.top < viewportHeight * 0.5
          ) {
            maxVisibleArea = visibleArea;
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between">
        <Image src="/logo.svg" alt="Logo" width={184} height={69} />
        <button
          onClick={toggleMenu}
          className="cursor-pointer rounded-xl p-4 transition-colors hover:bg-[#061665]"
          aria-label="Toggle menu"
        >
          <MenuIcon size={24} />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full transform bg-[#061665] shadow-2xl transition-transform duration-300 ease-in-out sm:w-[600px] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/20 p-6">
            <Image src="/logo.svg" alt="Logo" width={120} height={45} />
            <button
              onClick={toggleMenu}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center px-8">
            <ul className="space-y-8">
              {navbarItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`block text-4xl leading-tight font-black uppercase transition-all duration-200 hover:text-[#E018E0] sm:text-5xl ${
                      activeSection === item.href
                        ? "text-[#E018E0]"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-white/20 p-6">
            <p className="text-sm text-white/70">
              © 2025 Victoria College of Arts and Design
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
