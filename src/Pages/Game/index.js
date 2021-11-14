import React, {
  useState,
  useCallback,
  useEffect,
  createRef,
  useRef,
} from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Rocket from "./Rocket";
import { Asteroids } from "./Asteroids";
import { Seo } from "Seo";
import { useLanguage } from "Hooks";
import { useData } from "./config";
import {
  maxNumberOfAsteroid,
  randomAsteroidXPosition,
  randomAsteroidSpeed,
  randomAsteroidWidth,
  getRandomInt,
} from "./Asteroids/utils";
import stateMachine, { initialState } from "./_stateMachine";
import Gamemodal from "./Modal";

const Gamewindow = styled("div")(() => ({
  background: "rgba(0,0,0,0.5)",
  margin: "0 auto",
  maxWidth: "800px",
  height: "75vh",
  top: 0,
  zIndex: "10",
}));

const getRandomAsteroid = (xPos) => ({
  x: randomAsteroidXPosition(xPos[0], xPos[1]),
  y: 0,
  type: getRandomInt(0, 2),
  width: randomAsteroidWidth(80, 150),
  speed: randomAsteroidSpeed(),
});

const isColision = (asteroid, rocket) => {
  const isXin =
    asteroid.x < rocket.x + rocket.width &&
    asteroid.x + asteroid.width > rocket.x;
  const isYin =
    asteroid.y < rocket.y + rocket.height &&
    asteroid.height + asteroid.y > rocket.y;
  const colision = isXin && isYin;
  return colision;
};

export default function Game() {
  const lang = useLanguage();
  const data = useData(lang);
  const [state, setState] = useState(initialState);
  const [asteroids, setAsteroids] = useState([getRandomAsteroid([100, 500])]);

  const gameWinRef = useRef();
  const points = useRef(0);
  const rocketRef = useRef();
  const gameInterval = createRef();
  const timerRef = useRef(0);

  // transition between machine states
  const transition = useCallback(
    (action) => {
      const nextState = stateMachine[state][action.type];
      if (!nextState) return;
      setState(nextState);
    },
    [state]
  );

  const closeModal = useCallback(() => {
    transition({ type: "NEW" });
  }, [transition]);

  const getPoints = useCallback(() => {
    return points.current;
  }, []);

  const afterColisionEffects = useCallback(() => {
    setAsteroids([getRandomAsteroid(500)]);
    timerRef.current = 0;
  }, []);

  const checkAsteroidColision = useCallback(() => {
    const rocket = rocketRef.current.getBoundingClientRect();
    // TODO should do something with finding by Classname
    // useRef should be problably used
    const asteroids = document.getElementsByClassName("asteroid");
    for (let asteroid of asteroids) {
      asteroid = asteroid.getBoundingClientRect();
      if (isColision(asteroid, rocket)) {
        transition({ type: "COLIDED" });
        afterColisionEffects();
        break;
      }
    }
  }, [transition, afterColisionEffects]);

  const toggleGame = useCallback(() => {
    if (state === "prepared") {
      transition({ type: "START" });
    } else {
      transition({ type: "TOGGLE" });
    }
  }, [state, transition]);

  useEffect(() => {
    if (gameWinRef.current === null || state === "prepared") return;

    gameInterval.current = setInterval(() => {
      const gameWin = gameWinRef.current.getBoundingClientRect();
      const xPos = [gameWin.x, gameWin.x + gameWin.width];
      setAsteroids((asteroids) => {
        timerRef.current = timerRef.current + 1;
        const newAsteroids = asteroids.map((asteroid) => {
          if (asteroid.y > gameWin.bottom - asteroid.width) {
            points.current = points.current + 1;
            return getRandomAsteroid(xPos);
          }
          return { ...asteroid, y: asteroid.y + asteroid.speed };
        });

        if (newAsteroids.length >= maxNumberOfAsteroid) {
          return newAsteroids;
        }
        if (timerRef.current > 10) {
          timerRef.current = 0;
          newAsteroids.push(getRandomAsteroid(xPos));
        }
        return newAsteroids;
      });

      // check detection
      checkAsteroidColision();
    }, 100);

    return () => {
      clearInterval(gameInterval.current);
    };
  }, [state, gameInterval, checkAsteroidColision]);

  useEffect(() => {
    if (state !== "playing") {
      clearInterval(gameInterval.current);
    }
    if (state === "prepared") {
      points.current = 0;
      timerRef.current = 0;
    }
  }, [state, gameInterval]);

  return (
    <>
      <Seo seo={data.helmet} />
      <Button variant="contained" onClick={toggleGame}>
        {state === "playing" ? "PAUSE" : "PLAY"}
      </Button>
      <Typography>You have points {Math.ceil(points.current)}</Typography>

      <Gamewindow ref={gameWinRef}>
        <Asteroids asteroids={asteroids} />
        <Rocket
          gameWinRef={gameWinRef}
          rocketRef={rocketRef}
          checkAsteroidColision={checkAsteroidColision}
          start={state === "playing"}
        />
      </Gamewindow>
      <Gamemodal
        open={state === "colided"}
        getPoints={getPoints}
        closeModal={closeModal}
      />
    </>
  );
}
