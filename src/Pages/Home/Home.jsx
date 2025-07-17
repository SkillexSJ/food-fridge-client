import React from "react";
import Banner from "../../Components/ui/Banner";
import { useLoaderData } from "react-router";
import ExpiryFood from "./Sections/ExpiryFood";
import ExpiredFood from "./Sections/ExpiredFood";
import Stats from "./Sections/Stats";
import HowWorks from "./Sections/HowWorks";

const Home = () => {
  const data = useLoaderData();

  console.log(data);
  // console.log(data);
  return (
    <section className="">
      <div className="my-10">
        <Banner></Banner>
      </div>

      <div className="my-12 h-0.5 border-t-0 bg-teal-800 opacity-100 dark:opacity-50"></div>

      <div className="text-center font-extrabold my-10 space-y-20 ">
        <h1 className="text-3xl lg:text-5xl">TOP 6 TO BE EXPIRED</h1>
        <ExpiryFood data={data}></ExpiryFood>
      </div>

      <div className="my-12 h-0.5 border-t-0 bg-teal-800 opacity-100 dark:opacity-50"></div>

      <div>
        <h1 className="text-center font-extrabold text-5xl my-10">
          EXPIRED !!
        </h1>
        <ExpiredFood data={data}></ExpiredFood>
      </div>

      <div className="my-12 h-0.5 border-t-0 bg-teal-800 opacity-100 dark:opacity-50"></div>

      <div className="my-10">
        <HowWorks></HowWorks>
      </div>

      <div className="my-12 h-0.5 border-t-0 bg-teal-800 opacity-100 dark:opacity-50"></div>

      <div className="my-10">
        <Stats></Stats>
      </div>
    </section>
  );
};

export default Home;
