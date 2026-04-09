function next() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "flex";
}

function generate() {
  let name = document.getElementById("name").value;
  let goal = document.getElementById("goal").value;

  let year = Math.floor(Math.random() * (2099 - 2025 + 1)) + 2025;

  let result = `${name}, in ${year} you became a successful ${goal}! 🚀`;

  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen3").style.display = "flex";
  document.getElementById("result").innerText = result;
}

