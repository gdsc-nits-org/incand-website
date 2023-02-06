import { useState } from "react";

import style from "./Slider.module.scss";

const Card = ({ src }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prev) => {
      return !prev;
    });
  };
  return (
    <div
      onClick={handleClick}
      className={
        active === true
          ? `${style["image-container"]} ${style["image-clicked"]}`
          : `${style["image-container"]}`
      }
    >
      <img
        className={
          active === true ? `${style.image} ${style["image-clicked"]}` : `${style.image}`
        }
        src={src}
        draggable="false"
        alt="pictures"
      />
    </div>
  );
};

export default Card;
