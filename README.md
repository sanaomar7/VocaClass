# VocaClass
Kideo – Weekly Learning Planner

A full-stack mini web application built as part of the Kideo Full Stack Developer Technical Assessment.
The solution includes a responsive landing page and a multi-step weekly learning planner with a clean, kid-friendly UI inspired by the provided Figma design.

📌 Overview

This project delivers a playful and intuitive learning-planner experience.
It guides parents through 3 simple steps to generate a personalized weekly learning journey for their child, including age-based recommendations and app suggestions.

Both the Front-end and Back-end are implemented with a focus on:

Code clarity

Extensibility

Simplicity

Separation of concerns

Reusable components

Clean folder structure

✨ Features
🎨 Front-end

Built with React (Vite)

Fully responsive and inspired by Kideo’s playful visual style

Multi-step planner (Name → Goals → Routine)

Character-based themes using the child’s favorite mascot

Smooth intro modal

Reusable UI components (inputs, chips, pills, steps bar)

Clean global CSS design system

Real-time result preview after generating the plan

🛠 Back-end

Node.js + Express server

Organized into routes, controllers, and utilities

/api/plan endpoint:

Takes child info, goals, language, routine

Generates a 7-day personalized plan

Provides recommended activities and apps

Modular structure ready for future database integration

🧱 Tech Stack
Frontend

React (Vite)

CSS (Custom design system)

Material Icons / Emoji

Backend

Node.js

Express.js

Nodemon (Dev mode)

📁 Project Structure
kideo-task/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── routes/
│   │   │   └── planRoutes.js
│   │   ├── controllers/
│   │   │   └── planController.js
│   │   ├── utils/
│   │   │   └── generatePlan.js
│   │   └── data/
│   │       └── apps.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── planner/
│   │   │   │   ├── PlannerIntroModal.jsx
│   │   │   │   ├── PlannerSteps.jsx
│   │   │   │   ├── PlannerForm.jsx
│   │   │   │   └── PlannerResults.jsx
│   │   ├── pages/
│   │   │   └── PlannerPage.jsx
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── App.jsx
│   └── package.json
│
└── README.md

⚙️ Installation
Clone the repository
git clone https://github.com/sanaomar7/VocaClass.git
cd VocaClass

Install backend
cd backend
npm install

Install frontend
cd ../frontend
npm install

🚀 Running the Project
Backend
cd backend
npm run dev


Runs on:
http://localhost:4000

Frontend
cd frontend
npm run dev


Runs on:
http://localhost:5173

📡 API Endpoint
POST /api/plan
Request Body
{
  "nickname": "John",
  "ageRange": "3-5",
  "language": "EN+AR",
  "goals": ["reading", "creativity"],
  "character": "Lingo",
  "routine": {
    "morning": true,
    "evening": true
  }
}

Response
{
  "plan": {
    "days": [...],
    "goals": [...],
    "apps": [...]
  }
}

🎨 Design Notes

Visual system based on soft gradients, rounded shapes, and child-safe colors.

Inputs, selects, chips, and fields use one unified design system.

Layouts follow a clean grid structure for readability.

Planner modal uses a friendly, motivating introduction flow.

🧩 Extensibility

The codebase is structured to easily support:

Additional characters or themes

Saving user plans to a database

Multi-language UI

Admin panel for app/goal management

Authentication & user accounts

API expansion for more personalized recommendations

📝 Notes

The project follows the requirements provided in the assessment:

Clean coding practices

Clear and simple architecture

Functional front-end + back-end

No external dependencies beyond React/Express to keep the task simple and maintainable.

🙌 Thank You

Thank you for reviewing this submission.
If you have any questions or would like clarification on any part of the implementation, feel free to reach out.

Created with love :
Sana Eid
