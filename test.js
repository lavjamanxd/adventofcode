const { day1_1, day1_2 } = require("./src/day1");
const { day2_1, day2_2 } = require("./src/day2");
const { day3_1, day3_2 } = require("./src/day3");

describe("Day 1: Sonar Sweep", () => {
  test("Part 1", () => {
    expect(day1_1()).toBe(1195);
  });
  test("Part 2", () => {
    expect(day1_2()).toBe(1235);
  });
});

describe("Day 2: Dive!", () => {
  test("Part 1", () => {
    expect(day2_1()).toBe(1660158);
  });
  test("Part 2", () => {
    expect(day2_2()).toBe(1604592846);
  });
});

describe("Day 3: Binary Diagnostic", () => {
  test("Part 1", () => {
    expect(day3_1()).toBe(3242606);
  });
  test("Part 2", () => {
    expect(day3_2()).toBe(4856080);
  });
});
