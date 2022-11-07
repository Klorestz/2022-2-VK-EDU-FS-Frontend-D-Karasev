const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const messages = document.querySelector('.messages');

document.addEventListener("DOMContentLoaded", MessageFromLocalStorage);
form.addEventListener('submit', handleSubmit);

function MessageFromLocalStorage(){
    let existingMessages = JSON.parse(localStorage.getItem("messages"));
    if (existingMessages == null) return;
    for (let message of existingMessages){
        CreateMessage(message);
    }
}

function CreateMessage (message){
    let message_block = document.createElement("div")
    message_block.className = "message_block";
    let message_text = document.createElement("div");
    let message_time = document.createElement("div");
    message_time.className = "message_date";
    message_text.innerText = message.text;
    message_time.innerText = message.date;
    message_block.appendChild(message_text);
    message_block.appendChild(message_time);
    document.getElementById("messages").appendChild(message_block);
}

function handleSubmit (event) {
    event.preventDefault();
    let existingMessages = JSON.parse(localStorage.getItem("messages"));
    if (existingMessages == null) existingMessages = [];
    let text = input.value;
    if (!text) return;
    let template = {
        "date" : new Date().toLocaleTimeString(),
        "text" : text,
        "sender" : 'Danila',
    }
    localStorage.setItem("message", JSON.stringify(template));
    existingMessages.push(template);
    localStorage.setItem("messages", JSON.stringify(existingMessages));
    CreateMessage(template);
    input.value = '';
}