const nav = document.querySelector("#nav");
const toggle = document.querySelector("#toggle");

function menuToggle() {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
  console.log(toggle);
}
