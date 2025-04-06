# Express.js Backend API
🗒️ notes.txt – Contains detailed explanation of file/folder order and usage.

This is a simple backend API built using **Express.js** and **MongoDB** with **Mongoose** ODM. It supports authentication and task management, built for a MERN stack application.

## 🚀 Features

- User registration and login (JWT-based authentication)
- CRUD operations for tasks
- Environment variables support using `dotenv`
- Modular folder structure
- Connected to MongoDB Atlas

## 🧾 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Dotenv
- CORS
- JWT

## 🗂️ Project Structure

```
project-root/
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── models/
│   ├── userModel.js
│   └── taskModel.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── .env
├── server.js / index.js
├── package.json
└── note.txt
```

## 📦 Installation

```bash
npm install
```

## 🌐 Running the Server

```bash
npm run dev
```

Make sure you have a `.env` file with the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## 🛠 API Endpoints

### Auth
- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – User login

### Tasks
- `GET /api/tasks` – Get all tasks
- `POST /api/tasks` – Create new task
- `PUT /api/tasks/:id` – Update task
- `DELETE /api/tasks/:id` – Delete task

## ✅ Run with Nodemon (for development)

```bash
npm install --save-dev nodemon
```

Add this to your `package.json` scripts:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

---

### 🧠 Author

- **Ananya A H** – Full Stack Developer (MERN)
