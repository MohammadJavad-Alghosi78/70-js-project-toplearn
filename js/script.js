const skew = document.querySelector(".angle");

window.addEventListener("scroll", () => {
  let value = -10 + window.scrollY / 60;
  skew.style.transform = `skewY(${value}deg)`;
});
