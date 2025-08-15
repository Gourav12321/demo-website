import Image from "next/image";

const ServiceCard = ({
  icon,
  title,
  description,
  bgColor = "bg-[#f5f8ff]",
  height = "h-[250px] md:h-[280px] lg:h-[320px]",
  width = "w-full",
  hasImage = false,
  imageSrc = "",
  isSpecial = false,
}) => {
  return (
    <div
      className={`relative ${bgColor} ${height} ${width} rounded-[20px] border border-[#e5e7eb] overflow-hidden transition-all duration-300 hover:shadow-lg`}
    >
      {/* Special Webflow card design */}
      {isSpecial ? (
        <div className="flex flex-col md:flex-row justify-between items-start p-4 md:p-6 h-full w-full gap-4 md:gap-0">
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2">
            {/* Icon container */}
            <div className="bg-[#F5F8FF] h-[44px] w-[44px] rounded-[9px] flex items-center justify-center shadow-sm">
              <Image
                src={icon}
                alt="Service Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="max-w-full md:max-w-[220px]">
              <h3 className="text-[#252432] text-[16px] md:text-[18px] lg:text-[19.77px] font-semibold leading-[120%] mb-2 md:mb-4 font-inter">
                {title}
              </h3>
              <p className="text-[#8987a1] text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-[150%] font-inter">
                {description}
              </p>
            </div>
          </div>

          {/* Large W logo for Webflow */}
          <div className="w-full md:w-1/2 bg-[#5B54FF] h-[180px] sm:h-[250px] md:h-full flex items-center justify-center rounded-xl">
            <Image
              src="/service/Vector.png"
              alt="W Logo"
              width={80}
              height={80}
              // sizes="(max-width: 768px) 80px, 120px"
              className="object-cover lg:w-1/2 md:w-[150px]"
            />
          </div>
        </div>
      ) : (
        <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6 h-full">
          {/* Icon container for regular cards */}
          <div className="bg-white h-[44px] w-[44px] rounded-[9px] flex items-center justify-center shadow-sm">
            <Image
              src={icon}
              alt="Service Icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>

          {/* Content for regular cards */}
          <div className="max-w-full md:max-w-[220px] flex-1">
            <h3 className="text-[#252432] text-[16px] md:text-[18px] lg:text-[19.77px] font-semibold leading-[120%] mb-2 md:mb-4 font-inter">
              {title}
            </h3>
            <p className="text-[#8987a1] text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-[150%] font-inter">
              {description}
            </p>
          </div>

          {/* Optional image for E-commerce card */}
          {hasImage && (
            <div className="mt-auto">
              <div className="relative w-full h-[180px] md:h-[150px] lg:h-[250px]">
                <Image
                  src={imageSrc}
                  alt="Service illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-[10px] object-center"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
