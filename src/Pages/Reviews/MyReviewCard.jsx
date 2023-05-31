import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider";
import { IoIosCloseCircle } from "react-icons/io";

import crossBtn from "../../Assets/cross.webp";

const MyReviewCard = ({ review, setReviews, reviews }) => {
  const { _id, reviewMsg, rating, serviceName, serviceImg } = review;

  const handleDelete = (id) => {
    const procced = window.confirm("Are you want to delete this order?");
    if (procced) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            // toast.success("Successfully delete");
            const remainingReviews = reviews.filter((rev) => rev._id !== _id);
            setReviews(remainingReviews);
          }
        });
    }
  };

  return (
    <div className="relative border border-gray border-opacity-40  w-96 px-6 py-6 mb-4">
      <div className="flex items-center justify-between gap-4">
        <img
          alt="Man"
          src={serviceImg}
          className="h-16 w-16 rounded object-cover"
        />
        <h2 className="text-xl font-semibold text-dark">{serviceName}</h2>
      </div>
      <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        {reviewMsg}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-gray ">Rating : {rating}</p>
        <button className="text-sm font-semibold bg-dark text-white px-2 py-0.5 rounded">
          Edit
        </button>
      </div>
      <button
        onClick={() => handleDelete(_id)}
        className=" bg-white absolute -top-2 -right-2"
      >
        <IoIosCloseCircle className="text-3xl" />
        {/* <img className="w-6" src={crossBtn} alt="" /> */}
      </button>
    </div>
  );
};

export default MyReviewCard;
