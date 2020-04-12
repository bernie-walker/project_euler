const data = require('./maxpathSum.json');

const main = function (triangleRows) {
  const lastElInd = triangleRows.length - 1;
  let currentRow = triangleRows[lastElInd];

  for (let index = lastElInd - 1; index >= 0; index--) {
    const resultant = [];
    triangleRows[index].forEach((element, ind) => {
      const sum =
        element +
        (currentRow[ind] > currentRow[ind + 1]
          ? currentRow[ind]
          : currentRow[ind + 1]);
      resultant.push(sum);
    });

    currentRow = resultant.slice();
  }

  return currentRow[0];
};

console.log(main(data));
