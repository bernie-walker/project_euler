const getFibSeries = function(num1, num2) {
  if (num1 + num2 > 4000000) {
    return [];
  }
  return [num1 + num2].concat(getFibSeries(num2, num1 + num2));
};

const main = function() {
  const container = [1, 2].concat(getFibSeries(1, 2));
  return container.reduce((sum, ele) => {
    if ((ele & 1) === 0) {
      sum += ele;
    }
    return sum;
  }, 0);
};

console.log(main());
