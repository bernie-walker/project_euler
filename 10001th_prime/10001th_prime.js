const getNthPrime = function (n) {
  const primes = [2];
  let num = 3;

  while (primes.length <= n) {
    if ((num & 1) === 1 && primes.every((el) => num % el !== 0)) {
      primes.push(num);
    }
    ++num;
  }

  return primes[n - 1];
};

console.log(getNthPrime(10001));
