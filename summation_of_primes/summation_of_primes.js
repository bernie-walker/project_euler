const main = function () {
  let sum = 2;
  const primes = [2];

  for (let num = 3; num < 2000000; num++) {
    if ((num & 1) === 1 && primes.every((el) => num % el !== 0)) {
      primes.push(num);
      sum += num;
    }
  }

  return sum;
};

console.log(main());
