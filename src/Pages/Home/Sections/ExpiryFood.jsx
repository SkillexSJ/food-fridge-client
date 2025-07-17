import React from "react";
import FoodCard from "../../../Components/ui/FoodCard";

const ExpiryFood = ({ data }) => {
  const today = new Date();

  // Filter for foods expiring in the next 5 days
  const expiringSoon = data
    .filter((item) => new Date(item.expiryDate) >= today) // exclude expired
    .sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate)) // soonest first
    .slice(0, 6); // top 6 only

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
      {expiringSoon.map((item) => {
        return <FoodCard key={item._id} item={item}></FoodCard>;
      })}
    </div>
  );
};

export default ExpiryFood;
