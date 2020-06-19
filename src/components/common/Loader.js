import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/building.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ margin: "auto", marginTop: "80px" }}>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        style={{ margin: "auto" }}
      />
    </div>
  );
};

export default Loader;
