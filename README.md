# Mini LinkedIn-like Community Platform

A simple full-stack web application where users can register, login, create posts, and view a feed — similar to a basic LinkedIn.

## 🚀 Stack Used

### Frontend:
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend:
- Node.js
- Express.js
- SQLite (using Sequelize ORM)
- CORS, Body-Parser, JWT

### Hosting:
- Frontend: Render
- Backend: Render

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Swati-jain123/mini_linkdlin_assignment.git
cd mini_linkdlin_assignment
```

### 2. Setup Backend

```bash
cd backend
npm install
node index.js
```

### 3. Setup Frontend

```bash
cd frontend
npm install
# Create `.env` file
REACT_APP_BACKEND_URL=https://your-backend.onrender.com
npm start
```

---

## 👤 Admin / Demo User (Optional)

You can register a new user on the frontend or use this demo account:

- **Email:** swati2003jain@gmail.com
- **Password:** 12345
💡 If you try to login with an unregistered email, you will be redirected to the **Register** page automatically — just enter your desired email and password, and you’ll be taken to register your profile.

---

## ✨ Features

- Register and Login with bio, name, email, password
- Create posts and see them in a feed
- View your own profile and post history
- JSON Web Token (JWT)-based authentication
- Responsive UI using Tailwind CSS

---

## 🌐 Live Demo

Frontend: [https://mini-linkdlin-assignment-1.onrender.com/](https://mini-linkdlin-assignment-1.onrender.com/)  
Backend: [https://mini-linkdlin-assignment.onrender.com](https://mini-linkdlin-assignment.onrender.com)

---

## 📄 License

MIT License
