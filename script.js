function showRegister() {
  document.querySelector('.login').classList.remove('active');
  document.querySelector('.register').classList.add('active');
}

function showLogin() {
  document.querySelector('.register').classList.remove('active');
  document.querySelector('.login').classList.add('active');
}

// Default show login form
window.onload = () => {
  document.querySelector('.login').classList.add('active');
};

// BMI Calculator
function calculateBMI() {
  const h = parseFloat(document.getElementById("height").value);
  const w = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!h || !w) {
    result.textContent = "Please enter valid height and weight!";
    return;
  }

  const bmi = (w / ((h / 100) ** 2)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  result.textContent = `Your BMI is ${bmi} (${category})`;
}
