const WorkSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background decorative elements */}
      <img
        src="assets/images/group_27139.svg"
        alt="Group_27139"
        className="absolute left-[calc(100%_*_-0.36)] top-[calc(100%_*_0.35)]"
      />

      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-[rgba(37,36,50,1.00)] text-[60px] font-bold leading-[120%] mb-4"
          style={{ fontFamily: "Raleway" }}
        >
          Check our Work
        </h2>

        <p
          className="text-[rgba(137,135,161,1.00)] text-[14px] font-normal leading-[150%] max-w-[449px] mx-auto mb-16"
          style={{ fontFamily: "Inter" }}
        >
          Take a look at some of our recent projects to see how we've helped
          businesses like yours succeed online.
        </p>

        {/* Navigation arrows */}
        <div className="flex justify-between items-center mb-8">
          <div className="bg-white border h-[78px] w-[78px] rounded-full border-white border-solid flex items-center justify-center">
            <img
              src="assets/images/vector_6.svg"
              alt="Previous"
              className="w-6 h-6"
            />
          </div>

          <div className="bg-white border h-[78px] w-[78px] rounded-full border-white border-solid flex items-center justify-center">
            <img
              src="assets/images/vector_7.svg"
              alt="Next"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Work showcase - Portfolio grid would go here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portfolio items would be mapped here */}
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div className="h-64 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Reviews section */}
        <div className="mt-16">
          <div className="bg-white border h-[81px] w-[407px] rounded-[22px] border-[#e3e9f7ff] border-solid mx-auto flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img src="assets/images/group_13679.svg" alt="Stars" />
              <div>
                <span
                  className="text-[rgba(37,36,50,1.00)] text-[16px] font-semibold"
                  style={{ fontFamily: "Inter" }}
                >
                  5.0
                </span>
                <span
                  className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal"
                  style={{ fontFamily: "Inter" }}
                >
                  Based on
                </span>
                <span
                  className="text-[rgba(37,36,50,1.00)] text-[16px] font-semibold"
                  style={{ fontFamily: "Inter" }}
                >
                  145
                </span>
                <span
                  className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal"
                  style={{ fontFamily: "Inter" }}
                >
                  Reviews
                </span>
              </div>
              <img src="assets/images/group_13681.svg" alt="Reviews" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
