import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import FridgeCard from "../../Components/ui/FridgeCard";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Fridge = () => {
  const data = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // motion.dev
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  // motion.dev
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Extract categories
  const categories = useMemo(() => {
    const uniqueCategories = [
      "All",
      ...new Set(data.map((item) => item.category)),
    ];
    return uniqueCategories;
  }, [data]);

  // Filter data
  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return data;
    return data.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, data]);

  // Calculate expired and nearly expired items
  const today = new Date();
  const { expiredCount, nearlyExpiredCount } = useMemo(() => {
    let expired = 0,
      nearlyExpired = 0;
    data.forEach((item) => {
      const expiryDate = new Date(item.expiryDate);
      const diffDays = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) expired++;
      else if (diffDays <= 5) nearlyExpired++;
    });
    return { expiredCount: expired, nearlyExpiredCount: nearlyExpired };
  }, [data]);

  return (
    <motion.section
      className=" w-full my-10 md:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl  py-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-teal-800 sm:text-4xl"
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

        {/* CountUp Section */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="bg-red-100 text-center text-red-700 p-4 rounded-full shadow">
            <p className="font-bold text-lg">Expired Items</p>
            <CountUp
              end={expiredCount}
              duration={2}
              className="text-2xl font-extrabold"
            />
          </div>
          <div className="bg-teal-800 text-center flex flex-col text-teal-50 p-4 rounded-full shadow">
            <p className="font-bold  text-lg">Nearly Expired (5 days)</p>
            <CountUp
              end={nearlyExpiredCount}
              duration={2}
              className="text-2xl font-extrabold"
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col justify-start mb-8">
          <div className="mb-2 font-semibold">
            <h1>Search By Category</h1>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border w-40 border-teal-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-800"
          >
            {categories.map((cat, idx) => (
              <option className="font-semibold" key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Food Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FridgeCard item={item} />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No items found in this category.
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Fridge;
