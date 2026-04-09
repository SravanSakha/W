// Move from screen1 to screen2, then generate result
function next() {
  const name = document.getElementById("name").value.trim();
  const goal = document.getElementById("goal").value.trim();

  if (!name || !goal) {
    alert("Please enter both your name and goal!");
    return;
  }

  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "flex";

  // Delay 1 second for loading effect
  setTimeout(() => generate(name, goal), 1000);
}

// Generate the future message
function generate(name, goal) {
  let year = Math.floor(Math.random() * (2030 - 2026 + 1)) + 2026;
  let result = `${name}, in ${year} you became a successful ${goal}!`;

  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen3").style.display = "flex";
  document.getElementById("result").innerText = result;
}

// Mute/unmute background music
function toggleMusic() {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) bgm.play();
  else bgm.pause();
}

// Restart app
function restart() {
  document.getElementById("screen3").style.display = "none";
  document.getElementById("screen1").style.display = "flex";
  document.getElementById("name").value = "";
  document.getElementById("goal").value = "";
}
