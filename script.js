const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthText = document.getElementById("length-text");
const includeChars = document.getElementById("characters");
const includeNums = document.getElementById("numbers");

function updateLengthText() {
  lengthText.innerText = "Length " + lengthSlider.value;
  generatePassword();
}

function generatePassword() {
  const length = parseInt(lengthSlider.value);
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let charset = "";

  if (includeChars.checked) charset += letters + symbols;
  if (includeNums.checked) charset += numbers;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  passwordInput.value = password;
}

function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied!");
}

// Init
window.onload = () => {
  updateLengthText();
  generatePassword();
};

lengthSlider.addEventListener("input", generatePassword);
includeChars.addEventListener("change", generatePassword);
includeNums.addEventListener("change", generatePassword);
