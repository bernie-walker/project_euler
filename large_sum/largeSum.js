const data = require('./data.json');

const main = function () {
  return data
    .reduce((sum, el) => sum + el, 0)
    .toString()
    .slice(0, 11);
};

console.log(main());
