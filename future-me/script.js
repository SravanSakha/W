function next() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "flex";
}

function generate() {
  let name = document.getElementById("name").value;
  let goal = document.getElementById("goal").value;

  let result = `${name}, in 2035 you became a successful ${goal}! 🚀`;

  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen3").style.display = "flex";
  document.getElementById("result").innerText = result;
}
