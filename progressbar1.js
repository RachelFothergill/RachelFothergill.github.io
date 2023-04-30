document.addEventListener('DOMContentLoaded', function() {
  const progressBarFill = document.querySelector('.progress-bar-fill');

  function updateProgressBar(progress) {
    progressBarFill.style.width = `${progress}%`;
  }

  // Example usage:
  updateProgressBar(25); // shows 25% progress
});
