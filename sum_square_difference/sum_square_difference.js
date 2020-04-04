const getSumSquareDifference = function() {
  const naturalNumbers = [];

  for (let i = 1; i <= 100; i++) {
    naturalNumbers.push(i);
  }

  const squaredNaturalNumbers = naturalNumbers.map(num => num ** 2);

  return (
    naturalNumbers.reduce((sum, el) => sum + el, 0) ** 2 -
    squaredNaturalNumbers.reduce((sum, el) => sum + el, 0)
  );
};

console.log(getSumSquareDifference());
