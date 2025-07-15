import React from "react";
import FoodCard from "../../../Components/ui/FoodCard";

const ExpiryFood = ({ data }) => {
  //   data.slice(0, 3).map((item) => console.log(item.expiryDate));
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
      {data.slice(0, 6).map((item) => {
        return <FoodCard item={item}></FoodCard>;
      })}
    </div>
  );
};

export default ExpiryFood;
