const audio = document.getElementById("audio");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleButton.innerHTML = '<i class="fas fa-stop"></i>';
  } else {
    audio.pause();
    audio.currentTime = 0; // Reset to the beginning
    toggleButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// Ensure the icon resets to "play" when the audio ends (even with loop)
audio.addEventListener("ended", () => {
  if (!audio.loop) {
    toggleButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});
