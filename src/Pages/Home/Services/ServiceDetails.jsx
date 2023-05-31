import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Authprovider";
import ReviewCard from "../../Reviews/ReviewCard";

const ServiceDetails = () => {
  const service = useLoaderData();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //   console.log(from);

  //   console.log(service);
  const { _id, title, rating, img, price, description } = service;
  //   console.log(_id);
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?reviewId=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = e.target.review.value;
    const rating = e.target.rating.value;
    // console.log(msg, rating);

    // console.log(email);

    if (user) {
      const email = user.email;
      const name = user.displayName;
      const serviceName = title;
      const serviceImg = img;
      const review = {
        reviewId: _id,
        reviewMsg: msg,
        email,
        rating,
        reviewerInfo: { name, img: user.photoURL },
        serviceName,
        serviceImg,
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
          if (data.acknowledged) {
            e.target.reset();
          }
        })
        .catch((error) => console.log(error));
    } else {
      //   navigate(from, { replace: true });
      navigate("/login");
    }
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
      <h3>Service reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
      <div className="mt-20">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-5xl font-semibold text-dark">
              Leave us a feedback!
            </h2>
            <p className="mt-4 text-gray2">
              Please provide your valuable feedback{" "}
            </p>
            <p>{reviews.length}</p>
          </div>
          <div className="p-14 bg-lightGray2 rounded-md">
            <h2 className="text-2xl font-semibold mb-3">Have a suggestion?</h2>
            <form onSubmit={handleSubmit}>
              <div className="">
                <label className="label">
                  <span className="text-sm uppercase font-semibold text-dark">
                    Rating
                  </span>
                </label>
                <input
                  name="rating"
                  type="text"
                  className="input input-md w-80"
                />
                <label className="label mt-2">
                  <span className="text-sm text-dark uppercase font-semibold ">
                    Message
                  </span>
                </label>
                <textarea
                  name="review"
                  className="textarea w-80 h-28"
                  required
                ></textarea>
              </div>
              <div className="text-center mt-6">
                <button className="px-6 py-3 border-2 bg-orange text-white uppercase font-bold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
