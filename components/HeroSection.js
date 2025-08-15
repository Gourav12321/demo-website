import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible">
      <div className="absolute lg:top-0 lg:h-[150%] h-full w-full overflow-visible z-10 justify-center items-center flex ">
        <Image
          src="/mainBanner/mask_group.png"
          alt="Mask_group"
          className="object-cover object-top"
          fill
        />
      </div>

      {/* Hero content */}
      <div className="flex flex-col items-center justify-center h-full text-center relative z-20">
        <h1
          className="text-[rgba(37,36,50,1.00)] text-[73.34px] font-bold leading-[100%] max-w-[764px]"
          style={{ fontFamily: "Raleway" }}
        >
          Sleek UI Dark Theme for Creative <br />
          Webflow Studios
        </h1>

        <div className="bg-[rgba(37,36,50,1.00)] h-[60.00px] w-[211.00px] rounded-[10px] flex items-center justify-center mt-8">
          <span
            className="text-white text-[16px] font-bold"
            style={{ fontFamily: "Raleway" }}
          >
            Get in Touch
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
