const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-[linear-gradient(121.90389131283708deg,rgba(27,27,27,1.00)_0.0%,rgba(5,5,5,1.00)_100.0%)] border rounded-[10px] border-[#2a2a2aff] border-solid mb-4">
      <div
        className="flex items-center justify-between p-6 cursor-pointer"
        onClick={onToggle}
      >
        <h3
          className="text-[rgba(37,36,50,1.00)] text-[18px] font-bold leading-[120%]"
          style={{ fontFamily: "Raleway" }}
        >
          {question}
        </h3>
        <div className="overflow-hidden h-[24px] w-[24px]">
          <img
            src={
              isOpen ? "assets/images/vector.svg" : "assets/images/vector_1.svg"
            }
            alt="Toggle"
            className="w-full h-full"
          />
        </div>
      </div>

      {isOpen && (
        <div className="px-6 pb-6">
          <p
            className="text-[rgba(137,135,161,1.00)] text-[16px] font-normal leading-[150%]"
            style={{ fontFamily: "Inter" }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
