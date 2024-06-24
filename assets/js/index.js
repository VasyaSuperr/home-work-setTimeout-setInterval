"use strict";

// Task 1 (use setInterval)
function checkIntNumber(value, nameParam) {
  if (typeof value != "number" || !Number.isInteger(value)) {
    throw new TypeError(`"${nameParam}" parametr must be an integer number`);
  }
}

function checkNumber(value, nameParam) {
  if (typeof value != "number") {
    throw new TypeError(`"${nameParam}" parametr must be a number`);
  }
}

// function printNumbers(from, to, interval) {
//   checkIntNumber(from, "from");
//   checkIntNumber(to, "to");
//   checkNumber(interval, "interval");

//   let timerId = setInterval(() => {
//     if (to - from === 0) {
//       clearInterval(timerId);
//     }
//     console.log(from++);
//   }, interval);
// }

// printNumbers(10, 15, 1000);

// Task 2 (use setTimeout)
function printNumbers(from, to, interval) {
  checkIntNumber(from, "from");
  checkIntNumber(to, "to");
  checkNumber(interval, "interval");

  setTimeout(function tick() {
    console.log(from++);

    if (from <= to) {
      setTimeout(tick, interval);
    }
  });
}

printNumbers(10, 15, 1000);
