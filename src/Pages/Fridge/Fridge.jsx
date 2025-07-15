import React from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../../Components/ui/FoodCard";
import FridgeCard from "../../Components/ui/FridgeCard";

const Fridge = () => {
  const data = useLoaderData();

  return (
    <section className="bg-gray-50 my-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Fridge Inventory
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Here's a quick look at all the items currently in your fridge.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <FridgeCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fridge;
