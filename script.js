let percent = 0;
let isPaused = false;
let interval = null;

function startFakeDownload() {
  const progress = document.getElementById("progress");
  const status = document.getElementById("status");
  const pauseBtn = document.getElementById("pauseBtn");
  const startBtn = document.getElementById("startBtn");
  const sound = document.getElementById("completeSound");

  if (interval !== null) return;

  pauseBtn.disabled = false;
  startBtn.disabled = true;
  status.textContent = "Downloading update...";

  interval = setInterval(() => {
    if (isPaused) return;

    percent += Math.floor(Math.random() * 8) + 1;
    if (percent >= 100) {
      percent = 100;
      clearInterval(interval);
      interval = null;
      pauseBtn.disabled = true;
      startBtn.disabled = false;
      status.textContent = "Update complete. Restarting... (just kidding)";
      sound.play();
    } else {
      status.textContent = `Downloading update... ${percent}%`;
    }

    progress.style.width = percent + "%";
  }, 300);
}

function togglePause() {
  isPaused = !isPaused;
  const pauseBtn = document.getElementById("pauseBtn");
  if (isPaused) {
    pauseBtn.textContent = "Resume";
  } else {
    pauseBtn.textContent = "Pause";
  }
}
