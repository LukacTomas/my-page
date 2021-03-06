import React, { useRef } from "react";
import rocket from "Static/rocket.svg";

const isBrowser = typeof window !== "undefined";

const position = {
  top: "85vh",
  left: "50vw",
};

const MAX_KEY = 39;
function Rocket({ gameWinRef, rocketRef, start }) {
  if (isBrowser) {
    window.rocketSpeed = 15;
  }
  const keyPressed = useRef({
    keys: [],
    dx: 0,
  });

  const animateRocket = React.useCallback(() => {
    if (gameWinRef.current === null || !start) return;

    const rocket = rocketRef.current;
    let rocketPosition = rocket.getBoundingClientRect();
    let gamewinPosition = gameWinRef.current.getBoundingClientRect();
    const speed = (isBrowser && window.rocketSpeed) || 15;

    const notOutsideFromViewportFromLeft = () =>
      rocketPosition.x - speed > gamewinPosition.left;
    const notOutsideFromViewportFromRight = () =>
      rocketPosition.right + speed < gamewinPosition.right;

    const goingLeft = keyPressed.current.keys[MAX_KEY - 37];
    const goingRight = keyPressed.current.keys[MAX_KEY - 39];

    if (goingLeft && notOutsideFromViewportFromLeft()) {
      keyPressed.current.dx -= speed;
    }
    if (goingRight && notOutsideFromViewportFromRight()) {
      keyPressed.current.dx += speed;
    }

    rocketRef.current.style.transform = `translate(${keyPressed.current.dx}px,0px)`;
  }, [gameWinRef, rocketRef, start]);

  const notAlowedKey = (key) => {
    const codes = [37, 39];
    if (!codes.includes(key)) {
      return true;
    }

    return false;
  };

  const handleKeyDown = React.useCallback(
    (event) => {
      const { keyCode } = event;
      if (notAlowedKey(keyCode)) return;
      event.preventDefault();

      // add key to current pressed keys
      keyPressed.current.keys[MAX_KEY - keyCode] = true;

      animateRocket();
    },
    [animateRocket]
  );

  const handleKeyUp = React.useCallback(
    (event) => {
      const { keyCode } = event;
      if (notAlowedKey(keyCode)) return;
      event.preventDefault();

      // add key to current pressed keys
      keyPressed.current.keys[MAX_KEY - keyCode] = false;

      animateRocket();
    },
    [animateRocket]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keypress", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keypress", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <img
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        userSelect: "none",
        zIndex: 5,
      }}
      className="rocket"
      width="50px"
      height="100px"
      ref={rocketRef}
      src={rocket}
      alt="rocket"
    />
  );
}

export default React.memo(Rocket);
