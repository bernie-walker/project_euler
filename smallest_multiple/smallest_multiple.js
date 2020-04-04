const isDivisibleByAll = function(num) {
  for (let divisor = 1; divisor <= 20; divisor++) {
    if (num % divisor !== 0) {
      return false;
    }
  }
  return true;
};

const getSmallestMultiple = function() {
  let num = 1;
  while (true) {
    if (isDivisibleByAll(num)) {
      return num;
    }
    ++num;
  }
};

console.log(getSmallestMultiple());
