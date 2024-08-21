import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className="book_ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} style={{ color: "orange" }} />
      ))}
      {!Number.isInteger(rating) && (
        <FontAwesomeIcon icon="star-half-alt" style={{ color: "orange" }} />
      )}
    </div>
  );
};
export default Rating;
