import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: "/assets/images/vector_5.svg",
      title: "Web Design",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[220px] md:h-[250px] lg:h-[280px]",
      width: "w-full",
    },
    {
      icon: "/assets/images/vector_17.svg",
      title: "UI/UX Design",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[220px] md:h-[250px] lg:h-[280px]",
      width: "w-full",
    },
    {
      icon: "/assets/images/vector_18.svg",
      title: "Responsive Design",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[220px] md:h-[250px] lg:h-[280px]",
      width: "w-full",
    },
    {
      icon: "/assets/images/vector_19.svg",
      title: "E-commerce Solutions:",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[350px] md:h-[400px] lg:h-[560px]",
      width: "w-full",
      hasImage: true,
      imageSrc: "/assets/images/rectangle_44.png",
    },
    {
      icon: "/service/logo1.png",
      title: "Webflow",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      // bgColor: "bg-gradient-to-br from-[#6366f1] to-[#4f46e5]",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[300px] md:h-[220px] lg:h-[260px]",
      width: "w-full",
      isSpecial: true,
    },
    {
      icon: "/assets/images/vector_20.svg",
      title: "Custom Development",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[220px] md:h-[250px] lg:h-[260px]",
      width: "w-full",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-visible">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-30">
        <h2 className="text-[rgba(37,36,50,1.00)] text-[32px] md:text-[48px] lg:text-[60px] font-bold leading-[120%] mb-8 md:mb-12 lg:mb-16 font-raleway">
          What We do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="sm:col-span-1 lg:col-span-1">
            <ServiceCard {...services[0]} />
          </div>
          <div className="sm:col-span-1 lg:col-span-1">
            <ServiceCard {...services[1]} />
          </div>

          <div className="sm:col-span-1 lg:col-span-1">
            <ServiceCard {...services[2]} />
          </div>
          <div className="sm:col-span-1 lg:col-span-1 lg:row-span-2">
            <ServiceCard {...services[3]} />
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <ServiceCard {...services[4]} />
          </div>

          <div className="sm:col-span-1 lg:col-span-1">
            <ServiceCard {...services[5]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
