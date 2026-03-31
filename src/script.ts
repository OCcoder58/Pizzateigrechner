const flourInput = document.getElementById("flour") as HTMLInputElement;
const calculateBtn = document.getElementById(
  "calculateBtn",
) as HTMLButtonElement;

const waterOutput = document.getElementById("water") as HTMLSpanElement;
const saltOutput = document.getElementById("salt") as HTMLSpanElement;
const sugarOutput = document.getElementById("sugar") as HTMLSpanElement;
const oilOutput = document.getElementById("oil") as HTMLSpanElement;
const yeastOutput = document.getElementById("yeast") as HTMLSpanElement;

calculateBtn.addEventListener("click", () => {
  const flour: number = Number(flourInput.value);

  if (flour <= 0 || isNaN(flour)) {
    alert("Bitte eine gültige Mehlmenge eingeben.");
    return;
  }

  const factor: number = flour / 1000;

  const water: number = 600 * factor;
  const salt: number = 32 * factor;
  const sugar: number = 20 * factor;
  const oil: number = 30 * factor;
  const yeast: number = 5 * factor;

  waterOutput.textContent = water.toFixed(1);
  saltOutput.textContent = salt.toFixed(1);
  sugarOutput.textContent = sugar.toFixed(1);
  oilOutput.textContent = oil.toFixed(1);
  yeastOutput.textContent = yeast.toFixed(1);
});
