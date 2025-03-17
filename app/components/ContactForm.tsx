"use client";
import { ArrowForward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone Number must be at least 10 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ Returns `true` if no errors
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log(formData);

    try {
      setIsLoading(true);
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // ✅ Show success notification
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will get back to you shortly.",
          confirmButtonColor: "#22c55e",
        });

        // ✅ Reset form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsLoading(false);
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);

      // ❌ Show error notification
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send message. Please try again later.",
        confirmButtonColor: "#ef4444",
      });

      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <h3 className="text-2xl font-semibold mb-6">Send Your Enquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent border w-full border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="bg-transparent border w-full border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border w-full border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border w-full border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
              value={formData.phone}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, phone: onlyNumbers });
              }}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            placeholder="Write Message"
            rows={4}
            className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full relative bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center group shadow-md cursor-pointer"
          disabled={isLoading}
        >
          <span className="text-lg font-semibold">
            {isLoading ? "Sending..." : "Send Message"}
          </span>
          <ArrowForward className="pt-1 w-5 h-5 transition-transform group-hover:translate-x-2" />
          {isLoading && (
            <CircularProgress
              size={30}
              color="success"
              className="absolute top-2.5 right-3.5"
            />
          )}
        </button>
      </form>
    </div>
  );
}
