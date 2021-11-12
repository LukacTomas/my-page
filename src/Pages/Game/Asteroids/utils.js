const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const maxNumberOfAsteroid = 5;
export const randomAsteroidXPosition = (x, y) => getRandomInt(x, y);
