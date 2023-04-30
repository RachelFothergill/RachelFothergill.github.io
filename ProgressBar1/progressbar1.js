// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {

  // Get the element with the class 'progress-bar-fill'
  const progressBarFill = document.querySelector('.progress-bar-fill');

  // Define a function that animates the progress bar to a given progress value
  function animateProgressBar(progress) {
    let currentProgress = 0;

    // Set up an interval that runs every 20 milliseconds
    const progressInterval = setInterval(function() {

      // If the current progress is greater than or equal to the target progress, clear the interval
      if (currentProgress >= progress) {
        clearInterval(progressInterval);
      } else {
        // Otherwise, increment the current progress and update the width of the progress bar
        currentProgress++;
        progressBarFill.style.width = `${currentProgress}%`;
      }
      }, 20); //Animation Speed
  }

  // Call the animateProgressBar function with a progress value of 20, which will show 20% progress
  animateProgressBar(20);
});
