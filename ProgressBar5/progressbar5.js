document.addEventListener('DOMContentLoaded', function() {
  const progressBarFill = document.querySelector('.progress-bar-fill');

  function animateProgressBar(progress) {
      let currentProgress = 0;
      const progressInterval = setInterval(function() {
          if (currentProgress >= progress) {
              clearInterval(progressInterval);
          } else {
              currentProgress++;
              progressBarFill.style.width = `${currentProgress}%`;
          }
      }, 20); // You can adjust this value to make the animation faster or slower
  }

  animateProgressBar(100); // shows 100% progress

});