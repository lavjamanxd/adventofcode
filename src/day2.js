const fs = require("fs");

let input = fs
  .readFileSync("input/day2.txt", "utf8")
  .split("\n")
  .slice(0, -1)
  .map((e) => {
    let split = e.split(" ");
    return { direction: split[0], steps: +split[1] };
  });

function day2_1() {
  let x = 0,
    y = 0;
  input.forEach((e) => {
    switch (e.direction) {
      case "forward":
        x += e.steps;
        break;
      case "up":
        y -= e.steps;
        break;
      case "down":
        y += e.steps;
        break;
    }
  });
  return x * y;
}

function day2_2() {
  let x = 0,
    y = 0;
  aim = 0;
  input.forEach((e) => {
    switch (e.direction) {
      case "forward":
        x += e.steps;
        y += aim * e.steps;
        break;
      case "up":
        aim -= e.steps;
        break;
      case "down":
        aim += e.steps;
        break;
    }
  });
  return x * y;
}

exports.day2_1 = day2_1;
exports.day2_2 = day2_2;
