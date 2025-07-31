
  const video = document.getElementById('introVideo');
  const audio = document.getElementById('introSong');
  const content = document.querySelector('.product-grid');

  const hasSeenIntro = localStorage.getItem('hasSeenIntro');

  if (!hasSeenIntro) {
    video.style.display = 'block';
    content.style.display = 'none';

    video.addEventListener('playing', () => {
      audio.play().catch(() => {
        window.addEventListener('click', () => audio.play(), { once: true });
      });
    });

    video.addEventListener('ended', () => {
      video.classList.add('fade-out');
      localStorage.setItem('hasSeenIntro', 'true'); 
      setTimeout(() => {
        video.style.display = 'none';
        content.style.display = 'grid';
      }, 1500);
    });
  } else {
    video.style.display = 'none';
    content.style.display = 'grid';
    document.body.style.overflow = 'auto';
  }
