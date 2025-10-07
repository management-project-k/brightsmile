// HERO ANIMATION
anime({
  targets: '.animated-text',
  translateY: [-50, 0],
  opacity: [0,1],
  duration: 1500,
  easing: 'easeOutExpo'
});

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=> {
  navLinks.classList.toggle('open');
});

// CARD HOVER ANIMATION
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', ()=> {
    anime({
      targets: card,
      scale: 1.05,
      rotate: 1,
      duration: 400
    });
  });
  card.addEventListener('mouseleave', ()=> {
    anime({
      targets: card,
      scale: 1,
      rotate: 0,
      duration: 400
    });
  });
});
