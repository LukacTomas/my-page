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

export const Game = () => {
    const [asteroids, setAsteroids] = React.useState([
        {
            x: 50,
            y: 50,
            type: Math.random(),
            width: 100,
            moving: false,
        },
    ]);

    const gameWinRef = React.createRef();
    const checkAsteroidDetection = (rocketPosition) => {
        console.log(rocketPosition);
    };

    React.useEffect(() => {
        if (gameWinRef.current === null) return;
        const gameWin = gameWinRef.current.getBoundingClientRect();
        const gameWinLength = gameWin.width;
        const gameWinHeight = gameWin.height;

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

        return () => clearInterval(addRandomAsteroid);
    }, [setAsteroids, gameWinRef]);

    React.useState(() => {
        if (gameWinRef.current === null) return;
        const move = setInterval(() => {
         
            setAsteroids((asteroids) => {
                const newAsteroids = asteroids.map((asteroid) => {
                    const newAsteroid = { ...asteroid, y: asteroid.y + 15 };
                    return newAsteroid;
                });
                return newAsteroids;
            });
        }, 100);

        return () => clearInterval(move);
    }, [asteroids]);

    return (
        <Gamewindow ref={gameWinRef}>
            <Asteroids asteroids={asteroids} />
            <Rocket
                gameWinRef={gameWinRef}
                checkAsteroidDetection={checkAsteroidDetection}
            />
        </Gamewindow>
    )
}
