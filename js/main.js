
document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('playButton');
  const audioPlayer = document.getElementById('audioPlayer');

  playButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.innerText = 'To\'xtatish';
    } else {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      playButton.innerText = 'Boshlash';
    }
  });

  audioPlayer.addEventListener('timeupdate', function () {
    // Har bir marta yangilanishda to'xtatishni tekshirish
    if (audioPlayer.currentTime === audioPlayer.duration) {
      playButton.innerText = 'Boshlash';
    }
  });
});
