import React from "react";
import asteroid1 from "Static/asteroid-1.svg";
import asteroid2 from "Static/asteroid-2.svg";
import asteroid3 from "Static/asteroid-3.svg";
export const Asteroids = ({ asteroids }) => {
  return asteroids.map((asteroid, index) => (
    <img
      key={index}
      src={
        asteroid.type < 0.3
          ? asteroid1
          : asteroid.type < 0.6
          ? asteroid2
          : asteroid3
      }
      alt="asteroid"
      className="asteroid"
      style={{
        position: "absolute",
        display: "block",
        transform: `translateX(25vw)`,
        top: `${asteroid.y}px`,
        left: `${asteroid.x}px`,
        width: asteroid.width,
        height: asteroid.width,
        userSelect: "none",
      }}
    />
  ));
};
