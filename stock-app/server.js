// // server.js
// const http = require("http");
// const fs = require("fs");
// const WebSocket = require("ws");

// const server = http.createServer((req, res) => {
//   // Serve dashboard.html when browser opens localhost:5000
//   const html = fs.readFileSync("dashboard.html", "utf-8");
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(html);
// });

// // Create WebSocket server
// const wss = new WebSocket.Server({ server });

// // Supported tickers
// const STOCKS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

// // Initial prices
// let prices = {};
// STOCKS.forEach(s => prices[s] = 100 + Math.floor(Math.random() * 200));

// // Update prices every second
// setInterval(() => {
//   STOCKS.forEach(stock => {
//     const delta = (Math.random() * 10) - 5;
//     prices[stock] = Number((prices[stock] + delta).toFixed(2));

//     // Send to subscribed users
//     wss.clients.forEach(client => {
//       if (
//         client.readyState === WebSocket.OPEN &&
//         client.subscribed &&
//         client.subscribed.includes(stock)
//       ) {
//         client.send(JSON.stringify({
//           type: "priceUpdate",
//           stock,
//           price: prices[stock]
//         }));
//       }
//     });
//   });
// }, 1000);

// // Handle WebSocket connections
// wss.on("connection", ws => {
//   ws.subscribed = [];

//   ws.on("message", msg => {
//     const data = JSON.parse(msg);

//     if (data.type === "login") {
//       ws.email = data.email;
//     }

//     if (data.type === "subscribe") {
//       if (!ws.subscribed.includes(data.stock)) {
//         ws.subscribed.push(data.stock);
//       }

//       // Send immediate price after subscribing
//       ws.send(JSON.stringify({
//         type: "priceUpdate",
//         stock: data.stock,
//         price: prices[data.stock]
//       }));
//     }
//   });
// });

// server.listen(5000, () => {
//   console.log("Dashboard running at http://localhost:5000");
// });
// server.js
const http = require("http");
const fs = require("fs");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
  let file = "";

  if (req.url === "/" || req.url === "/login.html") file = "login.html";
  else if (req.url.startsWith("/dashboard")) file = "dashboard.html";
  else return;

  const html = fs.readFileSync(file, "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

const wss = new WebSocket.Server({ server });

const STOCKS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];
let prices = {};
STOCKS.forEach(s => prices[s] = 100 + Math.floor(Math.random() * 200));

setInterval(() => {
  STOCKS.forEach(stock => {
    const delta = (Math.random() * 10) - 5;
    prices[stock] = Number((prices[stock] + delta).toFixed(2));

    wss.clients.forEach(c => {
      if (c.readyState === WebSocket.OPEN && c.subscribed?.includes(stock)) {
        c.send(JSON.stringify({
          type: "priceUpdate",
          stock,
          price: prices[stock]
        }));
      }
    });
  });
}, 1000);

wss.on("connection", ws => {
  ws.subscribed = [];

  ws.on("message", msg => {
    const data = JSON.parse(msg);

    if (data.type === "login") ws.email = data.email;

    if (data.type === "subscribe") {
      if (!ws.subscribed.includes(data.stock)) ws.subscribed.push(data.stock);

      ws.send(JSON.stringify({
        type: "priceUpdate",
        stock: data.stock,
        price: prices[data.stock]
      }));
    }
  });
});

server.listen(5000, () =>
  console.log("Open Login Page → http://localhost:5000")
);
