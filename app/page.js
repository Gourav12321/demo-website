import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WorkSection from "../components/WorkSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#E4EAF8] relative overflow-hidden">
      {/* Main content */}
      <Header />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
