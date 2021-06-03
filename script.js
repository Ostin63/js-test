let chatContent = document.querySelector(".chat-content");
let chatForm = document.querySelector(".chat-form");
let chatFormInput = chatForm.querySelector(".chat-form-input");
let template = document.querySelector("#message-template").content;
let messageTemplate = template.querySelektor(".chat-message-text");
let chatMessage = template.querySelektor(".chat-message");

chatForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  let chatText = chatFormInput.value;
  let messageBlock = messageTemplate.cloneNode(true);
  messageTemplate.textContent = chatText;
  chatContent.appendChild(messageBlock);
})