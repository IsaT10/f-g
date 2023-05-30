import React, { useContext } from "react";
import { ServicesContext } from "../../../Layouts/Main";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useContext(ServicesContext);
  return (
    <div>
      <div className="relative">
        <h2 className=" text-center text-8xl font-bold uppercase text-lightGray">
          What we do
        </h2>
        <h3 className="absolute top-1/2  right-1/2 translate-x-16  text-xl font-bold text-dark ">
          All Service
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
