"use client";
import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Pearson",
    position: "CEO of DHL",
    company: "DHL",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra congue orci aliquam vehicula. Curabitur faucibus ante eu ullamcorper vulputate. Ut metus eros, tempor vitae sem id, convallis rhoncus diam. Aliquam viverra congue orci aliquam vehicula.",
    image: "/john-pearson.jpg",
    // logo: "/dhl-logo.png",
    videoThumbnail:
      "https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=1cFqSPIjH981E69lJFNrRiqUDDsOqHfRdpW2CKu9sSc=",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CMO of FedEx",
    company: "FedEx",
    quote:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer facilisis felis non dolor suscipit, a facilisis justo fringilla. Nam sed tincidunt sapien. Aliquam erat volutpat.",
    image: "/jane-smith.jpg",
    // logo: "/fedex-logo.png",
    videoThumbnail:
      "https://media.istockphoto.com/id/169883022/photo/smart-business-man-using-laptop-while-looking-at-you.jpg?s=612x612&w=0&k=20&c=5FpJgEjpNzrNxRgjj69zdWEBco2UIAsxsP2ffodqzhk=",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "COO of UPS",
    company: "UPS",
    quote:
      "Proin ullamcorper nisl nec ante hendrerit, at tincidunt ex sodales. Suspendisse ac justo eu augue luctus imperdiet. Sed vel ex tristique, suscipit nunc non, sagittis libero. Duis fermentum velit ut augue maximus hendrerit.",
    image: "/michael-johnson.jpg",
    // logo: "/ups-logo.png",
    videoThumbnail:
      "https://media.istockphoto.com/id/171402594/photo/laptop-at-home-man-using-laptop.jpg?s=612x612&w=0&k=20&c=KxIUFlXSp3KgdzLTTbeYByGg79EuXRqRNCoes8dxnII=",
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className=" py-16 px-4 md:px-24">
      <div className="container mx-auto ">
        <div className=" md:w-1/2 mb-6">
          <div className="mb-6">
            <h4 className="text-green-600 font-bold">TESTIMONIALS</h4>
          </div>
          <div>
            <h2 className="md:text-5xl text-2xl font-bold tracking-tight text-gray-900">
              What Our Customers Speak
              <br /> About Us
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 ">
          {/* Video thumbnail with play button */}
          <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-lg ">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={currentTestimonial.videoThumbnail}
                alt={`Video thumbnail for ${currentTestimonial.name}`}
                className="object-cover w-full max-h-[300px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-[#175177] hover:bg-blue-800 text-white rounded-lg p-4 px-8 transition-all duration-300 transform hover:scale-110 cursor-pointer">
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
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial content */}
          <div className="w-full md:w-1/2 flex flex-col">
            <blockquote className="text-lg italic text-gray-700 mb-6">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-yellow-200 flex items-center justify-center">
                  {currentTestimonial?.logo ? (
                    <Image
                      src={currentTestimonial?.logo}
                      alt={`${currentTestimonial.name}'s company logo`}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <span className="font-bold text-lg">
                      {currentTestimonial.company}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className="font-bold text-blue-700">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-500">{currentTestimonial.position}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end mt-10 gap-3">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
