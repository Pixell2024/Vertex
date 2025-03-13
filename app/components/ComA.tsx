"use client";
import logo from "../../public/Vertex_logo.jpg";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./NavBar";

const ComA = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Sample video sources - replace with your actual videos
  const carouselVideos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselVideos.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Carousel Background */}
      {carouselVideos.map((vid, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={(e) => console.error("Video error:", e)}
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to darken video */}
        </div>
      ))}

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-16">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-2">
            Heading
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 mb-6">
            Sub heading
          </p>

          <div className="flex items-center">
            <a
              href="#details"
              className="text-white text-sm md:text-base hover:text-gray-300 transition"
            >
              More details
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center space-x-2 m-4">
            {carouselVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-1 rounded-full transition-all cursor-pointer ${
                  index === currentSlide
                    ? " bg-gray-700"
                    : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComA;
