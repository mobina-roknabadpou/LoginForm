import React from "react";
import { Player} from "@lottiefiles/react-lottie-player";
function LottiePlayer() {
  return (
    <Player
      autoplay
      loop
      src="./moreLottie.json"
    //   style={{ height: "300px", width: "300px" }}
    >
      {/* <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} /> */}
    </Player>
  );
}

export default LottiePlayer;
