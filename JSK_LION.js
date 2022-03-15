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
loginBtn.addEventListener("click", function () {
  emptyCheck.classList.remove("hidden");
  fullCheck.classList.add("hidden");
});
