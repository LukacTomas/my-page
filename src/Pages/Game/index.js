import React, {
  useState,
  useCallback,
  useEffect,
  createRef,
  useRef,
} from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Rocket } from "./Rocket";
import { Asteroids } from "./Asteroids";
import { Seo } from "Seo";
import { useLanguage } from "Hooks";
import { useData } from "./config";
import {
  maxNumberOfAsteroid,
  randomAsteroidXPosition,
  randomAsteroidSpeed,
  randomAsteroidWidth,
} from "./Asteroids/utils";
import stateMachine, { initialState } from "./_stateMachine";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Gamewindow = styled("div")(() => ({
  //background: "rgba(0,0,0,0.5)",
  margin: "0 auto",
  maxWidth: "800px",
  height: "75vh",
  top: 0,
  zIndex: "10",
}));

const getRandomAsteroid = (xPos) => ({
  x: randomAsteroidXPosition(randomAsteroidWidth(80, 150), xPos),
  y: 0,
  type: Math.random(),
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
  const [asteroids, setAsteroids] = useState([getRandomAsteroid(500)]);
  const [avoided, setAvoided] = useState(0);

  const gameWinRef = useRef();
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

  const afterColisionEffects = useCallback(() => {
    setAsteroids([getRandomAsteroid(500)]);
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
    const gameWin = gameWinRef.current.getBoundingClientRect();
    const gameWinLength = gameWin.width;

    gameInterval.current = setInterval(() => {
      timerRef.current = timerRef.current + 1;

      setAsteroids((asteroids) => {
        let newAsteroids = asteroids.map((asteroid) => {
          if (asteroid.y > gameWin.bottom - asteroid.width) {
            setAvoided((num) => num + 1);
            return getRandomAsteroid(gameWinLength + asteroid.width);
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
      checkAsteroidColision();
      if (timerRef.current < 10) return;

      setAsteroids((asteroids) => {
        if (asteroids.length > maxNumberOfAsteroid) {
          return asteroids;
        }
        const newAsteroid = getRandomAsteroid(gameWinLength);
        const newAsteroids = [...asteroids, newAsteroid];

        return newAsteroids;
      });
      timerRef.current = 0;
    }, 50);

    return () => {
      clearInterval(gameInterval.current);
    };
  }, [state, gameWinRef, timerRef, gameInterval, checkAsteroidColision]);

  useEffect(() => {
    if (state !== "playing") {
      clearInterval(gameInterval.current);
    }

    if (state === "prepared") {
      setAvoided(0);
    }
  }, [state, gameInterval]);

  return (
    <>
      <Seo seo={data.helmet} />
      <Button variant="contained" onClick={toggleGame}>
        {state === "playing" ? "PAUSE" : "PLAY"}
      </Button>
      <Typography> You have avoided {avoided} asteroids</Typography>

      <Gamewindow ref={gameWinRef}>
        <Asteroids asteroids={asteroids} />
        <Rocket
          gameWinRef={gameWinRef}
          rocketRef={rocketRef}
          checkAsteroidColision={checkAsteroidColision}
          start={state === "playing"}
        />
      </Gamewindow>
      <Modal
        open={state === "colided"}
        onClose={() => transition({ type: "NEW" })}
      >
        <Box style={modalStyle}>
          <Typography align="center" variant="h6" component="h2">
            Game Over
          </Typography>
          <Typography align="center" sx={{ mt: 2 }}>
            Good game. You have avoided {avoided} asteroids. Wanna try again?
            Check back again, features are comming soon ...
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
