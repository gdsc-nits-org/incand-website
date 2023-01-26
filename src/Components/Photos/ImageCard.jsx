import "./slider.css";
import { useState } from "react";
const Card = ({ src }) => {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    setActive((prev) => {
      return !prev;
    });
  };
  return (
    <div
      className={active === true ? "image-container image-clicked" : "image-container"}
    >
      <img
        onClick={handleClick}
        className={active === true ? "image image-clicked" : "image"}
        src={src}
        draggable="false"
        alt="pictures"
      />
    </div>
  );
};

export default Card;
