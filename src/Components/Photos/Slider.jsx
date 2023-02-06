import { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

import Card from "./ImageCard";

import style from "./Slider.module.scss";

const Slider = ({ images }) => {
  const container = useRef(null);
  const track = useRef(null);

  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      // eslint-disable-next-line no-param-reassign
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  const contentWrapper = useRef(null);

  const handleOnDown = (e) => {
    track.current.dataset.mouseDownAt = e.clientX;
  };

  // eslint-disable-next-line no-unused-vars
  const handleOnUp = () => {
    track.current.dataset.mouseDownAt = "0";
    track.current.dataset.prevPercentage = track.current.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track.current.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX;

    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(track.current.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    //   const handleOnUp = (e) => {
    //     track.current.dataset.mouseDownAt = "0";
    //     track.current.dataset.prevPercentage = track.current.dataset.percentage;
    //   };
    //   const handleOnMove = (e) => {
    //     if (track.current.dataset.mouseDownAt === "0") return;

    //     const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
    //       maxDelta = window.innerWidth / 2;
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

      //     const percentage = (mouseDelta / maxDelta) * -100,
      //       nextPercentageUnconstrained =
      //         parseFloat(track.current.dataset.prevPercentage) + percentage,
      //       nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      //     track.current.dataset.percentage = nextPercentage;

      //     track.current.animate(
      //       {
      //         transform: `translate(${nextPercentage}%, -50%)`,
      //       },
      //       { duration: 1200, fill: "forwards" }
      //     );
      //     for (const image of track.current.getElementsByClassName("image")) {
      //       image.animate(
      //         {
      //           objectPosition: `${100 + nextPercentage}% center`,
      //         },
      //         { duration: 1200, fill: "forwards" }
      //       );
      //     }
      //   };
      //   useEffect(() => {
      //     if (container && container.current) {
      //       container.current.onmousedown = (e) => handleOnDown(e);

      //       container.current.ontouchstart = (e) => handleOnDown(e.touches[0]);

      //       container.current.onmouseup = (e) => handleOnUp(e);

      //       container.current.ontouchend = (e) => handleOnUp(e.touches[0]);

      //       container.current.onmousemove = (e) => handleOnMove(e);

      //       container.current.ontouchmove = (e) => handleOnMove(e.touches[0]);
      //     }
      //   }, []);

      container.current.ontouchmove = (e) => handleOnMove(e.touches[0]);
    }
  }, []);

  return (
    <div className={style["slider-container"]} ref={container}>
      <div
        id={style["image-track"]}
        ref={track}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <button
          onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, 10);
          }}
        >
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            color="white"
            width={24}
            height={24}
          />
        </button>
        {images.map((image) => {
          return <Card src={image.src} key={image.id} />;
        })}
        <button
          onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, -10);
          }}
        >
          <Icon
            icon="material-symbols:arrow-forward-ios-new-rounded"
            color="white"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
