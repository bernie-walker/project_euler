const mulNumStr = function (num1, num2) {
  const numAr1 = num1.split('').map(Number);
  const numAr2 = num2.split('').map(Number);

  const [val1, val2] =
    numAr1.length > numAr2.length ? [numAr1, numAr2] : [numAr1, numAr2];

  let carry = 0;
  const product = [];

  const multiplicand = val1.reverse().splice(0, val2.length);

  val2.reverse().forEach((element, ind) => {
    const prod = (element * multiplicand[ind] + carry)
      .toString()
      .split(''.map(Number));

    product.unshift(prod.pop());

    carry += prod.length ? +prod.join('') : 0;
  });
};
