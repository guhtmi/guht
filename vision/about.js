const popup = document.getElementById('popup');
const closeBtn = document.getElementById('popupClose');

document.querySelectorAll('.toolbar img').forEach(icon => {
  icon.addEventListener('click', () => {
    popup.classList.remove('hidden');
    new Audio('sounds/error.wav').play();
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});