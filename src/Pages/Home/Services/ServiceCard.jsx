import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, description } = service;
  return (
    <div className=" bg-lightGray rounded-md p-5 w-72 md:w-96 shadow-xl">
      <figure className="overflow-hidden rounded-md">
        <img
          className="h-80 w-full object-cover rounded-md hover:scale-[1.1]  duration-200"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="mt-3">
        <h2 className="card-title">{title}!</h2>
        <p className="text-base text-gray">{description.slice(0, 70)}...</p>
        <div className="text-right">
          <Link
            to={`/services/${_id}`}
            className="text-orange font-bold text-lg "
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
