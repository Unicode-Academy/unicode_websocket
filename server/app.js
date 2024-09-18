const WebSocket = require("ws");

// Tạo một WebSocket server trên cổng 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Gửi thông điệp tới client
  // ws.send("Hello from server");

  // Nhận tin nhắn từ client
  ws.on("message", (message) => {
    const { type, payload } = JSON.parse(message.toString());
    if (type === "load-message") {
      ws.send("Chào mừng bạn đến với Unicode");
    }
    if (type === "send-message") {
      ws.send(payload);
    }
  });

  // Sự kiện khi client ngắt kết nối
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
