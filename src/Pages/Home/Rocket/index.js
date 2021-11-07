import React, { useRef } from "react";
import rocket from "Static/rocket.svg";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "Hooks";
import { Rocketpopup } from "./Rocketpopup";

const isBrowser = typeof window !== "undefined";

const position = {
  top: "65vh",
  left: "200px",
};

const MAX_KEY = 40;
export default function Rocket({ popupText }) {
    const lang = useLanguage();
    const navigate = useNavigate();

  if (isBrowser) {
    window.rocketSpeed = 15;
  }
  const [popupState] = React.useState({
    position,
    text: popupText,
  });

  const keyPressed = useRef({
    keys: [],
    dx: 0,
    dy: 0,
    missileY: 0,
  });
  const popupRef = useRef();
  const rocketRef = useRef();
  //const missileRef = useRef();

  const hidePopUp = () => {
    popupRef.current.style.animation = "disAppear ease-in-out 300ms";
    popupRef.current.style.display = "none";
  };

  /*  const showPopUp = () => {
    popupRef.current.style.display = "block";
    popupRef.current.style.animation = "appear ease-in-out 300ms";
  };*/

  const animateRocket = React.useCallback(() => {
    const rocket = rocketRef.current;
    let rocketPosition = rocket.getBoundingClientRect();
    const speed = (isBrowser && window.rocketSpeed) || 15;
    const windowWidth = isBrowser && window.innerWidth;
    const windowHeight = isBrowser && window.innerHeight;

    const notOutsideFromViewportFromLeft = () => rocketPosition.x - speed > 0;
    const notOutsideFromViewportFromRight = () =>
      rocketPosition.right + speed < windowWidth;
    const notOutsideFromViewportFromTop = () => rocketPosition.top - speed > 0;
    const notOutsideFromViewportFromBottom = () =>
      rocketPosition.bottom + speed < windowHeight;
    const goingLeft = keyPressed.current.keys[MAX_KEY - 37];
    const goingRight = keyPressed.current.keys[MAX_KEY - 39];
    const goingUp = keyPressed.current.keys[MAX_KEY - 38];
    const goingDown = keyPressed.current.keys[MAX_KEY - 40];

    if (goingLeft && notOutsideFromViewportFromLeft()) {
      keyPressed.current.dx -= speed;
    }
    if (goingRight && notOutsideFromViewportFromRight()) {
      keyPressed.current.dx += speed;
    }
    if (goingDown && notOutsideFromViewportFromBottom()) {
      keyPressed.current.dy += speed;
    }
    if (goingUp && notOutsideFromViewportFromTop()) {
      keyPressed.current.dy -= speed;
    }

    rocketRef.current.style.transform = `translate(${keyPressed.current.dx}px,${keyPressed.current.dy}px)`;

    // !TODO CHECK DETECTION OF BUTTON AND ROCKET
    const buttons = ["languageButton", "Home", "Resume", "LearnMore"];

    for (const button of buttons) {
      if (isRocketInButton(button)) {
        document.getElementById(button).focus();
        if (button === "Resume" || button === "LearnMore") {
          navigate(`/${lang}/resume`);
        }
      }
    }
  }, [lang, navigate]);

  function isRocketInButton(button) {
    const buttonPosition = document
      .getElementById(button)
      .getBoundingClientRect();
    const rocketPosition = rocketRef.current.getBoundingClientRect();
    const rocketInXPosition =
      rocketPosition.x >= buttonPosition.x &&
      rocketPosition.x <= buttonPosition.x + buttonPosition.width;

    const rocketInYPosition =
      rocketPosition.y >= buttonPosition.y - buttonPosition.height &&
      rocketPosition.y <= buttonPosition.y + buttonPosition.height;
    return rocketInXPosition && rocketInYPosition;
  }
  const fireMissile = React.useCallback(() => {
    console.log("firing");
  }, []);

  const handleKeyDown = React.useCallback(
    (event) => {
      const codes = [32, 37, 38, 39, 40];
      if (!codes.includes(event.keyCode)) {
        return;
      }
      event.preventDefault();
      hidePopUp();

      // add key to current pressed keys
      keyPressed.current.keys[MAX_KEY - event.keyCode] = true;
      if (event.keyCode === 32) {
        fireMissile();
        return;
      }
      animateRocket();
    },
    [animateRocket, fireMissile]
  );

  const handleKeyUp = React.useCallback(
    (event) => {
      const codes = [37, 38, 39, 40];
      if (!codes.includes(event.keyCode)) {
        return;
      }
      // remove key lifted from pressed keys
      keyPressed.current.keys[MAX_KEY - event.keyCode] = false;
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
    <>
      <Rocketpopup
        popupRef={popupRef}
        popupText={popupState.text}
        position={popupState.position}
      />

      <img
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          zIndex: 5,
        }}
        className="rocket"
        width="50px"
        height="100px"
        ref={rocketRef}
        src={rocket}
        alt="rocket"
      />
    </>
  );
}
