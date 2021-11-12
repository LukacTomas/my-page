import React from "react";
import { Rocket } from "./Rocket";
import { styled } from "@mui/system";
import { Asteroids } from "./Asteroids";
import {
  maxNumberOfAsteroid,
  randomAsteroidXPosition,
} from "./Asteroids/utils";

const Gamewindow = styled("div")(() => ({
  //backgroundColor: "red",
  margin: "0 auto",
  maxWidth: "800px",
  height: "80vh",
  position: "",
  top: 0,
  zIndex: "10",
}));


function Timer(funct, delayMs, times) {
  if (times === undefined) {
    times = -1;
  }
  if (delayMs === undefined) {
    delayMs = 10;
  }
  this.funct = funct;
  var times = times;
  var timesCount = 0;
  var ticks = (delayMs / 10) | 0;
  var count = 0;
  Timer.instances.push(this);

  this.tick = function () {
    if (count >= ticks) {
      this.funct();
      count = 0;
      if (times > -1) {
        timesCount++;
        if (timesCount >= times) {
          this.stop();
        }
      }
    }
    count++;
  };

  this.stop = function () {
    var index = Timer.instances.indexOf(this);
    Timer.instances.splice(index, 1);
  };
}

Timer.instances = [];

Timer.ontick = function () {
  for (var i in Timer.instances) {
    Timer.instances[i].tick();
  }
};

window.setInterval(Timer.ontick, 10);

const starter = {
  x: 50,
  y: 50,
  type: Math.random(),
  width: 100,
  moving: false,
};

export const Game = () => {
  const [asteroids, setAsteroids] = React.useState([starter]);

  const [start, setStart] = React.useState(false);

  const gameWinRef = React.createRef();
  const checkAsteroidDetection = (rocketPosition) => {
    console.log(rocketPosition);
  };

  console.log({ start });

  React.useEffect(() => {
    if (gameWinRef.current === null || !start) return;
    console.log("should start");
    const gameWin = gameWinRef.current.getBoundingClientRect();
    const gameWinLength = gameWin.width;

    const addRandomAsteroid = setInterval(() => {
      setAsteroids((asteroids) => {
        if (asteroids.length > maxNumberOfAsteroid) {
          return asteroids;
        }
        const newAsteroid = {
          x: randomAsteroidXPosition(0, gameWinLength),
          y: 0,
          width: randomAsteroidXPosition(40, 100),
          type: Math.random() > 0.5,
          moving: false,
        };
        const newAsteroids = [...asteroids, newAsteroid];

        return newAsteroids;
      });
    }, 1000);

    /*const move = setInterval(() => {
      setAsteroids((asteroids) => {
        const newAsteroids = asteroids.map((asteroid) => {
        
          if (asteroid.y > gameWin.height) return;

          const newAsteroid = { ...asteroid, y: asteroid.y + 15 };
          return newAsteroid;
        });
        console.log(newAsteroids);
        if (newAsteroids[0] === undefined) {
          return [starter];
        }
        return newAsteroids;
      });
    }, 100);*/

    return () => {
      clearInterval(addRandomAsteroid);
      //clearInterval(move);
    };
  }, [start, setAsteroids, gameWinRef]);

  return (
    <>
      <div onClick={() => setStart(true)}>START</div>
      <Gamewindow ref={gameWinRef}>
        <Asteroids asteroids={asteroids} />
        <Rocket
          gameWinRef={gameWinRef}
          checkAsteroidDetection={checkAsteroidDetection}
        />
      </Gamewindow>
    </>
  );
};
