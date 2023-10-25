import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loading from "./loading.json";
function LottiePlayer() {
  return (
    <Player
      autoplay
      loop
      src={loading}
      style={{ height: "30px", width: "30px" }}
    ></Player>
  );
}

export default LottiePlayer;
