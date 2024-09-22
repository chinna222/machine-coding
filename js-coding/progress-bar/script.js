const progressBar = document.getElementById("progress-bar");
const incrementValue = 10;

function updateProgressBar() {
  if (progressBar.value < progressBar.max) {
    progressBar.value += incrementValue;
    setTimeout(updateProgressBar, 1000);
    if (progressBar.value >= progressBar.max) {
      progressBar.classList.add("update-progress-bar-value");
    }
  }
}

updateProgressBar();
