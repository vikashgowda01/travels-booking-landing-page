
const backgrounds = [
  "url('bg3.jpg')",
  "url('bg2.jpg')",
  "url('bg1.jpeg')",
  "url('bg6.avif')"
];


let currentIndex = 0;

function updateBackground() {
  
  document.body.style.transition = 'background-image 1s ease-in-out';
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), ${backgrounds[currentIndex]}`;

  
  const trackerItems = document.querySelectorAll('.bottom__tracker .tracker__item');
  trackerItems.forEach(item => item.style.backgroundColor = '#ffffff33'); 
  trackerItems[currentIndex].style.backgroundColor = '#fead53'; 
}

document.querySelector('.chev__left').addEventListener('click', () => {

  currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  updateBackground();
});

document.querySelector('.chev__right').addEventListener('click', () => {

  currentIndex = (currentIndex + 1) % backgrounds.length;
  updateBackground();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  updateBackground();
}, 5000); 
updateBackground();


document.querySelector('.nav__menu-toggle').addEventListener('click', function() {

  document.querySelector('.nav__links').classList.toggle('show');
  
  
  this.classList.toggle('open');
});

