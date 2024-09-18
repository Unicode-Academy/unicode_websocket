const socket = new WebSocket("ws://localhost:8080");
const messagesEl = document.getElementById("messages");
const form = document.querySelector("form");
socket.addEventListener("open", () => {
  console.log("Connected");
  //Gửi yêu cầu lên server
  socket.send(
    JSON.stringify({
      type: "load-message",
    })
  );
});
socket.addEventListener("message", (event) => {
  const p = document.createElement("p");
  p.innerText = event.data;
  messagesEl.appendChild(p);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageEl = e.target.querySelector("input");
  const message = messageEl.value;
  socket.send(
    JSON.stringify({
      type: "send-message",
      payload: message,
    })
  );
  messageEl.value = "";
});
