import React from "react";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    {
      src: "footer/instagram.png",
      alt: "Instagram",
      href: "#",
    },
    {
      src: "footer/linkdein.png",
      alt: "LinkedIn",
      href: "#",
    },
    {
      src: "footer/ticktock.png",
      alt: "Facebook",
      href: "#",
    },
    {
      src: "footer/dribble.png",
      alt: "Twitter",
      href: "#",
    },
  ];

  const navigationLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Services", href: "#services" },
  ];

  const textStyles = {
    fontFamily: "Inter",
  };

  const baseTextClasses =
    "text-[rgba(137,135,161,1.00)] text-[16px] font-normal";

  return (
    <div className="relative w-full h-full overflow-visible">
      <footer className="bg-[#F4F8FE] border rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] border-[#d6ddecff] border-solid py-8 sm:py-12 lg:py-16 mx-2 sm:mx-20 my-4 sm:my-6 lg:my-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/assets/images/logo_1.svg"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 lg:h-auto w-auto"
                />
              </div>

              <p
                className={`${baseTextClasses} leading-[150%] max-w-full sm:max-w-[356px] mb-6 sm:mb-8`}
                style={textStyles}
              >
                Ready to elevate your online presence? Contact us today to
                discuss your project and discover how we can bring your vision
                to life.
              </p>

              <div className="flex items-center gap-2 mb-4">
                <div className="overflow-hidden h-[20px] w-[20px] sm:h-[24px] sm:w-[24px] flex-shrink-0">
                  <Image
                    src="/assets/images/vector_8.svg"
                    alt="Heart icon"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className={`${baseTextClasses} text-sm sm:text-[16px]`}
                  style={textStyles}
                >
                  Made with love powered by inkyy.com
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-start lg:items-center justify-center h-full">
              <div className="w-full lg:w-auto mb-4">
                <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-start lg:justify-end">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={`${baseTextClasses} hover:text-blue-600 transition-colors duration-200 cursor-pointer text-sm sm:text-[16px]`}
                        style={textStyles}
                        aria-label={`Navigate to ${link.label}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 sm:gap-4">
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.href}
                    className="bg-[rgba(245,248,255,1.00)] h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] rounded-full flex items-center justify-center hover:bg-[rgba(235,241,255,1.00)] transition-colors duration-200 group"
                    aria-label={`Visit our ${icon.alt} page`}
                  >
                    <Image
                      src={`/${icon.src}`}
                      alt={`${icon.alt} icon`}
                      width={50}
                      height={50}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="absolute bottom-0 z-10 w-full h-full overflow-visible">
        <Image
          src="/footer/background.png"
          alt="Background Gradient"
          width={400}
          height={900}
          className="object-cover h-[500px] w-full object-bottom overflow-visible"
        />
      </div>
    </div>
  );
};

export default Footer;
