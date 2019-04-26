export const getRandomBool = () => Math.random() >= 0.5;

export const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

export const getRandomInt = (_min, _max) => {
  const min = Math.ceil(_min);
  const max = Math.floor(_max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
