export default {
  mounted(el) {
    const src = el.getAttribute('data-src');
    if (!src) return;

    // стиль для плавного появления
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.5s ease';

    const loadImage = () => {
      el.src = src;
      el.onload = () => {
        el.style.opacity = '1';
      };
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    });

    observer.observe(el);
  }
};