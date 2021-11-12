import React from "react";
import { Rocket } from "./Rocket";
import { styled } from "@mui/system";
import { Asteroids } from "./Asteroids";
import {
  maxNumberOfAsteroid,
  randomAsteroidXPosition,
} from "./Asteroids/utils";
import { Button } from "@mui/material";

const Gamewindow = styled("div")(() => ({
  //backgroundColor: "red",
  margin: "0 auto",
  maxWidth: "800px",
  height: "80vh",
  position: "",
  top: 0,
  zIndex: "10",
}));

const getRandomAsteroid = (xPos) => ({
  x: randomAsteroidXPosition(0, xPos),
  y: 0,
  type: Math.random(),
  width: randomAsteroidXPosition(60, 150),
  speed: randomAsteroidXPosition(15, 30),
});

export const Game = () => {
  const [asteroids, setAsteroids] = React.useState([getRandomAsteroid(500)]);

  const [start, setStart] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const gameWinRef = React.createRef();
  const rocketRef = React.useRef();
  const timerRef = React.createRef(0);
  let moveOrRandomAsteroid = React.createRef();
  const checkAsteroidDetection = () => {
    const rocket = rocketRef.current.getBoundingClientRect();
    const asteroids = document.getElementsByClassName("asteroid");
    for (let asteroid of asteroids) {
      asteroid = asteroid.getBoundingClientRect();
      const isXin =
        asteroid.x < rocket.x + rocket.width &&
        asteroid.x + asteroid.width > rocket.x;
      const isYin =
        asteroid.y < rocket.y + rocket.height &&
        asteroid.height + asteroid.y > rocket.y;
      const colision = isXin && isYin;
      if (colision) {
        //setStart(false);
        setAsteroids([getRandomAsteroid(500)]);
      }
    }
  };

  React.useEffect(() => {
    if (gameWinRef.current === null || !start) return;

    const gameWin = gameWinRef.current.getBoundingClientRect();
    const gameWinLength = gameWin.width;

    moveOrRandomAsteroid.current = setInterval(() => {
      setTimer((time) => time + 1);
      setAsteroids((asteroids) => {
        let newAsteroids = asteroids.map((asteroid) => {
          if (asteroid.y > gameWin.height) {
            return getRandomAsteroid(gameWinLength + 100);
          }

          const newAsteroid = { ...asteroid, y: asteroid.y + asteroid.speed };
          return newAsteroid;
        });
        newAsteroids = newAsteroids.filter(
          (asteroid) => asteroid !== undefined
        );

        return newAsteroids;
      });
      // check detection
      checkAsteroidDetection();
      if (timer < 5) return;

      setAsteroids((asteroids) => {
        if (asteroids.length > maxNumberOfAsteroid) {
          return asteroids;
        }
        const newAsteroid = getRandomAsteroid(gameWinLength + 100);
        const newAsteroids = [...asteroids, newAsteroid];

        return newAsteroids;
      });
      setTimer(0);
    }, 100);

    return () => {
      clearInterval(moveOrRandomAsteroid.current);
      //clearInterval(move);
    };
  }, [start, setAsteroids, gameWinRef, timerRef, timer, moveOrRandomAsteroid]);
  React.useEffect(() => {
    if (start === false) {
      clearInterval(moveOrRandomAsteroid.current);
    }
  }, [start, moveOrRandomAsteroid]);
  return (
    <>
      <Button variant="contained" onClick={() => setStart((s) => !s)}>
        {!start ? "Start" : "Stop"}
      </Button>
      <Gamewindow ref={gameWinRef}>
        <Asteroids asteroids={asteroids} />
        <Rocket
          gameWinRef={gameWinRef}
          rocketRef={rocketRef}
          checkAsteroidDetection={checkAsteroidDetection}
          start={start}
        />
      </Gamewindow>
    </>
  );
};
