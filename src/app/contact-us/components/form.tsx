"use client";

import { useState } from "react";

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
 

    try {
      const response = await fetch(
        `https://Skillnet.api`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
        alert("Message sent!");
      } else {
        alert(
          "There was an issue submitting your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an issue submitting your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[600px] mx-auto">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 sm:p-6 md:p-[32px] rounded-[8px] w-full"
        >
          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium text-[#FFFFFF]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type in your name"
              className={`mt-1 block w-full border bg-transparent placeholder:italic ${
                errors.name ? "border-red-500" : "border-[#898783]"
              } rounded-md shadow-sm text-sm md:text-base focus:border-[#898783] focus:ring-[#898783] px-3 py-2 md:px-[16px] md:py-[13px]`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs md:text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium text-[#FFFFFF]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Type in your email address"
              className={`mt-1 block w-full border bg-transparent placeholder:italic ${
                errors.email ? "border-red-500" : "border-[#898783]"
              } rounded-[4px] shadow-sm text-sm md:text-base focus:border-[#898783] focus:ring-[#898783] px-3 py-2 md:px-[16px] md:py-[13px]`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs md:text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm md:text-base font-medium text-[#FFFFFF]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your special message here..."
              className={`mt-1 block w-full border bg-transparent placeholder:italic ${
                errors.message ? "border-red-500" : "border-[#898783]"
              } rounded-[4px] text-sm md:text-base focus:border-[#898783] text-white focus:ring-[#898783] px-3 py-2 md:px-[16px] md:py-[13px]`}
              rows={4}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs md:text-sm">{errors.message}</p>
            )}
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex justify-center items-center py-3 md:py-[12px] px-2 md:px-[24px] border border-transparent text-sm md:text-[14px] font-bold rounded-[10px] text-black focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#D0EFB1] hover:bg-[#D0EFB1]"
              } w-full transition-colors duration-200`}
            >
              {isSubmitting ? "Sending..." : "CONTINUE"}
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4 bg-black p-4 sm:p-6 md:p-[32px] rounded-[8px] border-[1px] border-[#898783] text-center w-full">
          <span className="text-[#10B981] text-[32px] md:text-[48px]">✓</span>
          <p className="text-[18px] md:text-[24px] font-semibold text-[#898783]">
            Thank you for filling the form
          </p>
          <p className="text-[14px] md:text-[16px] text-[#898783]">
            You will receive an email shortly
          </p>
        </div>
      )}
    </div>
  );
};
