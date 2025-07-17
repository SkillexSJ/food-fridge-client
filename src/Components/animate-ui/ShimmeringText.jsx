"use client";

import React from "react";
import { motion } from "motion/react";

// Optional: Replace this with your own utility or remove if not using Tailwind's `cn` utility
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ShimmeringText({
  text,
  duration = 1,
  transition = {},
  wave = false,
  className,
  ...props
}) {
  return (
    <motion.span
      className={cn(
        "relative inline-block bg-gradient-to-r from-teal-600 via-emerald-500 to-lime-400 bg-clip-text text-transparent [perspective:500px]",
        className
      )}
      {...props}
    >
      {text?.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre [transform-style:preserve-3d]"
          initial={{
            ...(wave ? { scale: 1, rotateY: 0 } : {}),
          }}
          animate={{
            ...(wave
              ? {
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1],
                  rotateY: [0, 15, 0],
                }
              : {}),
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: text.length * 0.05,
            delay: (i * duration) / text.length,
            ease: "easeInOut",
            ...transition,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default ShimmeringText;
