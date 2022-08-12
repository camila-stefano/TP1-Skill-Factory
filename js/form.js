const submitBtn = document.querySelector(".submit");
const previewCard = document.querySelector(".preview");
const previewBtn = document.querySelector(".preview-btn");
const userNameInput = document.querySelector("#uname");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#msg");
const messages = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

previewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const msgPreview = {};
  msgPreview.name = userNameInput.value;
  msgPreview.email = emailInput.value;
  msgPreview.msg = msgInput.value;
  messages.push(msgPreview);
  previewCard.innerHTML = `<p>Thank you! This is your message: </p>
  <div><p><b>Username:</b> ${msgPreview.name}</p>
    <p><b>E-mail:</b> ${msgPreview.email}</p>
    <p><b>Message:</b> ${msgPreview.msg}</p></div>
    <p><b>Click Submit to finish</p>`;

  previewCard.classList.add("preview-show");
});

// action="mailto:camilavictoriastefano@gmail.com"
