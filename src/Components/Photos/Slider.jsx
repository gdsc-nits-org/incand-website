import { useRef, useEffect, useCallback } from "react";

import Card from "./ImageCard";

import style from "./Slider.module.scss";

const Slider = ({ images }) => {
  const container = useRef(null);
  const track = useRef(null);

  const handleOnDown = (e) => {
    track.current.dataset.mouseDownAt = e.clientX;
  };

  // eslint-disable-next-line no-unused-vars
  const handleOnUp = () => {
    track.current.dataset.mouseDownAt = "0";
    track.current.dataset.prevPercentage = track.current.dataset.percentage;
  };

  const handleOnMove = useCallback((e) => {
    if (track.current.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX;

    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(track.current.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.current.dataset.percentage = nextPercentage;
    moveImages(nextPercentage);
  }, []);

  const moveImages = (nextPercentage) => {
    track.current.dataset.percentage = nextPercentage;

    track.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
    for (const image of track.current.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  useEffect(() => {
    if (container && container.current) {
      container.current.onmousedown = (e) => handleOnDown(e);

      container.current.ontouchstart = (e) => handleOnDown(e.touches[0]);

      container.current.onmouseup = (e) => handleOnUp(e);

      container.current.ontouchend = (e) => handleOnUp(e.touches[0]);

      container.current.onmousemove = (e) => handleOnMove(e);

      container.current.ontouchmove = (e) => handleOnMove(e.touches[0]);
    }
  }, [handleOnMove]);

  return (
    <div className={style["slider-container"]} ref={container}>
      <div
        id={style["image-track"]}
        ref={track}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        {images.map((image) => {
          return <Card src={image.src} key={image.id} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
