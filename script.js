const chatContainer = document.querySelector('.chat-content');
const messages = chatContainer.children;
const newMessageForm = document.querySelector('.chat-form');
const newMessageInput = newMessageForm.querySelector('.chat-form-input');
const messageTemplate = document.querySelector('#message-template').content;
const newMessageTemplate = messageTemplate.querySelector('.chat-message');

newMessageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const messageText = newMessageInput.value;
  const newMessage = newMessageTemplate.cloneNode(true);
  const newMessageText = newMessage.querySelector('.chat-message-text');

  newMessageText.textContent = messageText;
  chatContainer.appendChild(newMessage);
  messageDelete(newMessage);
  newMessageInput.value = '';
});

const messageDelete = function (message) {
  const close = message.querySelector('.chat-message-button');
  close.addEventListener('click', () => {
    message.remove();
  });
};

for (let i = 0; i < messages.length; i++) {
  messageDelete.messages[i];
};
