const progress = document.querySelector(".progress-bar");
window.addEventListener("scroll", () => {
  const winScroll = window.pageYOffset;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (winScroll * 100) / height;
  progress.style.width = `${scrolled}%`;
});
