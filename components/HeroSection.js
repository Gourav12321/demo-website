const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Background decorative elements */}

      <div className="absolute h-full w-full overflow-hidden z-0">
        <img
          src="mainBanner/mask_group.png"
          alt="Mask_group"
          className="object-contain"
          //   style={{ filter: "blur(00.0px)" }}
        />
      </div>

      {/* Hero content */}
      <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
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
