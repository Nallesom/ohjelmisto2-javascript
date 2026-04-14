const p = document.querySelector('#trigger');
p.addEventListener('mouseenter', () => {
  document.querySelector('#target').src = 'img/picB.jpg';
});

p.addEventListener('mouseleave', () => {
  document.querySelector('#target').src = 'img/picA.jpg';
});