import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const { _id, title, rating, img, price, description } = service;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = e.target.review.value;
    console.log(msg);

    const review = {
      reviewId: _id,
      reviewMsg: msg,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  //   useEffect(() => {
  //     fetch("http://localhost:5000/reviews", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  return (
    <div>
      <div className="relative mb-10">
        <h2 className=" text-center text-8xl font-bold uppercase text-lightGray">
          Service Details
        </h2>
        <h3 className="absolute top-1/2  right-1/2 translate-x-11  text-xl font-bold text-dark ">
          Details
        </h3>
      </div>
      <h2 className="text-3xl font-semibold ">{title}</h2>
      <div className="grid grid-cols-5 gap-10 my-6">
        <img
          className="w-[500px] h-[500px] object-cover col-span-2"
          src={img}
          alt=""
        />
        <p className="text-lg text-gray col-span-3">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse suscipit accusamus neque ab debitis? Quis necessitatibus,
          perferendis, nulla magnam inventore ut sed et alias maiores saepe
          voluptatibus doloremque ipsam ipsa magni! Possimus molestias illum,
          dicta laudantium iste, cumque quaerat nihil corporis praesentium eaque
          obcaecati nostrum? Exercitationem eum error ipsam laborum quae quam
          asperiores cupiditate soluta. Illum repellendus eaque corrupti fugit
          aperiam maxime, necessitatibus quam molestiae eos dignissimos
          excepturi quaerat fuga impedit provident nesciunt, reiciendis vero
          odio incidunt obcaecati perspiciatis, nemo debitis. Nemo similique
          illum iusto eaque est, qui iure ullam! Sint magnam voluptates
          voluptatum illo beatae quod accusantium molestias nam.
        </p>
      </div>
      <p className="text-xl text-orange font-semibold">Price:{price}$</p>
      <p className="text-lg text-orange font-semibold">Rating:{rating}</p>
      <div>
        <h3>Service reviews</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            name="review"
            placeholder="review"
            className="textarea textarea-bordered textarea-sm w-full max-w-xs"
          ></textarea>
          <button className="px-6 py-3 border-2 border-orange">
            Add rewiew
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
