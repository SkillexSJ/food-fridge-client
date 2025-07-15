import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://placehold.co/600x400/a7c4b8/ffffff?text=Research+1",
    "https://placehold.co/600x400/b2d8d8/ffffff?text=Clinical+2",
    "https://placehold.co/600x400/c7e2d9/ffffff?text=AI+Agent+3",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  return (
    <section className="flex flex-col items-center bg-white py-12 text-center md:py-24 overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative inline-block bg-gradient-to-r from-teal-600 via-emerald-500 to-lime-400 bg-clip-text text-4xl font-extrabold italic text-transparent md:text-6xl"
        >
          <span className="cool-text">
            Track. Save. Share. Reduce Food Waste.
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Stay ahead of food expiry with smart tracking. Get alerts, organize
          your fridge, and share excess items with your community—because every
          meal matters.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative z-10 overflow-hidden rounded-lg bg-gradient-to-r mt-5 from-teal-500 via-emerald-500 to-lime-400 px-8 py-3 font-semibold text-white shadow-md"
        >
          <span className="relative z-20">Book a Demo</span>
          <div className="absolute inset-0 z-0 animate-gradient-x bg-gradient-to-r from-teal-500 via-emerald-400 to-lime-300 opacity-20 blur-lg"></div>
        </motion.button>
      </motion.div>

      {/* Image Slider */}
      <motion.div
        className="relative mt-12 w-full max-w-5xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
        >
          {[...slides, ...slides.slice(0, 2)].map((slide, index) => (
            <motion.div
              key={index}
              className="w-1/3 flex-shrink-0 px-2 md:px-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="h-auto w-full rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
