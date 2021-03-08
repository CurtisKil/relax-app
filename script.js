// DOM Elements Needed
const container = document.getElementById("container");
const text = document.getElementById("text");

// Variables
// Total time breathe takes
const totalTime = 7500;
// Calculate breathe time
const breathTime = (totalTime / 5) * 2;
// Hold breath time
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In Mothafucka! -Wim Hof";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out Mothafucka! -Wim Hof";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

// Run animation for the total time of the animation
setInterval(breathAnimation, totalTime);
