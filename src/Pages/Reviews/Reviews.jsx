import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/Authprovider";
import MyReviewCard from "./MyReviewCard";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user.email);
  const [reviews, setReviews] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  //localhost:5000/reviews?reviewId=6475916664fc3f626d03d8f3
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <p>{reviews.length}</p>
      {reviews.map((review) => (
        <MyReviewCard
          key={review._id}
          review={review}
          setReviews={setReviews}
          reviews={reviews}
        />
      ))}
    </div>
  );
};

export default Reviews;
