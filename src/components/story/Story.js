import React from "react";
import { Link } from "react-router-dom";

function Story({ seen, size }) {
  return (
    <Link to={"/stories"} className="story-container">
      <div className={`story ${seen}`}>
        <img
          src={`https://picsum.photos/${size}`}
          alt="story"
          className="story-img"
        ></img>
      </div>
      <p className="username">Userusername</p>
    </Link>
  );
}

export default Story;
