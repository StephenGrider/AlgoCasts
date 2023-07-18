const fizzBuzz = require("./index");

test("fizzBuzz function is defined", () => {
  expect(fizzBuzz).toBeDefined();
});

test("Calling fizzbuzz with `3` returns an array of 5 correct values", () => {
  expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
});

test("Calling fizzbuzz with `5` returns an array of 5 correct values", () => {
  expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
});

test("Calling fizzbuzz with 15 returns the correct values", () => {
  expect(fizzBuzz(15)).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});
