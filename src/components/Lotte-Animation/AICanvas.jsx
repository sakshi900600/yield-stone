import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const AICanvas = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0, // keep behind content
      }}
    >
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_tll0j4bb.json" // replace with AI/tech animation link
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default AICanvas;
