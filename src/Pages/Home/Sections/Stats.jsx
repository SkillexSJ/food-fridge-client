import React from "react";
import CountUp from "react-countup";
import { Magnetic } from "../../../Components/animate-ui/effects/Magnetic";

const Stats = () => {
  return (
    <section className="bg-teal-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-800 sm:text-4xl">
            Our Community Impact
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-teal-600 sm:mt-4">
            Together, we're making a real difference in reducing food waste.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <Magnetic>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <p className="text-5xl font-extrabold text-teal-600">
                <CountUp duration={20} end={223232} /> +
              </p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                Meals Saved
              </p>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <p className="text-5xl font-extrabold text-teal-600">
                <CountUp duration={20} end={2632} /> +
              </p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                Users Joined
              </p>
            </div>
          </Magnetic>

          <Magnetic>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <p className="text-5xl font-extrabold text-teal-600">
                <CountUp duration={20} end={123742} /> +
              </p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                Items Tracked
              </p>
            </div>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Stats;
