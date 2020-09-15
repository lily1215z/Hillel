"use strict"

const height = prompt("Write your height in centimeters");
const mass = prompt("Write your mass in kilogrames");

  function bodyMassIndex() {
    const heightMetr = height / 100;
    if (!height, !mass) {
        return "no result";
      } else {
        return mass / (heightMetr * heightMetr);
    }
};

alert(bodyMassIndex());