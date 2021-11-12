import React from "react";
import asteroid1 from "Static/asteroid-1.svg";
import asteroid2 from "Static/asteroid-2.svg";
export const Asteroids = ({ asteroids }) => {
  return asteroids.map((asteroid, index) => (
    <img
      key={index}
      src={asteroid.type ? asteroid1 : asteroid2}
      alt="asteroid"
      style={{
        position: "relative",
        top: asteroid.y,
        left: asteroid.x,
        width: asteroid.width,
      }}
    />
  ));
};
