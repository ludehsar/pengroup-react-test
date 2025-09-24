import CampusSection from "@/components/landing/campus-section";
import CoursesSection from "@/components/landing/courses-section";
import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero-section";
import PartnerInstitutionSection from "@/components/landing/partner-institutions-section";
import QuoteSection from "@/components/landing/quote-section";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1761px] p-8 font-sans">
      <Header />
      <HeroSection />
      <CoursesSection />
      <QuoteSection />
      <CampusSection />
      <PartnerInstitutionSection />
    </main>
  );
}
