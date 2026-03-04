# 🚀 ProductHub (PERN stack)

ProductHub is a **full-stack product management web application** that allows users to create, manage, and track products through a clean and simple interface.

The project demonstrates a **modern web stack architecture** with secure authentication, a cloud-hosted database, and separate frontend and backend deployments.

---

## 🌐 Live Demo

Frontend  
👉 https://producthubs.onrender.com

Backend API  
👉 https://producthub-di4h.onrender.com

---

## ✨ Features

- 🔐 Secure user authentication using **Clerk**
- ➕ Add new products
- ✏️ Edit existing products
- ❌ Delete products
- 📦 Persistent storage using **PostgreSQL**
- ☁️ Cloud hosted database using **Neon**
- ⚡ Fast backend API built with **Express**
- 🎨 Responsive frontend UI
- 🚀 Deployed using **Render**

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Clerk Authentication

### Backend
- Node.js
- Express.js
- REST API

### Database
- PostgreSQL
- Neon (Serverless Postgres hosting)

### Deployment
- Render (Frontend + Backend)

---

## 🏗 System Architecture

```
Frontend (React + Tailwind)
        |
        | API Requests
        |
Backend (Node.js + Express)
        |
        | SQL Queries
        |
PostgreSQL Database (Neon)
```

Authentication is handled through **Clerk**, ensuring secure login, session handling, and protected routes.

---

## 🔐 Authentication

Authentication is implemented using **Clerk**, which provides:

- Sign Up / Sign In pages
- Secure session management
- Protected routes
- User identity management

---

## 🗄 Database

The application uses **PostgreSQL hosted on Neon**.

Benefits of Neon:
- Serverless PostgreSQL
- Automatic scaling
- Cloud database management
- High availability

The backend connects to the database using **environment variables** for security.

---

# 📂 Project Structure

```
ProductHub
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── config
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── utils
│   └── App.jsx
│
└── README.md
```

---

# 🚀 Deployment

The project is deployed using **Render**.

### Frontend Deployment
- Build command
```
npm install && npm run build
```

### Backend Deployment
- Start command
```
npm start
```

Both services are deployed separately and communicate through the **API URL**.

---

# 🔮 Future Improvements

- Product search functionality
- Pagination for product lists
- Dashboard analytics
- Admin panel
- Category based product organization

---

# 👨‍💻 Author

**Kshitij Chaware**

GitHub  
https://github.com/Kshitij-C-04

---

⭐ If you found this project useful, consider giving it a star on GitHub!
