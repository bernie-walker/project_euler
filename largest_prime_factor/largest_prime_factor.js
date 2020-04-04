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

const main = function(num) {
  const factors = [];
  for (let divisor = num; divisor > 2; divisor--) {
    if (num % divisor === 0 && isPrime(divisor)) {
      return divisor;
    }
  }
  return null;
};

// console.log(main(600851475143));

// const getAllPrimesTill = function(num) {
//   let container = [];
//   const primes = [];

//   for (let int = 2; int < num; int++) {
//     container.push(int);
//   }

//   while (container.length !== 0) {
//     const [reference] = container;
//     primes.push(reference);
//     container = container.filter(el => el % reference !== 0);
//   }

//   return primes;
// };

// console.log(getAllPrimesTill(6008514));
