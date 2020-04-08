const generateCollatz = function (num) {
  const sequence = [];
  let number = num;

  while (number > 1) {
    sequence.push(number);
    number = (number & 1) === 1 ? 3 * number + 1 : number / 2;
  }

  return sequence.concat(1);
};

const main = function () {
  let longestSeries = [];

  for (let number = 0; number < 1000000; number++) {
    const collatzSequence = generateCollatz(number);
    longestSeries =
      collatzSequence.length > longestSeries.length
        ? collatzSequence
        : longestSeries;
  }

  return longestSeries[0];
};

console.log(main());
