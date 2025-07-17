import React from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../../Components/ui/FoodCard";
import FridgeCard from "../../Components/ui/FridgeCard";
import { motion } from "framer-motion";
const Fridge = () => {
  const data = useLoaderData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-gray-50 w-full my-10 md:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            My Fridge Inventory
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"
          >
            Here's a quick look at all the items currently in your fridge.
          </motion.p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item, index) => (
            <motion.div variants={itemVariants}>
              <FridgeCard key={index} item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Fridge;
