# 📈 Real-Time Stock Dashboard (WebSocket Based)

A real-time stock monitoring web application built using Node.js and WebSockets.
Users can log in, subscribe to stocks, and receive live stock price updates.

--------------------------------------------------

FEATURES
- Email-based login
- Real-time stock price updates
- WebSocket communication
- Subscribe to selected stocks
- Live updates every second
- Logout functionality
- Responsive UI

--------------------------------------------------

TECH STACK
- Backend: Node.js, HTTP, WebSocket (ws)
- Frontend: HTML, CSS, JavaScript

--------------------------------------------------

PROJECT STRUCTURE

stock-dashboard
|-- server.js
|-- login.html
|-- dashboard.html
|-- README.md
|-- package.json

--------------------------------------------------

SUPPORTED STOCKS
- GOOG
- TSLA
- AMZN
- META
- NVDA

Prices are simulated and updated every second.

--------------------------------------------------

INSTALLATION & SETUP

1. Clone the repository
git clone https://github.com/apekshaaa04/stock-dashboard.git

2. Go to project folder
cd stock-dashboard

3. Install dependencies
npm install

4. Start the server
node server.js

Server runs on:
http://localhost:5000

--------------------------------------------------

HOW TO USE
1. Open browser and go to http://localhost:5000
2. Login using any email and password
3. Subscribe to stocks
4. View live price updates
5. Logout anytime

--------------------------------------------------

HOW REAL-TIME UPDATES WORK
- Client connects via WebSocket
- User subscribes to stocks
- Server sends price updates every 1 second
- Only subscribed users receive updates

--------------------------------------------------

LEARNING OUTCOMES
- WebSocket-based real-time communication
- Node.js server handling
- Client-server interaction
- Dynamic UI updates
- Browser storage (localStorage)

--------------------------------------------------

FUTURE ENHANCEMENTS
- Real authentication
- Database integration
- Real stock APIs
- Cloud deployment

--------------------------------------------------

AUTHOR
Apeksha Desai
GitHub: https://github.com/apekshaaa04
