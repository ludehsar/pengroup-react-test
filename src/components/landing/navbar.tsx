"use client";
import React, { useEffect, useState } from "react";

const navbarItems = [
  { title: "Courses", href: "#courses" },
  { title: "Campuses", href: "#campuses" },
  { title: "Partner Institutions", href: "#partner-institutions" },
  { title: "Student Testimonials", href: "#student-testimonials" },
  { title: "Stories", href: "#stories" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
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

  return (
    <nav className="border-accent bg-background fixed bottom-10 left-[50%] z-50 h-[79px] w-fit translate-x-[-50%] border p-8 shadow-xs">
      <ul className="flex h-full items-center gap-8 uppercase">
        {navbarItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`transition-all duration-200 hover:font-black cursor-pointer ${
                activeSection === item.href ? "font-black" : "font-normal"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
