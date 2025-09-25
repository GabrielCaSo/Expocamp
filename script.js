const overlay = document.getElementById('imgOverlay');
const overlayImg = document.getElementById('overlayImg');
const zoomables = document.querySelectorAll('.zoomable');

zoomables.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.classList.add('active');
  });
});

// Fechar ao clicar no fundo
overlay.addEventListener('click', (e) => {
  if (e.target !== overlayImg) {
    overlay.classList.remove('active');
  }
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    overlay.classList.remove('active');
  }
});

// Pega o botão do menu
const toggler = document.querySelector('.navbar-toggler');

// Quando clicar, alterna a classe "rotated"
toggler.addEventListener('click', () => {
  toggler.classList.toggle('rotated');
});
