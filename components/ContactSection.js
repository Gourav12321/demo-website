const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-[rgba(37,36,50,1.00)] text-[60px] font-bold leading-[120%] text-center mb-16"
          style={{ fontFamily: "Raleway" }}
        >
          Let's Get in Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            {/* Email field */}
            <div>
              <label
                className="block text-[rgba(37,36,50,1.00)] text-[18px] font-bold leading-[120%] mb-2"
                style={{ fontFamily: "Inter" }}
              >
                email
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border h-[68px] rounded-[10px] border-[#d6ddecff] border-solid px-4 text-[rgba(137,135,161,1.00)] text-[20px] font-normal"
                style={{ fontFamily: "Inter" }}
              />
            </div>

            {/* Name field */}
            <div>
              <label
                className="block text-[rgba(37,36,50,1.00)] text-[18px] font-bold leading-[120%] mb-2"
                style={{ fontFamily: "Inter" }}
              >
                name
              </label>
              <input
                type="text"
                placeholder="full name"
                className="w-full border h-[68px] rounded-[10px] border-[#d6ddecff] border-solid px-4 text-[rgba(137,135,161,1.00)] text-[20px] font-normal"
                style={{ fontFamily: "Inter" }}
              />
            </div>

            {/* Message field */}
            <div>
              <label
                className="block text-[rgba(37,36,50,1.00)] text-[18px] font-bold leading-[120%] mb-2"
                style={{ fontFamily: "Inter" }}
              >
                message
              </label>
              <textarea
                rows={6}
                placeholder="write your message...."
                className="w-full border rounded-[10px] border-[#d6ddecff] border-solid p-4 text-[rgba(137,135,161,1.00)] text-[20px] font-normal resize-none"
                style={{ fontFamily: "Inter" }}
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[rgba(77,71,255,1.00)] h-[62px] w-[697px] rounded-[10px] text-white text-[16px] font-bold"
                style={{ fontFamily: "Raleway" }}
              >
                Get in Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
