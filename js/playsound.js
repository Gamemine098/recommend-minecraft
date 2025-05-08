document
  .getElementById("playSoundLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const audio = document.getElementById("funSound");
    audio.play();
  });
