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

prevBtn.forEach(btn => btn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setActiveSlide();
}))


nextBtn.forEach(btn => btn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
}))
prevBtn.forEach(btn => btn.addEventListener('mouseover', () => {
  btn.style.backgroundColor = 'var(--clr-grey)';
}))
prevBtn.forEach(btn => btn.addEventListener('mouseleave', () => {
  btn.style.backgroundColor = '#000';
}))
nextBtn.forEach(btn => btn.addEventListener('mouseover', () => {
  btn.style.backgroundColor = 'var(--clr-grey)';
}))
nextBtn.forEach(btn => btn.addEventListener('mouseleave', () => {
  btn.style.backgroundColor = '#000';
}))
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }
    setActiveSlide();
    prevBtn.forEach(btn => btn.style.backgroundColor = 'var(--clr-grey)');
    setTimeout(() => {
      prevBtn.forEach(btn => btn.style.backgroundColor = '#000');
    }, 500);

  } else if (e.key === 'ArrowRight') {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }
    setActiveSlide();
    nextBtn.forEach(btn => btn.style.backgroundColor = 'var(--clr-grey)');
    setTimeout(() => {
      nextBtn.forEach(btn => btn.style.backgroundColor = '#000');
    }, 500);
  }
})
function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}


