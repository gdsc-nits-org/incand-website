import { Player } from "@lottiefiles/react-lottie-player";

import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={style.loader}>
      <Player
        loop
        autoplay
        src="/lottie/Incand.json"
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default Loader;
