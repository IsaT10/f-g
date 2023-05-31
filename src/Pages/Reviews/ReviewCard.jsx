import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider";

const ReviewCard = ({ review }) => {
  const { reviewMsg, rating, email, img } = review;
  const { user } = useContext(AuthContext);
  console.log(email, user.email);

  console.log(review);
  return (
    <div class="w-[450px] bg-lightGray py-4 px-8 shadow-lg rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        {user?.photoURL === img ? (
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src={user?.photoURL}
            alt=""
          />
        ) : (
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src={img}
            alt=""
          />
        )}
      </div>
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
        <p class="mt-2 text-gray-600">{reviewMsg}</p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-indigo-500">
          {user?.displayName}
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
