const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthText = document.getElementById("length-text");
const includeChars = document.getElementById("characters");
const includeNums = document.getElementById("numbers");
const warning = document.getElementById("warning");

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

  // Show warning if both checkboxes are unchecked
  if (!includeChars.checked && !includeNums.checked) {
    warning.style.display = "block";
    passwordInput.value = "";
    return;
  } else {
    warning.style.display = "none";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  passwordInput.value = password;
}

function copyPassword() {
  if (passwordInput.value === "") return;
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied!");
}

// Initialize on load
window.onload = () => {
  updateLengthText();
  generatePassword();
};

lengthSlider.addEventListener("input", generatePassword);
includeChars.addEventListener("change", generatePassword);
includeNums.addEventListener("change", generatePassword);
