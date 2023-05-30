import React from "react";
import heroImg from "../../../Assets/henrique-hanemann-Lufhurpl4xo-unsplash.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="">
      <div className="relative w-full rounded-md">
        <div className="hero-img">
          <img
            className="h-screen w-full object-cover rounded-md"
            src={heroImg}
            alt=""
          />
        </div>
        <div className="absolute transform -translate-y-1/2 left-24 top-1/2 ">
          <h1 className="text-6xl font-bold text-white ">
            Fast <br /> Bicycle <br /> Messengers
          </h1>
          <p className=" mt-3 text-gray">
            Bicycle messengers (also known as bike or cycle couriers) <br /> are
            people who work for courier companies (also known as messenger{" "}
            <br />
            companies) carrying and delivering items by bicycle, in city
            centers.
          </p>
          <button className="bg-orange text-white hover:bg-white hover:text-orange duration-150 text-lg font-semibold px-5 py-3 mt-9">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
