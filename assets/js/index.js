"use strict";

// Task 1 (use setInterval)
function printNumbers(from, to, interval) {
  let timerId = setInterval(() => {
    if (to - from === 0) {
      clearInterval(timerId);
    }
    console.log(from++);
  }, interval);
}

printNumbers(10, 15, 1000);
