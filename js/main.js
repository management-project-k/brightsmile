// HERO ANIMATION
anime({
  targets: '.animated-text',
  translateY: [-50, 0],
  opacity: [0,1],
  duration: 1500,
  easing: 'easeOutExpo'
});

// SERVICES CARDS ANIMATION
anime({
  targets: '.services-cards .card',
  translateY: [50,0],
  opacity: [0,1],
  delay: anime.stagger(200),
  duration: 1000,
  easing: 'easeOutExpo'
});

// TEAM CARDS ANIMATION
anime({
  targets: '.team-member',
  translateX: [-50,0],
  opacity: [0,1],
  delay: anime.stagger(300),
  duration: 1000,
  easing: 'easeOutExpo'
});

// FAQ ACCORDION
document.querySelectorAll('.accordion-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// EMAILJS FORM
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.send("service_71ka0bc","template_dhk3h6j",{
    from_name: this.name.value,
    from_email: this.email.value,
    message: this.message.value
  }).then(res=>alert("Message Sent Successfully!"))
    .catch(err=>alert("Error: "+err));
  this.reset();
});

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=> {
  navLinks.classList.toggle('open');
});
