"use client";
import Image from "next/image";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Basic validation
    if (!formData.email || !formData.name || !formData.message) {
      setSubmitStatus("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("Thank you! Your message has been sent successfully.");
      setFormData({ email: "", name: "", message: "" });
      console.log("Form submitted:", formData);
    } catch (error) {
      setSubmitStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-visible">
      <div className="absolute w-full h-full z-0 mix-blend-color-burn top-0 justify-between flex flex-col">
        <div className=" flex justify-end point-events-none ">
          <Image
            src="/contact/background1.png"
            alt="Contact Background"
            width={400}
            height={400}
            className="object-cover w-[30%]"
            // fill
          />
        </div>
        <div className=" flex justify-start point-events-none -translate-x-[40%] transform ">
          <Image
            src="/contact/background2.png"
            alt="Contact Background"
            width={400}
            height={400}
            className="object-cover w-full "
            // fill
          />
        </div>
      </div>
      <div className="mx-auto px-4 relative z-30">
        <h2
          className="text-[rgba(37,36,50,1.00)] text-[40px] md:text-[60px] font-bold leading-[120%] text-center mb-16"
          style={{ fontFamily: "Raleway" }}
        >
          Let's Get in Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-[rgba(37,36,50,1.00)] text-[18px] font-bold leading-[120%] mb-2"
                style={{ fontFamily: "Inter" }}
              >
                email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
                className="w-full border h-[68px] rounded-[10px] border-[#d6ddecff] border-solid px-4 text-[rgba(137,135,161,1.00)] text-[20px] font-normal focus:outline-none focus:border-[rgba(77,71,255,1.00)] transition-colors"
                style={{ fontFamily: "Inter" }}
                required
              />
            </div>

            <div>
              <label
                className="block text-[rgba(37,36,50,1.00)] text-[18px] font-bold leading-[120%] mb-2"
                style={{ fontFamily: "Inter" }}
              >
                name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="full name"
                className="w-full border h-[68px] rounded-[10px] border-[#d6ddecff] border-solid px-4 text-[rgba(137,135,161,1.00)] text-[20px] font-normal focus:outline-none focus:border-[rgba(77,71,255,1.00)] transition-colors"
                style={{ fontFamily: "Inter" }}
                required
              />
            </div>

            <div>
              <label
                className="block text-[rgba(37,36,50,1.00)] text-[18px] font-bold leading-[120%] mb-2"
                style={{ fontFamily: "Inter" }}
              >
                message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="write your message...."
                className="w-full border rounded-[10px] border-[#d6ddecff] border-solid p-4 text-[rgba(137,135,161,1.00)] text-[20px] font-normal resize-none focus:outline-none focus:border-[rgba(77,71,255,1.00)] transition-colors"
                style={{ fontFamily: "Inter" }}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[rgba(77,71,255,1.00)] h-[62px] w-full max-w-[697px] rounded-[10px] text-white text-[16px] font-bold hover:bg-[rgba(67,61,245,1.00)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                style={{ fontFamily: "Raleway" }}
              >
                {isSubmitting ? "Sending..." : "Get in Touch"}
              </button>
            </div>

            {submitStatus && (
              <div
                className={`text-center p-4 rounded-[10px] ${
                  submitStatus.includes("Thank you")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
