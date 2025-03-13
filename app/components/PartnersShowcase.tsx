'use client'
import React from "react";
import Image from "next/image";
import logo1 from "../../public/icons/Vector1.svg";
import logo2 from "../../public/icons/Vector2.svg";
import logo3 from "../../public/icons/Vector3.svg";
import logo4 from "../../public/icons/Vector4.svg";
import logo5 from "../../public/icons/Vector5.svg";


const partners = [
  { id: 1, name: "LogoIpsum", logo: logo1 },
  { id: 2, name: "LogoIpsum", logo: logo2 },
  { id: 3, name: "LogoIpsum", logo: logo3 },
  { id: 4, name: "LogoIpsum", logo: logo4 },
  { id: 5, name: "LogoIpsum", logo: logo5 },
];

const PartnersShowcase = () => {
  return (
    <section className="py-16 px-4 md:px-24">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-gray-800 text-lg md:text-xl mb-12">
          Join Over 150+ Companies Who Trust Vertex
        </h2>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-evenly items-center gap-8  mb-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col-2 md:flex-col-5 gap-4 items-center space-y-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="font-semibold text-xl pb-2 text-gray-700">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Video Showcase */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg mx-auto">
          <video
            src="/videos/video1.mp4" // ✅ Correct path: Remove "videos/" since it's in "public"
            className="object-cover w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => console.error("Video error:", e)}
          >
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Button */}
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition duration-300"
            aria-label="Play video"
          >
            <div className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition transform hover:scale-110 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;
