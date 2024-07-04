import React from "react";
import banner from "../images/Banner.png";
import "../App.jsx";

import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
    
      <div className=" background1 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white dark:text-black">
              Hello, welcomes here to learn something{" "}
              <span className="text-red-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl text-white">
            Mastering coding is not a destination but a continuous journey of learning, experimenting, and growing. Embrace each step, and remember that every great coder was once a beginner.
            </p>
           
          </div> 
            <Link to="/course">
            <button className="bg-blue-500 mt-14 text-white px-11 py-5 rounded-md hover:bg-pink-700 duration-300 ">
              Get Started
            </button>
          </Link>
          <p className="text-white font-bold">
                About more{" "}
                <Link
                  to="/about"
                  className="underline text-pink-500 cursor-pointer text-xl"
                >
                  Information
                </Link>{" "}
              </p>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
