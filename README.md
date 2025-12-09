# 🍔 Food Ordering App

A full-stack food ordering application with Node.js backend and vanilla HTML/JS frontend.

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Create a `.env` file inside the `backend` folder:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/food-ordering
JWT_SECRET=your_secret_key_here
```

### 3. Run the Server

```bash
# Development (auto-reload)
npm run dev

# Production
npm start
```

### 4. Open the App

Open `login.html` in your browser or use **Live Server** (VS Code extension) on port `5500`.

---

## 📁 Project Structure

```
├── backend/          # Express API server
│   ├── controllers/  # Route handlers
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API endpoints
│   └── middleware/   # Auth middleware
├── assets/           # Images & static files
└── *.html            # Frontend pages
```

---

## 🔗 API Endpoints

| Route      | Description       |
|------------|-------------------|
| `/user`    | Auth & users      |
| `/dish`    | Menu items        |
| `/order`   | Order management  |
| `/review`  | Reviews           |

---

**Server runs on:** `http://localhost:3001`

