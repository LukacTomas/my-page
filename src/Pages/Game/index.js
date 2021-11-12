import React from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Rocket } from "./Rocket";
import { Asteroids } from "./Asteroids";
import {
  maxNumberOfAsteroid,
  randomAsteroidXPosition,
  randomAsteroidSpeed,
  randomAsteroidWidth,
} from "./Asteroids/utils";

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

export const Game = () => {
  const [asteroids, setAsteroids] = React.useState([getRandomAsteroid(500)]);
  const [start, setStart] = React.useState(false);
  const [colided, setColided] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const gameWinRef = React.createRef();
  const rocketRef = React.useRef();
  const timerRef = React.createRef(0);
  let moveOrRandomAsteroid = React.createRef();

  const checkAsteroidDetection = React.useCallback(() => {
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
        setStart(false);
        setColided(true);
        setAsteroids([getRandomAsteroid(500)]);
      }
    }
  }, []);
  const startGame = () => {
    setStart((running) => !running);
    setColided(false);
  };

  React.useEffect(() => {
    if (gameWinRef.current === null || !start) return;

    const gameWin = gameWinRef.current.getBoundingClientRect();
    const gameWinLength = gameWin.width;

    moveOrRandomAsteroid.current = setInterval(() => {
      setTimer((time) => time + 1);
      setAsteroids((asteroids) => {
        let newAsteroids = asteroids.map((asteroid) => {
          if (asteroid.y > gameWin.bottom - asteroid.width) {
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
      checkAsteroidDetection();
      if (timer < 10) return;

      setAsteroids((asteroids) => {
        if (asteroids.length > maxNumberOfAsteroid) {
          return asteroids;
        }
        const newAsteroid = getRandomAsteroid(gameWinLength);
        const newAsteroids = [...asteroids, newAsteroid];

        return newAsteroids;
      });
      setTimer(0);
    }, 50);

    return () => {
      clearInterval(moveOrRandomAsteroid.current);
    };
  }, [
    start,
    setAsteroids,
    gameWinRef,
    timerRef,
    timer,
    moveOrRandomAsteroid,
    checkAsteroidDetection,
  ]);

  React.useEffect(() => {
    if (start === false) {
      clearInterval(moveOrRandomAsteroid.current);
    }
  }, [start, moveOrRandomAsteroid]);

  return (
    <>
      <Button variant="contained" onClick={startGame}>
        {!start ? "Start Game" : "Pause Game"}
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
      <Modal
        open={colided}
        onClose={() => setColided(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={modalStyle}>
          <Typography align="center" variant="h6" component="h2">
            Game Over
          </Typography>
          <Typography align="center" sx={{ mt: 2 }}>
            Good game. Wanna try again? Checkout soon, features will be added.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
