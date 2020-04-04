const isPalindrome = function(number) {
  const digits = Array.from(number.toString());
  return digits.every((digit, index, digits) => {
    const reversedDigitsCopy = digits.slice().reverse();
    return reversedDigitsCopy[index] === digit;
  });
};

const getLargestPalindromeProduct = function(num1, num2) {
  const container = [];
  for (let n1 = num1; n1 > 1; n1--) {
    for (let n2 = num2; n2 > 1; n2--) {
      if (isPalindrome(n1 * n2)) {
        container.push(n1 * n2);
      }
    }
  }

  const [largestPalindrome] = container.sort((a, b) => b - a);

  return largestPalindrome;
};

console.log(getLargestPalindromeProduct(999, 999));
