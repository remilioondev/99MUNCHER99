// Ensure the script runs after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {

  // Get a reference to the button elements using their classes
  var startButton = document.querySelector(".continue.w-button");
  var muteButton = document.querySelector(".mute.w-button");

  // Create an audio element
  var audio = new Audio("music/donke.mp3");
  audio.loop = true;

  // Add a click event listener to the start button
  startButton.addEventListener("click", function(event) {
    event.preventDefault(); // prevent any default action of the anchor tag

    // Play the audio file
    audio.play();
  });

  // Add a click event listener to the mute button
  muteButton.addEventListener("click", function(event) {
    event.preventDefault(); // prevent any default action of the anchor tag

    // Toggle play/pause for the audio
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
