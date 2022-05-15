const openButton = document.querySelector("#open");
const modalContainer = document.querySelector(".modal_container");
const closeButton = document.querySelector("#close");

openButton.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

closeButton.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
