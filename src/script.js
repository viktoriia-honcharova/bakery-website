const modal = document.querySelector(".backdrog");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModl = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModl);
modalBtnClose.addEventListener("click", toggleModl);
