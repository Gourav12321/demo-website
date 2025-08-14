import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WorkSection from "../components/WorkSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgba(245,248,255,1.00)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute scale-x-[-1.0] origin-[0_0] h-[525.00px] w-[1098.00px] opacity-20 mix-blend-color-burn scale-y-[1.0] left-[635.00px] top-[3858.00px]"
        style={{
          background:
            "url(assets/images/untitled21536x735_2_1.png) 100% / cover no-repeat",
        }}
      ></div>

      <div
        className="absolute h-[841.00px] w-[799.00px] left-[calc(50%-399.00px)] mix-blend-color-burn top-[1428.00px]"
        style={{
          background:
            "url(assets/images/untitled31536x735_1.png) 100% / cover no-repeat",
        }}
      ></div>

      <div
        className="absolute scale-x-[-1.0] origin-[0_0] h-[726.00px] w-[765.00px] mix-blend-color-burn scale-y-[1.0] left-[563.00px] top-[2591.00px]"
        style={{
          background:
            "url(assets/images/untitled21536x735_1.png) 100% / cover no-repeat",
        }}
      ></div>

      <img
        src="assets/images/group_27169.svg"
        alt="Group_27169"
        className="absolute left-[calc(100%_*_-0.44)] top-[calc(100%_*_0.81)]"
      />

      <img
        src="assets/images/group_27141.svg"
        alt="Group_27141"
        className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.16)]"
      />

      <img
        src="assets/images/group_27142.svg"
        alt="Group_27142"
        className="absolute left-[calc(100%_*_0.53)] top-[calc(100%_*_0.16)]"
      />

      <img
        src="assets/images/group_27143.svg"
        alt="Group_27143"
        className="absolute left-[calc(100%_*_0.74)] top-[calc(100%_*_0.16)]"
      />

      <img
        src="assets/images/group_27145.svg"
        alt="Group_27145"
        className="absolute left-[calc(100%_*_0.53)] top-[calc(100%_*_0.22)]"
      />

      <img
        src="assets/images/group_27170.svg"
        alt="Group_27170"
        className="absolute left-[calc(100%_*_0.10)] top-[calc(100%_*_0.22)]"
      />

      <img
        src="assets/images/line_33.svg"
        alt="Line_33"
        className="absolute left-[0.00px] top-[3341.00px]"
      />

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
