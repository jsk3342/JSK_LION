let emptyCheck = document.querySelector("#empty_check");
let fullCheck = document.querySelector("#full_check");

emptyCheck.addEventListener("click", function () {
  emptyCheck.classList.add("hidden");
  fullCheck.classList.remove("hidden");
});
fullCheck.addEventListener("click", function () {
  emptyCheck.classList.remove("hidden");
  fullCheck.classList.add("hidden");
});

let loginBtn = document.querySelector("#w-btn");
let modal = document.querySelector(".black-bg");

loginBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

window.addEventListener("click", e => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
