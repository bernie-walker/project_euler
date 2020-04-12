const isLeapYear = function (year) {
  return year % 4 === 0 && year % 100 !== 0 ? true : year % 400 === 0;
};

const getDaysInMonths = function ({ month, year }) {
  const oddMonths = [1, 3, 5, 7, 8, 10, 12];

  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  return oddMonths.includes(month) ? 31 : 30;
};

const getAllDays = function (from, to) {
  const days = [];

  for (let year = from; year <= to; year++) {
    for (let month = 1; month <= 12; month++) {
      days.push(getDaysInMonths({ month, year }));
    }
  }

  return days
    .map((dayCount) => {
      const days = [];
      for (let day = 1; day <= dayCount; day++) {
        days.push(day);
      }
      return days.slice();
    })
    .flat();
};

const main = function () {
  const allDays = getAllDays(1901, 2000);

  return allDays.slice(5).filter((day, ind) => ind % 7 === 0 && day === 1)
    .length;
};

console.log(main());
