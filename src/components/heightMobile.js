function setRealHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setRealHeight();
window.addEventListener('resize', setRealHeight);