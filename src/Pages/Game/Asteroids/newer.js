import React from "react";
import asteroid1 from "Static/asteroid-1.svg";
import asteroid2 from "Static/asteroid-2.svg";
import asteroid3 from "Static/asteroid-3.svg";

const asteroidTypes = [asteroid1, asteroid2, asteroid3];
const asteroidStyles = (asteroid) => ({
  position: "absolute",
  display: "block",
  top: `${asteroid.y}px`,
  left: `${asteroid.x}px`,
  width: asteroid.width,
  height: asteroid.width,
  userSelect: "none",
});

function Asteroids({ asteroids }) {
  console.log("From asteroids");
  return asteroids.map((asteroid, index) => (
    <img
      key={index}
      src={asteroidTypes[asteroid.type]}
      alt="asteroid"
      className="asteroid"
      style={asteroidStyles(asteroid)}
    />
  ));
}

export default React.memo(Asteroids);
