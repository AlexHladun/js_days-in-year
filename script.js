function daysInYear(year) {
  if (typeof year === 'number' && year % 1 === 0) {
    if (year % 4 === 0 && year % 100 !== 0) {
      console.log(366);
    } else {
      console.log(365);
    }
  } else {
    console.log('exception');
  }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception