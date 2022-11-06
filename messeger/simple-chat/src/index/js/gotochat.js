const chat = document.querySelector(".chat");
chat.addEventListener("click", goToChat);
function goToChat() {
    window.location.href = "./chat.html";
}