import React from "react";
import { motion } from "framer-motion";
import FoodCard from "../../../Components/ui/FoodCard";
import FridgeCard from "../../../Components/ui/FridgeCard";

const ExpiredFood = ({ data }) => {
  const today = new Date();

  const expiredItems = data.filter((item) => {
    const expiry = new Date(item.expiryDate);
    return expiry < today;
  });

  if (expiredItems.length === 0) {
    return null;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-red-50 py-12 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-red-800 sm:text-4xl"
          >
            Expired Food Items
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-2xl text-xl text-red-600 sm:mt-4"
          >
            These items have passed their expiry date. Please check them.
          </motion.p>
        </div>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {expiredItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FoodCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExpiredFood;
