const isPrime = function(num) {
  if (num < 2) {
    return false;
  }

  for (let div = num - 1; div >= 2; div--) {
    if (num % div === 0) {
      return false;
    }
  }

  return true;
};

const getNthPrime = function(n) {
  let count = 0;
  let num = 2;
  while (true) {
    if (isPrime(num)) {
      ++count;
    }
    if (count === n) {
      return num;
    }
    ++num;
  }
};

console.log(getNthPrime(10001));
