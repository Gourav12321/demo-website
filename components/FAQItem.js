const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="group">
      <div
        className={`
          bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl 
          shadow-sm hover:shadow-md transition-all duration-300 ease-out
          ${isOpen ? "shadow-md ring-1 ring-gray-200" : ""}
        `}
      >
        <div
          className="flex items-center justify-between p-6 md:p-5 cursor-pointer group/header"
          onClick={onToggle}
        >
          <h3
            className="text-lg sm:text-xl md:text-xl font-semibold leading-tight text-gray-800 pr-4 group-hover/header:text-gray-900 transition-colors duration-200"
            style={{ fontFamily: "Raleway" }}
          >
            {question}
          </h3>

          <div className="flex-shrink-0">
            <div
              className={`
              w-8 h-8 md:w-10 md:h-10 flex items-center justify-center
              transition-all duration-300 ease-out
              ${isOpen ? "transform rotate-45" : "group-hover/header:scale-110"}
            `}
            >
              <svg
                className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-200 ${
                  isOpen
                    ? "text-gray-600"
                    : "text-gray-500 group-hover/header:text-gray-700"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={`
          overflow-hidden transition-all duration-500 ease-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div> */}

            <p
              className="text-gray-600 text-base md:text-lg leading-relaxed font-normal"
              style={{ fontFamily: "Inter" }}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
