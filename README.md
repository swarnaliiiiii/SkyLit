# SkyLift - Task Management Web App

SkyLift is a task management web application built using **React, Flask, MongoDB, and Docker**. It allows users to efficiently organize, prioritize, and track their tasks in a streamlined dashboard.

## Features
- 📊 **Dashboard** to view all tasks at a glance
- ✅ **Add tasks** with title, description, due date, and priority
- 🔄 **Track progress** of each task
- 📅 **List tasks by due date**
- 🚀 **Prioritize tasks** to manage workload efficiently
- 🔐 **User authentication** (Login & Signup)
- 🐳 **Docker support** for easy deployment

## Tech Stack
- **Frontend**: React.js, Axios, TailwindCSS
- **Backend**: Flask, Flask-RESTful, Flask-JWT-Extended
- **Database**: MongoDB (via Flask-PyMongo)
- **Deployment**: Docker, Render (Flask API), Vercel (React UI)

## Installation & Setup
### Prerequisites
- Node.js & npm
- Python 3.8+
- MongoDB
- Docker (optional for containerized deployment)

### Backend Setup (Flask API)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skylift.git
   cd skylift/backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Mac/Linux
   venv\Scripts\activate  # Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the Flask API:
   ```bash
   python app.py
   ```

### Frontend Setup (React UI)
1. Navigate to the frontend folder:
   ```bash
   cd skylift/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

## Running with Docker
1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

## API Endpoints
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| POST   | /api/auth/login | User login               |
| POST   | /api/auth/signup | User registration        |
| GET    | /api/tasks      | Get all tasks            |
| POST   | /api/tasks      | Add a new task           |
| PUT    | /api/tasks/:id  | Update task details      |
| DELETE | /api/tasks/:id  | Delete a task            |

## Deployment
- **Backend**: Deployed on **Render/Railway**
- **Frontend**: Deployed on **Vercel/Netlify**

## Future Enhancements
- 📅 Calendar view for tasks
- 🔔 Task reminders & notifications
- 📌 Drag-and-drop task prioritization
- 📱 Mobile app integration

## Contributing
Contributions are welcome! Feel free to submit a pull request.

## License
This project is licensed under the MIT License.

---
Made with ❤️ by Swarnali

