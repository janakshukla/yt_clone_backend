# 📺 YouTube Clone Backend

**YouTube Clone Backend** is the server-side component of a full-stack YouTube clone application. Built with Node.js, Express.js, and MongoDB, it provides RESTful APIs for functionalities such as user authentication, video management, comments, likes, and subscriptions.

---

## ✨ Features

* 🔐 **User Authentication**: Secure user registration and login using JWT.
* 📹 **Video Management**: Upload, update, delete, and retrieve videos.
* 💬 **Comments**: Add, edit, delete, and fetch comments on videos.
* 👍 **Likes & Dislikes**: Like or dislike videos and manage user preferences.
* 📺 **Subscriptions**: Subscribe to channels and manage subscriptions.
* 🔍 **Search & Recommendations**: Search videos and get recommended content.

---

## 🛠️ Tech Stack

* **Runtime**: [Node.js](https://nodejs.org/)
* **Framework**: [Express.js](https://expressjs.com/)
* **Database**: [MongoDB](https://www.mongodb.com/)
* **ODM**: [Mongoose](https://mongoosejs.com/)
* **Authentication**: [JWT](https://jwt.io/)
* **File Uploads**: [Multer](https://github.com/expressjs/multer)

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or later)
* [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/janakshukla/yt_clone_backend.git
   cd yt_clone_backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on [http://localhost:5000](http://localhost:5000).

---

## 📁 Project Structure

```
yt_clone_backend/
├── controllers/        # Request handlers
├── models/             # Mongoose models
├── routes/             # API routes
├── middleware/         # Custom middleware
├── utils/              # Utility functions
├── uploads/            # Uploaded files
├── .env                # Environment variables
├── server.js           # Entry point
└── package.json        # Project metadata
```

---

## 📬 Contact

For any inquiries or feedback, feel free to reach out to [Janak Shukla](https://github.com/janakshukla).
