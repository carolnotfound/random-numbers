const random = (numOfNums) => {
  const card = [...Array(60).keys()].map((num) => num + 1);
  const loop = numOfNums <= 60 ? numOfNums : 60;
  const result = Array(+loop).fill(0);

  return result.map((value) => {
    const cardIndex = Math.floor(Math.random() * card.length);

    return card.splice(cardIndex, 1);
  });
};

export default { random };
