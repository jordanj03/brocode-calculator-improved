"use strict";

const display = document.querySelector(".display");
const keys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  "c",
  ".",
];

window.addEventListener(
  "keydown",
  function (e) {
    if (keys.includes(e.key)) {
      display.value += e.key;
    } else if (e.key === "=" || e.key === "Enter") {
      calculate();
    }
  },
  false
);

const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
