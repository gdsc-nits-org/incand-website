import Card from "./ImageCard";
import "./slider.css";
import { images } from "./Images";
import { useRef, useEffect } from "react";
const Slider = () => {
  const container = useRef(null);
  const track = useRef(null);
  const handleOnDown = (e) => (track.current.dataset.mouseDownAt = e.clientX);

  const handleOnUp = (e) => {
    track.current.dataset.mouseDownAt = "0";
    track.current.dataset.prevPercentage = track.current.dataset.percentage;
  };
  const handleOnMove = (e) => {
    if (track.current.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track.current.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

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
  }, []);
  console.log(container);
  console.log(track);
  return (
    <div className="slider-container" ref={container}>
      <div id="image-track" ref={track} data-mouse-down-at="0" data-prev-percentage="0">
        {images.map((image) => {
          return <Card src={image.src} key={image.id} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
