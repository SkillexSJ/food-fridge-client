import Lottie from "lottie-react";
import React from "react";
import add from "../../../assets/lottie/Check animation.json";
import track from "../../../assets/lottie/Gears Lottie Animation.json";
import heart from "../../../assets/lottie/Heart fav.json";

const HowWorks = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-800 sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto font-serif mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Managing your food inventory is as easy as 1-2-3.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex h-15 w-40 items-center justify-center rounded-full  text-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg> */}
              <Lottie animationData={add}></Lottie>
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              1. Add Your Food
            </h3>
            <p className="mt-2 font-serif text-base text-gray-500">
              Quickly add items to your digital fridge with details like expiry
              dates.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-35 items-center justify-center rounded-full  text-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg> */}

              <Lottie animationData={track}></Lottie>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">
              2. Track & Monitor
            </h3>
            <p className="mt-2 font-serif text-base text-gray-500">
              Get alerts for expiring items and see your full inventory at a
              glance.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-17 w-45 items-center justify-center rounded-full text-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg> */}
              <Lottie animationData={heart}></Lottie>
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              3. Reduce Waste
            </h3>
            <p className="mt-2 font-serif text-base text-gray-500">
              Use what you have, save money, and contribute to a healthier
              planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
