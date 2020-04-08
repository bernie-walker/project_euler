const getUnderHundred = function (number) {
  const teenNumberLookup = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const tensNumberLookup = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  if (number <= 19) {
    return teenNumberLookup[number];
  }

  return (
    tensNumberLookup[Math.floor(number / 10)] + teenNumberLookup[number % 10]
  );
};

const getHundred = function (number) {
  if (number === 10) {
    return 'oneThousand';
  }

  return getUnderHundred(number) && getUnderHundred(number) + 'hundred';
};

const convertToWords = function (number) {
  if (number % 100 === 0) {
    return getHundred(Math.floor(number / 100));
  }

  const hundreds = getHundred(Math.floor(number / 100));
  const tenths = getUnderHundred(number % 100);

  return hundreds ? `${hundreds}and${tenths}` : tenths;
};

const main = function () {
  let sum = 0;

  for (let number = 1; number <= 1000; number++) {
    sum += convertToWords(number).length;
  }

  return sum;
};

console.log(main());
