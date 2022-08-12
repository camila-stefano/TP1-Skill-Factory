const submitBtn = document.querySelector(".submit");
const previewCard = document.querySelector(".preview");
const previewBtn = document.querySelector(".preview-btn");
const userNameInput = document.querySelector("#uname");
const emailInput = document.querySelector("#email");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  preview.classList.add("preview-show");
});

previewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  previewCard.classList.add("preview-show");
});

// action="mailto:camilavictoriastefano@gmail.com"
