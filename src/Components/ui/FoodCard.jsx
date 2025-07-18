import React from "react";
import { NavLink } from "react-router";

const FoodCard = ({ item }) => {
  const isExpired = new Date(item.expiryDate) < new Date();
  return (
    <div className="relative rounded-xl p-[2px] snake-gradient shadow-xl">
      <div className="flex h-full transform flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105">
        {isExpired && (
          <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
            Expired
          </div>
        )}
        <div className="relative">
          <img
            className={`h-56 w-full object-cover ${
              isExpired ? "grayscale" : ""
            }`}
            src={item.foodImage}
            alt={item.foodTitle}
          />
          {isExpired && (
            <div className="absolute inset-0 bg-black opacity-20"></div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
              {item.category}
            </p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              {item.foodTitle}
            </h3>
            <div className="mt-4 space-y-2 text-gray-600">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5 text-teal-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v1h-3a3 3 0 00-6 0H3V5zm2 2h10v7a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                Quantity: {item.quantity}
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5 text-teal-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Expires on: {item.expiryDate}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <NavLink to={`/food/${item._id}`}>
              <button className="w-full rounded-lg bg-teal-800 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-teal-600">
                See Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
