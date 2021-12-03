const fs = require("fs");
const internal = require("stream");

let input = fs
  .readFileSync("input/day3.txt", "utf8")
  .split("\n")
  .slice(0, -1)
  .map((e) => {
    return e.split("").map((c) => +c);
  });

function day3_1() {
  let values = [];
  let half = input.length / 2;

  input.forEach((e) => {
    e.forEach((v, i) => {
      values[i] = values[i] + v || v;
    });
  });

  let commonBits = values.map((e) => +(e > half));
  let leastCommonBits = values.map((e) => +(e < half));
  let gamma = parseInt(commonBits.join(""), 2);
  let epsilonRate = parseInt(leastCommonBits.join(""), 2);
  return gamma * epsilonRate;
}

function bitFilter(array, index, filterFunc) {
  var ones = array.reduce((p, c) => p + c[index], 0);
  var zeros = array.length - ones;
  let commonBits = +filterFunc(ones, zeros);
  return array.filter((e) => e[index] == commonBits);
}

function getRating(filterFunc) {
  let currentInput = input;
  let i = 0;
  while (currentInput.length > 1) {
    currentInput = bitFilter(currentInput, i, filterFunc);
    i++;
  }
  return parseInt(currentInput[0].join(""), 2);
}

function day3_2() {
  var oxygenGeneratorRating = getRating((a, b) => a >= b);
  var co2ScrubberRating = getRating((a, b) => a < b);
  return oxygenGeneratorRating * co2ScrubberRating;
}

exports.day3_1 = day3_1;
exports.day3_2 = day3_2;
