import React from "react";
import "./ReviewItem.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, price, quantity, img, shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>Shipping Charge : ${shipping}</small>
          </p>
          <p>
            <small>Quantity : {quantity}</small>
          </p>
          <p>Price : ${price}</p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)}>
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashCan}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
