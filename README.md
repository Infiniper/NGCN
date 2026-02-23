# NGCN - Next Gen Computing And Networking

**Research at the Edge of Computing & Networking**

A modern web platform showcasing cutting-edge research in computing and networking technologies. Built with React and Express, NGCN serves as a comprehensive hub for research publications, team profiles, blog posts, and gallery content.

### [🌐 Live Demo](https://ngcn.netlify.app/)



![Homepage Screenshot](/assets/homepage-screenshot.png)


---


## ✨ Features

### Frontend
- **Responsive Design**: Fully responsive interface built with React and Tailwind CSS
- **Dynamic Routing**: Client-side routing with React Router for smooth navigation
- **Rich Content**: 
  - Home page with video background and impact highlights
  - About section with founder and team information
  - Research publications catalog
  - Blog system with markdown support
  - Image gallery with react-image-gallery
  - Contact form for inquiries
- **Modern UI Components**: Lucide React icons and React Icons integration
- **Social Integration**: Embedded tweets using react-tweet

### Backend
- **RESTful API**: Express.js server for handling data requests
- **Email Service**: Nodemailer integration for contact form submissions
- **Security**: Helmet.js for security headers and CORS support
- **Rate Limiting**: Express rate limiting for API protection
- **Database**: Supabase integration for data management
- **Logging**: Morgan middleware for request logging

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.8.2
- **UI Components**: 
  - Lucide React (icons)
  - React Icons
  - React Image Gallery
  - React Markdown
  - React Tweet
- **HTTP Client**: Axios 1.12.2
- **Database Client**: Supabase JS 2.57.0

### Backend
- **Runtime**: Node.js
- **Framework**: Express 5.1.0
- **Database**: Supabase
- **Email**: Nodemailer 7.0.6
- **Security**: Helmet 8.1.0, CORS 2.8.5
- **Rate Limiting**: Express Rate Limit 8.0.1
- **Logging**: Morgan 1.10.1
- **Development**: Nodemon 3.1.10

---

## 📁 Project Structure

```
NGCN/
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── Components/    # Reusable React components
│   │   ├── Pages/         # Page components (Home, About, Research, etc.)
│   │   ├── Utilities/     # Helper functions and utilities
│   │   ├── assets/        # Static assets (images, videos)
│   │   ├── db/            # JSON data files
│   │   ├── routes/        # Route configurations
│   │   ├── utils/         # Additional utilities
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   ├── public/            # Public assets
│   ├── index.html         # HTML template
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Frontend dependencies
│
├── backend/               # Express backend server
│   ├── src/
│   │   ├── app.js         # Express app configuration
│   │   ├── server.js      # Server entry point
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # Request handlers
│   │   ├── middlewares/   # Custom middleware
│   │   ├── models/        # Data models
│   │   ├── routes/        # API routes
│   │   └── utils/         # Utility functions
│   └── package.json       # Backend dependencies
│
├── docker-compose.yml     # Docker composition file
├── package.json           # Root package file
└── README.md             # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Infiniper/NGCN.git
   cd NGCN
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

5. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```bash
   cd backend
   touch .env
   ```
   
   Add the following variables (replace with your actual values):
   ```env
   PORT=5000
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

### Running the Application

#### Development Mode

**Option 1: Run both frontend and backend concurrently**
```bash
npm run dev
```

**Option 2: Run separately**

Terminal 1 - Frontend:
```bash
cd frontend
npm run dev
```

Terminal 2 - Backend:
```bash
cd backend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

#### Production Mode

**Build the frontend:**
```bash
cd frontend
npm run build
```

**Start the backend:**
```bash
cd backend
npm start
```

---

## 📧 Contact

Email: [infiniper@gmail.com](infiniper@gmail.com)

---


<div align="center">
  <p>Built with ❤️</p>
  <p>⭐ Star us on GitHub if you find this project useful!</p>
</div>
