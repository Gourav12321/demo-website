"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const WorkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      image: "/work/slider1.png",
      title: "Revolutionary Voting Platform",
      description: "Blockchain-powered voting system with enhanced security",
      category: "Web Development",
    },
    {
      id: 2,
      image: "/work/slider2.png",
      title: "Creative Agency Portfolio",
      description: "Modern agency website with unlimited possibilities",
      category: "UI/UX Design",
    },
    {
      id: 3,
      image: "/work/slider3.png",
      title: "Brand Identity Systems",
      description: "Complete branding solutions for modern businesses",
      category: "Branding",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 relative">
      <div className="absolute w-full h-full flex justify-center -top-[6%]">
        <Image
          src="/work/background.png"
          alt="Group_27139"
          className=" opacity-60 object-contain w-[60%] h-full"
          style={{ mixBlendMode: "color-burn" }}
          width={400}
          height={400}
        />
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2
            className="text-[rgba(37,36,50,1.00)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-bold leading-[120%] mb-3 md:mb-4"
            style={{ fontFamily: "Raleway" }}
          >
            Check our Work
          </h2>

          <p
            className="text-[rgba(137,135,161,1.00)] text-sm md:text-base font-normal leading-[150%] max-w-[449px] mx-auto px-2"
            style={{ fontFamily: "Inter" }}
          >
            Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online.
          </p>
        </div>

        <div className="w-full mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-8 md:top-[10%] top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border h-10 w-10 sm:h-12 sm:w-12 md:h-[60px] md:w-[60px] lg:h-[78px] lg:w-[78px] rounded-full border-gray-200 flex items-center justify-center z-20 group"
            aria-label="Previous slide"
          >
            <Image
              src="/assets/images/vector_6.svg"
              alt="Previous"
              width={24}
              height={24}
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-8 md:top-[10%] top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border h-10 w-10 sm:h-12 sm:w-12 md:h-[60px] md:w-[60px] lg:h-[78px] lg:w-[78px] rounded-full border-gray-200 flex items-center justify-center z-20 group"
            aria-label="Next slide"
          >
            <Image
              src="/assets/images/vector_7.svg"
              alt="Next"
              width={24}
              height={24}
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200 rotate-180"
            />
          </button>

          {/* Mobile Layout - Single Slide */}
          <div className="block md:hidden">
            <div className="mx-8 sm:mx-12">
              <div className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={portfolioItems[currentSlide].image}
                  alt={portfolioItems[currentSlide].title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <div className="p-4 sm:p-6 text-white text-left w-full">
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                      {portfolioItems[currentSlide].category}
                    </span>
                    <h3
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ fontFamily: "Raleway" }}
                    >
                      {portfolioItems[currentSlide].title}
                    </h3>
                    <p
                      className="text-sm opacity-90"
                      style={{ fontFamily: "Inter" }}
                    >
                      {portfolioItems[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center justify-center overflow-hidden">
              <div className="flex items-center gap-4 w-full">
                <div className="w-1/3 opacity-50 transform transition-all duration-500 -translate-x-[30%]">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <Image
                      src={
                        portfolioItems[
                          (currentSlide - 1 + portfolioItems.length) %
                            portfolioItems.length
                        ].image
                      }
                      alt={
                        portfolioItems[
                          (currentSlide - 1 + portfolioItems.length) %
                            portfolioItems.length
                        ].title
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-[60%] transform scale-100 transition-all duration-500">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={portfolioItems[currentSlide].image}
                      alt={portfolioItems[currentSlide].title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 md:p-8 text-white text-left">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium mb-3">
                          {portfolioItems[currentSlide].category}
                        </span>
                        <h3
                          className="text-xl md:text-2xl font-bold mb-2"
                          style={{ fontFamily: "Raleway" }}
                        >
                          {portfolioItems[currentSlide].title}
                        </h3>
                        <p
                          className="text-sm md:text-base opacity-90"
                          style={{ fontFamily: "Inter" }}
                        >
                          {portfolioItems[currentSlide].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-1/3 opacity-50 transform transition-all duration-500 translate-x-[30%]">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <Image
                      src={
                        portfolioItems[
                          (currentSlide + 1) % portfolioItems.length
                        ].image
                      }
                      alt={
                        portfolioItems[
                          (currentSlide + 1) % portfolioItems.length
                        ].title
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm border rounded-[22px] border-[#e3e9f7ff] shadow-lg hover:shadow-xl transition-shadow duration-300 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 max-w-sm sm:max-w-none">
            <div>
              <Image
                src="/work/people.png"
                alt="People"
                width={200}
                height={124}
                className="h-12 sm:h-14 md:h-16 lg:h-28 rounded-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {/* Review Text */}
              <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm md:text-base">
                <span
                  className="text-[rgba(37,36,50,1.00)] font-semibold"
                  style={{ fontFamily: "Inter" }}
                >
                  5.0
                </span>
                <span
                  className="text-[rgba(137,135,161,1.00)] font-normal"
                  style={{ fontFamily: "Inter" }}
                >
                  Based On
                </span>
                <span
                  className="text-[rgba(37,36,50,1.00)] font-semibold"
                  style={{ fontFamily: "Inter" }}
                >
                  145
                </span>
                <span
                  className="text-[rgba(137,135,161,1.00)] font-normal"
                  style={{ fontFamily: "Inter" }}
                >
                  Reviews
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
