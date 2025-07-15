import React from "react";

const FridgeCard = ({ item }) => {
  const isExpired = new Date(item.expiryDate) < new Date();
  return (
    <div className="relative flex h-full transform flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105">
      {/* --- Expired Badge --- */}
      {isExpired && (
        <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
          Expired
        </div>
      )}
      <div className="relative">
        <img
          className={`h-56 w-full object-cover ${isExpired ? "grayscale" : ""}`}
          src={item.foodImage}
          alt={item.foodTitle}
        />
        {/* Adds a subtle overlay for expired items to visually distinguish them */}
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
                className="mr-2 h-5 w-5 text-gray-400"
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
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full rounded-lg bg-gray-800 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-gray-900">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FridgeCard;
