const getPrime = function* () {
  const primes = [2];
  let num = 2;
  yield num;
  while (true) {
    ++num;
    if (num & (1 === 1) && primes.every((el) => num % el !== 0)) {
      primes.push(num);
      yield num;
    }
  }
};

const countFactors = function (num) {
  const primes = getPrime();
  const primeFactors = [];
  if (num <= 1) {
    return 1;
  }

  let number = num;
  let divisor = primes.next().value;

  while (number > 1) {
    if (number % divisor !== 0) {
      divisor = primes.next().value;
      continue;
    }
    primeFactors.push(divisor);
    number = number / divisor;
  }

  const groups = primeFactors.reduce((container, el) => {
    if (container.length === 0 || container[container.length - 1][0] !== el) {
      container.push([el]);
      return container;
    }

    container[container.length - 1].push(el);

    return container;
  }, []);

  return groups.map((el) => el.length + 1).reduce((prod, el) => prod * el, 1);
};

const main = function () {
  let naturalNum = 0;
  let triangularNum = 0;
  let numberOfDivisors = 0;

  while (numberOfDivisors < 500) {
    ++naturalNum;
    triangularNum += naturalNum;
    numberOfDivisors = countFactors(triangularNum);
  }
  return triangularNum;
};

console.log(main());
