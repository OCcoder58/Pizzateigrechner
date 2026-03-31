"use strict";
const flourInput = document.getElementById("flour");
const calculateBtn = document.getElementById("calculateBtn");
const waterOutput = document.getElementById("water");
const saltOutput = document.getElementById("salt");
const sugarOutput = document.getElementById("sugar");
const oilOutput = document.getElementById("oil");
const yeastOutput = document.getElementById("yeast");
calculateBtn.addEventListener("click", () => {
    const flour = Number(flourInput.value);
    if (flour <= 0 || isNaN(flour)) {
        alert("Bitte eine gültige Mehlmenge eingeben.");
        return;
    }
    const factor = flour / 1000;
    const water = 600 * factor;
    const salt = 32 * factor;
    const sugar = 20 * factor;
    const oil = 30 * factor;
    const yeast = 5 * factor;
    waterOutput.textContent = water.toFixed(1);
    saltOutput.textContent = salt.toFixed(1);
    sugarOutput.textContent = sugar.toFixed(1);
    oilOutput.textContent = oil.toFixed(1);
    yeastOutput.textContent = yeast.toFixed(1);
});
