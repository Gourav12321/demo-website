import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: "assets/images/vector_5.svg",
      title: "Web Design",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[250px]",
      width: "w-full",
    },
    {
      icon: "assets/images/vector_17.svg",
      title: "UI/UX Design",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[250px]",
      width: "w-full",
    },
    {
      icon: "assets/images/vector_18.svg",
      title: "Responsive Design",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[250px]",
      width: "w-full",
    },
    {
      icon: "assets/images/vector_19.svg",
      title: "E-commerce Solutions:",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[520px]",
      width: "w-full",
      hasImage: true,
      imageSrc: "assets/images/rectangle_44.png",
    },
    {
      icon: "assets/images/vector_21.svg",
      title: "Webflow",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-gradient-to-br from-[#6366f1] to-[#4f46e5]",
      height: "h-[250px]",
      width: "w-full",
      isSpecial: true,
    },
    {
      icon: "assets/images/vector_20.svg",
      title: "Custom Development",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
      bgColor: "bg-[#f5f8ff]",
      height: "h-[250px]",
      width: "w-full",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[rgba(37,36,50,1.00)] text-[60px] font-bold leading-[120%] mb-16 font-raleway">
          What We do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* First row */}
          <div className="lg:col-span-1">
            <ServiceCard {...services[0]} />
          </div>
          <div className="lg:col-span-1">
            <ServiceCard {...services[1]} />
          </div>
          <div className="lg:col-span-1 lg:row-span-2">
            <ServiceCard {...services[3]} />
          </div>

          {/* Second row */}
          <div className="lg:col-span-1">
            <ServiceCard {...services[2]} />
          </div>
          <div className="lg:col-span-1">
            <ServiceCard {...services[4]} />
          </div>

          {/* Third row - Custom Development takes remaining space */}
          <div className="lg:col-span-2 lg:col-start-1">
            <ServiceCard {...services[5]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
