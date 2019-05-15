const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
  if(messageIn.value === ''){
    alert('Invalid entry');
  }
  else {
    messageOut.innerHTML = messageIn.value;
    messageIn.value = '';
  }
}
