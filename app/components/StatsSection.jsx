"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const headings = [
  "More than 1000 successful cases",
  "10 years experience",
  "24 developer partners",
];

export default function StatsSection() {
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" mt-16 md:mt-24">
      <div className=" mx-auto px-4 md:px-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-gray-600">
              <span className=" text-md font-bold text-black">
                VERTEX
                <HorizontalRuleIcon sx={{ paddingBottom: "2px" }} />
              </span>
              Lorem ipsum dolor sit amet consectetur. Ipsum aliquet commodo
              tortor fermentum laoreet pretium.
            </p>
            <p className="text-gray-600 text-justify">
              Adipiscing fermentum odio quisque ultrices nunc turpis nisi
              vulputate eros. In non volutpat pharetra nulla vitae fermentum.
              Semper tellus feugiat sit pellentesque scelerisque hendrerit
              vulputate quam nunc.
            </p>
            <button className="flex items-center text-[#175177] font-semibold cursor-pointer">
              <span>
                More about us{" "}
                <TrendingFlatIcon
                  className="hover:translate-x-3 "
                  fontSize="medium"
                />
              </span>
            </button>
          </div>

          {/* Right Column with Animated Headings */}
          <div className="h-[200px] flex flex-col gap-4 items-center justify-center">
            {/* <AnimatePresence mode="wait">
              <motion.h3
                initial={{ opacity: 0.5, y: 70 }}
                animate={{ opacity: 0.9, y: -15 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.8 }}

                
               className=" text-4xl md:text-5xl font-semibold text-black text-center ">
                {
                  headings[
                    (currentHeading - 1 + headings.length) % headings.length
                  ]
                }
              </motion.h3>
            </AnimatePresence> */}

            <AnimatePresence mode="wait">
              <motion.h3
                key={currentHeading}
                initial={{ opacity: 0.5, y: 25 }}
                animate={{ opacity: 1, y: -15 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-semibold text-black text-center drop-shadow-xl"
              >
                {headings[currentHeading]}
              </motion.h3>
            </AnimatePresence>
            {/* <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=" text-3xl md:text-2xl font-bold text-gray-400 text-center"
            >
              {headings[(currentHeading + 1) % headings.length]}
            </motion.h3> */}
          </div>
        </div>
      </div>
    </section>
  );
}
