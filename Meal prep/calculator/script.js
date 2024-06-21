document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  const results = document.getElementById("results");
  const errors = document.getElementById("form-error");

  function errorMessage(msg) {
    errors.innerHTML = msg;
    errors.style.display = "";
    return false;
  }

  function showResults(calories) {
    results.innerHTML = `
            <p>Your daily calorie intake should be approximately: <strong>${calories.toFixed(
              2
            )} </strong> calories.</p>`;
    results.style.display = "";
    form.style.display = "none";
    errors.style.display = "none";
  }

  function calculateCalories(weightChange) {
    const age = parseFloat(form.age.value);
    const height = parseFloat(form.height_cm.value);
    const weight = parseFloat(form.weight.value);
    const gender = form.gender.value;

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
      return errorMessage("Please enter valid age, height, and weight.");
    }

    let bmr = 0;
    if (gender === "Female") {
      bmr = 655.09 + 9.56 * weight + 1.84 * height - 4.67 * age;
    } else {
      bmr = 66.47 + 13.75 * weight + 5 * height - 6.75 * age;
    }

    let calories = bmr;

    switch (weightChange) {
      case "mildLoss":
        calories -= 250; // 0.25 kg per week
        break;
      case "regularLoss":
        calories -= 500; // 0.50 kg per week
        break;
      case "extremeLoss":
        calories -= 1000; // 1 kg per week
        break;
      case "mildGain":
        calories += 250; // 0.25 kg per week
        break;
      case "regularGain":
        calories += 500; // 0.50 kg per week
        break;
      case "extremeGain":
        calories += 1000; // 1 kg per week
        break;
      default:
        break;
    }

    showResults(calories);
  }

  document
    .getElementById("btnMildLoss")
    .addEventListener("click", () => calculateCalories("mildLoss"));
  document
    .getElementById("btnRegularLoss")
    .addEventListener("click", () => calculateCalories("regularLoss"));
  document
    .getElementById("btnExtremeLoss")
    .addEventListener("click", () => calculateCalories("extremeLoss"));
  document
    .getElementById("btnMildGain")
    .addEventListener("click", () => calculateCalories("mildGain"));
  document
    .getElementById("btnRegularGain")
    .addEventListener("click", () => calculateCalories("regularGain"));
  document
    .getElementById("btnExtremeGain")
    .addEventListener("click", () => calculateCalories("extremeGain"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
