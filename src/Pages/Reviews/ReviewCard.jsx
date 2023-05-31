import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider";
import { FaUserAlt } from "react-icons/fa";
import avatar from "../../Assets/v937-aew-165-klhcwecm.jpg";

const ReviewCard = ({ review }) => {
  const { reviewMsg, rating, img, name } = review;
  const { user } = useContext(AuthContext);

  //   console.log(review);
  return (
    <div class="w-[450px] bg-lightGray py-4 px-8 shadow-lg rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        {img ? (
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src={img}
            alt=""
          />
        ) : (
          <img
            class="w-20 h-20 object-cover rounded-full  "
            src={avatar}
            alt=""
          />
          //   <div className="avatar">
          //     <div className="w-20 pl-1 rounded-full ml-4">
          //       <FaUserAlt className="text-6xl " />
          //     </div>
          //   </div>
        )}
      </div>
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
        <p class="mt-2 text-gray-600">{reviewMsg}</p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-indigo-500">
          {name}
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
