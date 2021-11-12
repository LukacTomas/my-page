const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const maxNumberOfAsteroid = 8;
export const randomAsteroidXPosition = (x, y) => getRandomInt(x, y);
export const randomAsteroidWidth = () => getRandomInt(60, 150);
export const randomAsteroidSpeed = () => getRandomInt(15, 35);
