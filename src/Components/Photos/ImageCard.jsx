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
    <img
      onClick={handleClick}
      className={active === true ? "image image-clicked" : "image"}
      src={src}
      draggable="false"
      alt="pictures"
    />
  );
};

export default Card;
