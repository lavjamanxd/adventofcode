const fs = require("fs");

let input = fs
  .readFileSync("input/day1.txt", "utf8")
  .split("\n")
  .slice(0, -1)
  .map((e) => +e);

function day1_1() {
  return input.filter((e, i) => +(input[i - 1] < e)).length;
}

function day1_2() {
  let windowSums = input
    .flatMap((_, i) => [input.slice(i, i + 3)])
    .map((e) => e.reduce((p, c) => p + c));

  return windowSums.filter((e, i) => +(windowSums[i - 1] < e)).length;
}

exports.day1_1 = day1_1;
exports.day1_2 = day1_2;
