const submitBtn = document.querySelector(".submit");
const previewCard = document.querySelector(".preview");
const previewBtn = document.querySelector(".preview-btn");
const userNameInput = document.querySelector("#uname");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#msg");
const form = document.querySelector("form");
const msgArea = document.querySelector("#msg");
const emailInfo = document.querySelector(".email-info");
const nameInfo = document.querySelector(".name-info");
const msgInfo = document.querySelector(".msg-info");

const messages = [];
const regEx = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // alphanumeric plus accent marks.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // follows correct e-mail format.
};

const addMsg = () => {
  const msgPreview = {};
  msgPreview.name = userNameInput.value;
  msgPreview.email = emailInput.value;
  msgPreview.msg = msgInput.value;
  messages.push(msgPreview);
  previewCard.innerHTML = `<p>Thank you! This is your message: </p>
  <div class='preview-msg'><p><b>Username:</b> ${msgPreview.name}</p>
    <p><b>E-mail:</b> ${msgPreview.email}</p>
    <p><b>Message:</b><br></p><p id='msg-preview-box'> ${msgPreview.msg}</p></div>
    <p>Click Submit to finish</p><p onclick='exitPreview()' id='exit-preview'>X</p>`;
};

const formValidation = (e) => {
  if (e.target.id == "uname") {
    if (!userNameInput.value.match(regEx.name)) {
      nameInfo.innerHTML = `Incorrect name. Only letters and numbers allowed.`;
      nameInfo.classList.add("show-info");
    } else nameInfo.classList.remove("show-info");
  }
  if (e.target.id == "email") {
    if (emailInput.value && !emailInput.value.match(regEx.email)) {
      emailInfo.innerHTML = `Incorrect e-mail format.`;
      emailInfo.classList.add("show-info");
    } else emailInfo.classList.remove("show-info");
  }
  if (e.target.id == "msg") {
    if (msgArea.value.length == 1500) {
      msgInfo.innerHTML = `You've reached the maximum amount of characters available.`;
      msgInfo.classList.add("show-info");
    } else msgInfo.classList.remove("show-info");
  }
};

[userNameInput, emailInput, msgInput].forEach((input) => {
  input.addEventListener("keyup", formValidation);
});

form.addEventListener("submit", () => {
  if (previewCard) previewCard.classList.remove("preview-show");
  addMsg();
  console.log(
    `%c You submitted the following data: `,
    "background-color: #00b69e; color: white; padding: 0 .5rem"
  );
  console.log(
    `%c Name: ${messages[messages.length - 1].name}`,
    "background-color: #00b69e; color: white"
  );
  console.log(
    `%c E-mail: ${messages[messages.length - 1].email}`,
    "background-color: #00b69e; color: white"
  );
  console.log(
    `%c Message: ${messages[messages.length - 1].msg}`,
    "background-color: #00b69e; color: white; padding: 0 .5rem"
  );
});

previewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (previewCard.classList.contains("preview-show"))
    previewCard.classList.remove("preview-show");
  addMsg();
  previewCard.classList.add("preview-show");
});

const exitPreview = () => {
  previewCard.classList.remove("preview-show");
};
