const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.nav-toggle');
const prevBtn = document.querySelectorAll('.btn--prev');
const nextBtn = document.querySelectorAll('.btn--next');
const slides = document.querySelectorAll('.hero-slide');

navToggle.addEventListener('click', () => {
  const attribute = nav.getAttribute('data-visible');
  if (attribute === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navToggle.firstChild.src = './images/icon-close.svg';
    const overlay = document.createElement('span');
    document.body.appendChild(overlay);
    overlay.classList.add('dim');
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navToggle.firstChild.src = './images/icon-hamburger.svg';
    document.body.removeChild(document.querySelector('.dim'));
  }
})

let activeSlide = 0;
console.log(activeSlide)

prevBtn.forEach(btn => btn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setActiveSlide();
  console.log(activeSlide)
}))

nextBtn.forEach(btn => btn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
  console.log(activeSlide)
}))

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');

}
