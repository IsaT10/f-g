import React, { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../../../Layouts/Main";
import ServiceCard from "./ServiceCard";
import { useSearchParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Services = () => {
  // const services = useContext(ServicesContext);
  const [serv, setServ] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServ(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p className="text-center text-lg font-semibold md:mt-32 md:mb-64 lg:mt-44 lg:mb-96">
          Loading...
        </p>
      ) : (
        <>
          <div className="relative">
            <h2 className=" text-center text-8xl font-bold uppercase text-lightGray">
              What we do
            </h2>
            <h3 className="absolute top-1/2  right-1/2 translate-x-16  text-xl font-bold text-dark ">
              All Service
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {serv.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
