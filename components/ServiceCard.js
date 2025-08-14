const ServiceCard = ({
  icon,
  title,
  description,
  bgColor = "bg-[#f5f8ff]",
  height = "h-[250px]",
  width = "w-full",
  hasImage = false,
  imageSrc = "",
  isSpecial = false,
}) => {
  return (
    <div
      className={`relative ${bgColor} ${height} ${width} rounded-[20px] border border-[#e5e7eb] overflow-hidden`}
    >
      {/* Special Webflow card design */}
      {isSpecial ? (
        <>
          {/* Large W logo for Webflow */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="text-white text-[120px] font-bold opacity-20">
              W
            </div>
          </div>

          {/* Icon container for special card */}
          <div className="bg-white h-[44px] w-[44px] rounded-[9px] absolute left-[26px] top-[29px] flex items-center justify-center">
            <img src={icon} alt="Icon" className="w-[24px] h-[24px]" />
          </div>

          {/* Content for special card */}
          <div className="absolute left-[26px] top-[102px] z-10">
            <h3 className="text-white text-[19.77px] font-semibold leading-[120%] mb-4 font-inter">
              {title}
            </h3>
            <p className="text-white/80 text-[14px] font-normal leading-[150%] max-w-[200px] font-inter">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Icon container for regular cards */}
          <div className="bg-white h-[44px] w-[44px] rounded-[9px] absolute left-[26px] top-[29px] flex items-center justify-center shadow-sm">
            <img src={icon} alt="Icon" className="w-[24px] h-[24px]" />
          </div>

          {/* Content for regular cards */}
          <div className="absolute left-[26px] top-[102px]">
            <h3 className="text-[#252432] text-[19.77px] font-semibold leading-[120%] mb-4 font-inter">
              {title}
            </h3>
            <p className="text-[#8987a1] text-[14px] font-normal leading-[150%] max-w-[220px] font-inter">
              {description}
            </p>
          </div>
        </>
      )}

      {/* Optional image for E-commerce card */}
      {hasImage && imageSrc && (
        <div className="absolute right-4 bottom-4 w-[160px] h-[200px] rounded-[10px] overflow-hidden">
          <img
            src={imageSrc}
            alt="Service illustration"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
