const data = require('./maxPathSum.json');

const joinWithChildren = function (predecessors, successors) {
  const parent = predecessors[predecessors.length - 1];
  const children = successors.filter((successor) => successor[0] === parent);
  return children.map((child) => predecessors.concat(child[1]));
};

const createHierarchy = function (branches) {
  let [hierarchy] = branches;

  for (let index = 1; index < branches.length; index++) {
    const parentChildPair = [];
    hierarchy.forEach((el) => {
      parentChildPair.push(...joinWithChildren(el, branches[index]));
    });
    hierarchy = parentChildPair;
  }

  return hierarchy;
};

const pairWithChildren = function (parents, children) {
  const pairs = [];
  parents.forEach((el, ind) => {
    const [child1, child2] = children.slice(ind, ind + 2);
    pairs.push([el, child1], [el, child2]);
  });

  return pairs;
};

const main = function (triangleContent) {
  const content = Array.from(triangleContent, (el) =>
    el.slice().map((el) => Symbol(el))
  );

  const branches = [];
  content.slice(0, -1).forEach((topRow, ind) => {
    const bottomRow = content[ind + 1];
    const pairs = pairWithChildren(topRow, bottomRow);
    branches.push(pairs);
  });

  const hierarchy = createHierarchy(branches);

  const values = hierarchy.map((branch) => branch.map((el) => +el.description));

  return values.reduce((result, branch) => {
    const sum = branch.reduce((s, el) => s + el, 0);
    return sum > result ? sum : result;
  }, 0);
};
