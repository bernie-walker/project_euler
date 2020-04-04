const main = function() {
  const sum = 1000;
  for (let i = 1; i < sum / 3; i++) {
    for (let j = i; j < sum / 2; j++) {
      k = sum - i - j;
      if (i ** 2 + j ** 2 === k ** 2) {
        return [i, j, k];
      }
    }
  }
};

console.log(main());
