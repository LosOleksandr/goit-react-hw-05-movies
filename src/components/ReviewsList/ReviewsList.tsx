import { Reviews } from "@interfaces/api";
import React from "react";

interface ReviewsListProps {
  reviews: Reviews[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {!reviews?.length ? (
        <h2>No Info!</h2>
      ) : (
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <p style={{ marginBottom: "1rem", textTransform: "capitalize" }}>
                {author}
              </p>
              <p style={{ marginBottom: "1rem" }}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsList;
