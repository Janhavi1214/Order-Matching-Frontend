## Frontend

Built with **Vite + React** — a dark Bloomberg Terminal-style admin dashboard.

**Features:**
- Place BUY/SELL limit orders via form
- Live orders table with color-coded types (green/red) and status
- Trade execution feed showing all matched orders
- Auto-refreshes after every order placement

**Tech:**
| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Custom CSS (terminal aesthetic) |
| API Integration | Fetch API with async/await |

**Running the frontend:**
```bash
cd trading-engine-frontend
npm install
npm run dev
```
Open `http://localhost:5173`

> Make sure the Spring Boot backend is running on port 8080 before starting the frontend.

## Screenshots

![Trading Terminal](screenshots/dashboard.png)
