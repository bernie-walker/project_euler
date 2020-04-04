const gridData = require('./gridData');

const groupByFour = function (gridLine) {
  const src = gridLine.slice();
  const container = [];
  while (src.length >= 4) {
    container.push(src.slice(0, 4));
    src.shift();
  }
  return container;
};

const groupDiagonally = function (gridData) {
  const starter = [];

  for (let index = 0; index <= 16; index++) {
    let count = index;
    const container = [];
    while (count < 400) {
      container.push(gridData[count]);
      count += 21;
    }
    starter.push(container);
  }

  for (let index = 20; index <= 320; index += 20) {
    let count = index;
    const container = [];
    while (count < 400) {
      container.push(gridData[count]);
      count += 21;
    }
    starter.push(container);
  }

  return starter;
};

const groupVertically = function (gridData) {
  const container = [];
  for (let index = 0; index < 20; index++) {
    container.push([]);
  }
  return gridData.reduce((container, el, index) => {
    container[index % 20].push(el);
    return container;
  }, container);
};

const groupHorizontally = function (gridData) {
  const container = [];
  for (let index = 0; index < gridData.length; index++) {
    if (index % 20 === 0) {
      container.push([gridData[index]]);
      continue;
    }
    container[container.length - 1].push(gridData[index]);
  }
  return container;
};

const main = function () {
  const rows = groupHorizontally(gridData);
  const columns = groupVertically(gridData);
  const principleDiagonal = groupDiagonally(gridData);
  const nonPrincipleDiagonal = groupDiagonally(
    rows.map((el) => el.slice().reverse()).flat()
  );
  const allGroups = [
    ...rows,
    ...columns,
    ...principleDiagonal,
    ...nonPrincipleDiagonal,
  ];
  const groupsOfFour = allGroups.map(groupByFour).flat();

  return groupsOfFour.reduce((result, group) => {
    const product = group.reduce((prod, el) => prod * el, 1);
    return product > result ? product : result;
  }, 0);
};

console.log(main());
