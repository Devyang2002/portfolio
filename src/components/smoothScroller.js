export function smoothScrollTo(target) {
    const targetSection = document.querySelector(target);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  }