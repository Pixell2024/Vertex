

"use client";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Message sent successfully!");
        // ✅ Reset form data after successful submission
        setFormData({
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
      alert("Failed to send message. Please try again later.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="">
      <h3 className="text-2xl font-semibold mb-6">Send Your Enquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <textarea
          placeholder="Write Message"
          rows={4}
          className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-green-500 transition focus:ring-2 focus:ring-green-500"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center group shadow-md"
        >
          <span className="text-lg font-semibold">Send Message</span>
          <ArrowForward className="pt-1 w-5 h-5 transition-transform group-hover:translate-x-2" />
        </button>
      </form>
    </div>
  );
}
