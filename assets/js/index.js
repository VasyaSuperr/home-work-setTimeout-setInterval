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

// Task 1 (use setTimeout)
// function printNumbers(from, to, interval) {
//   checkIntNumber(from, "from");
//   checkIntNumber(to, "to");
//   checkNumber(interval, "interval");

//   setTimeout(function tick() {
//     console.log(from++);

//     if (from <= to) {
//       setTimeout(tick, interval);
//     }
//   });
// }

// printNumbers(10, 15, 1000);

// Task 2 (link)
const someTime = 15000;
const GOOGLE_URL = "https://www.google.com/";
const timeEl = document.createElement("p");
let secLeft = someTime / 1000;

const timeId = setInterval(() => {
  secLeft--;
  timeEl.textContent = `
  Зачекайте ${Math.floor(secLeft / 60)}:${("0" + secLeft).slice(-2)}
  `;
  document.body.append(timeEl);
  if (secLeft === 0) {
    timeEl.remove();
    clearInterval(timeId);

    setTimeout(() => {
      const linkGoogle = document.createElement("a");
      linkGoogle.textContent = "GOOGLE";
      linkGoogle.href = GOOGLE_URL;
      document.body.append(linkGoogle);
    });
  }
}, 1000);
