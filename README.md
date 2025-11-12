Hosting URL: https://disaster-management-syst-1bc68.web.app

🌍 Project Overview

Project Name: Disaster Management System (DMS)
Platform: Web App
Tech Stack:

Frontend: React + Tailwind CSS

Backend & Auth: Firebase Authentication + Firestore Database

Hosting: Firebase Hosting

API (optional): OpenWeatherMap API, Google Maps API

🧩 Project Modules
👤 User Side:
Feature	Description
Login / Register	Firebase Auth (Email/Password)
Dashboard	View active disasters, news, and alerts
Report Disaster	Submit local disaster information (with image & location)
Live Alerts	Real-time updates fetched from Firestore
Map View	Google Maps integration showing disaster & safe zones
Emergency Contacts	Hospital, Fire Service, Police, Rescue Teams
Request Help	Submit request form (stored in Firestore)
🏢 Admin Side:
Feature	Description
Admin Login	Firebase Auth (with admin role check)
Dashboard Overview	Total users, disasters, and pending requests
Manage Disaster Alerts	Add, update, or delete disaster info
View Help Requests	Review and mark them as resolved
Volunteer Management	Add volunteer contacts & info
Report Generation	Export data or show stats
🗂️ Folder Structure (React + Firebase)

disaster_management_system/
├── public/
│   ├── index.html
│   └── assets/               # images, logos, icons, etc.
│       ├── images/
│       └── logos/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── layouts/              # App layouts
│   │   └── RootLayout.jsx
│   │
│   ├── pages/                # All pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Contact.jsx
│   │   ├── UserDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── DisasterReport.jsx
│   │   └── HelpRequest.jsx
│   │
│   ├── context/              # React context
│   │   └── AuthContext.jsx
│   │
│   ├── firebase/             # Firebase config and helpers
│   │   ├── firebaseConfig.js
│   │   ├── auth.js           # login, register, logout helpers
│   │   └── firestore.js      # Firestore helpers for reports, requests, etc.
│   │
│   ├── routes/               # Routing configuration
│   │   └── routes.jsx
│   │
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
│
├── .env                      # Environment variables
├── package.json
└── README.md

🧠 Firestore Database Design
🗃️ Collections
users
Field	Type	Description
uid	string	Firebase user ID
name	string	Full name
email	string	Email address
role	string	“user” or “admin”
location	string	Optional (city, area)
disasters
Field	Type	Description
id	string	Auto ID
type	string	“Flood”, “Fire”, “Earthquake”, etc.
description	string	Short details
location	string	Affected area
date	timestamp	Reported date
imageURL	string	Optional image
status	string	“active”, “resolved”
helpRequests
Field	Type	Description
id	string	Auto ID
userId	string	Who requested
disasterId	string	Related disaster
message	string	Help details
status	string	“pending”, “resolved”
createdAt	timestamp	Request date
contacts
Field	Type	Description
name	string	Contact name
phone	string	Number
type	string	“Hospital”, “Fire Service”, etc.
🎨 Page Flow (UI Flow)
Login/Register
     ↓
Role Check (User or Admin)
     ↓
 ┌─────────────┬─────────────┐
 │ User Panel  │ Admin Panel │
 ├─────────────┴─────────────┤
 │ Home: Alerts, Map, Tips   │
 │ Report Disaster            │
 │ Request Help               │
 │ View Contacts              │
 │                            │
 │ Add / Manage Alerts        │
 │ View Requests              │
 │ Manage Volunteers          │
 │ Generate Reports           │
 └────────────────────────────┘

⚙️ Implementation Roadmap
Step	Task	Member Suggestion
1️⃣	Initialize React + Firebase	Both
2️⃣	Setup AuthContext (login/register/logout)	Member 1
3️⃣	Create User Dashboard (alerts, report form)	Member 1
4️⃣	Create Admin Dashboard (manage alerts, requests)	Member 2
5️⃣	Setup Firestore CRUD (for disasters, help requests)	Member 2
6️⃣	Integrate Google Maps API (optional)	Member 1
7️⃣	Design UI with Tailwind + responsive layout	Both
8️⃣	Add notifications (Firebase or toast)	Member 2
9️⃣	Deploy to Firebase Hosting	Both
🚀 Bonus (Optional Enhancements)

🌦️ Weather API for live warnings

🧭 Location detection using Geolocation API

📊 Charts for showing disaster statistics

🔔 Push notifications via Firebase Cloud Messaging (FCM)