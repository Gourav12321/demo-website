const Footer = () => {
  const socialIcons = [
    { src: "assets/images/vector_14.svg", alt: "Social 1" },
    { src: "assets/images/vector_11.svg", alt: "Social 2" },
    { src: "assets/images/vector_10.svg", alt: "Social 3" },
    { src: "assets/images/vector_9.svg", alt: "Social 4" },
  ];

  return (
    <footer className="bg-[linear-gradient(121.90389131283708deg,rgba(255,255,255,1.00)_0.0%,rgba(246,249,255,1.00)_100.0%)] border rounded-[40px] border-[#d6ddecff] border-solid py-16 mx-4 my-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left section */}
          <div>
            <img src="assets/images/logo_1.svg" alt="Logo" className="mb-8" />

            <p
              className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal leading-[150%] max-w-[356px] mb-8"
              style={{ fontFamily: "Inter" }}
            >
              Ready to elevate your online presence? Contact us today to discuss
              your project and discover how we can bring your vision to life.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="overflow-hidden h-[24px] w-[24px]">
                <img src="assets/images/vector_8.svg" alt="Heart" />
              </div>
              <span
                className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal"
                style={{ fontFamily: "Inter" }}
              >
                Made with love powered by inkyy.com
              </span>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-end">
            {/* Navigation links */}
            <nav className="flex gap-8 mb-8">
              <span
                className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal"
                style={{ fontFamily: "Inter" }}
              >
                Home
              </span>
              <span
                className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal"
                style={{ fontFamily: "Inter" }}
              >
                About
              </span>
              <span
                className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal"
                style={{ fontFamily: "Inter" }}
              >
                How it Works
              </span>
              <span
                className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal"
                style={{ fontFamily: "Inter" }}
              >
                Services
              </span>
            </nav>

            {/* Social icons */}
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="bg-[rgba(245,248,255,1.00)] h-[48px] w-[48px] rounded-full flex items-center justify-center"
                >
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
