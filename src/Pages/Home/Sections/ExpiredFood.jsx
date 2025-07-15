import React from "react";
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

  return (
    <section className="bg-red-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-red-800 sm:text-4xl">
            Expired Food Items
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-red-600 sm:mt-4">
            These data have passed their expiry date. Please check them.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expiredItems.map((item, index) => (
            <FridgeCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpiredFood;
