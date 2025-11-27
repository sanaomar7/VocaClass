# VocaClass -- Weekly Learning Planner

A full-stack web application built for the **Kideo Full Stack Developer
Technical Assessment**.\
Provides an interactive 3-step planner for parents to generate a
personalized weekly learning schedule for their child.

------------------------------------------------------------------------

## ✨ Overview

VocaClass delivers a simple, clean, and friendly user experience
designed for children and parents.\
The project focuses on:

-   Clean, readable, maintainable code\
-   Simple and scalable architecture\
-   Reusable UI components\
-   Clear separation between frontend & backend\
-   Kid-friendly UI inspired by the Figma design

**User Journey:**

1.  Child Information\
2.  Learning Goals\
3.  Daily Routine\
4.  Auto-generated Weekly Learning Plan

------------------------------------------------------------------------

## 🎨 Features

### Frontend

-   Built with **React (Vite)**
-   Fully responsive design\
-   Step-by-step planner flow\
-   Entry wizard modal\
-   Character-themed visuals\
-   Shared UI components (chips, pills, inputs, step bar)\
-   Live preview of the final plan

### Backend

-   **Node.js + Express**
-   Structured folders (Routes → Controllers → Utils)\
-   `/api/plan` endpoint provides:
    -   7-day goal-based learning plan\
    -   Recommended apps\
    -   Daily schedule suggestions\
-   Modular backend ready for integration with a database

------------------------------------------------------------------------

## 🧱 Tech Stack

### Frontend

-   React (Vite)\
-   Custom CSS system\
-   Material Icons

### Backend

-   Node.js\
-   Express.js\
-   Nodemon (dev)

------------------------------------------------------------------------

## 📁 Project Structure

    VocaClass/
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

------------------------------------------------------------------------

## ⚙️ Installation

### 1. Clone the repository

    git clone https://github.com/sanaomar7/VocaClass.git
    cd VocaClass

### 2. Install backend

    cd backend
    npm install

### 3. Install frontend

    cd ../frontend
    npm install

------------------------------------------------------------------------

## 🚀 Running the Project

### Backend

    cd backend
    npm run dev

Runs at: **http://localhost:4000**

### Frontend

    cd frontend
    npm run dev

Runs at: **http://localhost:5173**

------------------------------------------------------------------------

## 📡 API -- Weekly Plan Generation

### POST `/api/plan`

#### Request Example

``` json
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
```

#### Response Example

``` json
{
  "plan": {
    "days": [],
    "goals": [],
    "apps": []
  }
}
```

------------------------------------------------------------------------

## 🎨 Design Guidelines

-   Soft gradients and rounded UI elements\
-   Kid-friendly color palette\
-   Clear spacing and layout\
-   Reusable design tokens\
-   Simple grid-based structure\
-   Friendly onboarding wizard

------------------------------------------------------------------------

## 🧩 Future Extensibility

-   More characters\
-   Database integration\
-   Multi-language UI\
-   Admin dashboard\
-   User authentication\
-   More advanced recommendation engine

------------------------------------------------------------------------

## 🙌 Thank You

Thank you for taking the time to review this project.\
Created with ❤️ --- **Sana Eid**
<img width="1849" height="898" alt="image" src="https://github.com/user-attachments/assets/ce441ef3-6304-4086-be69-5ffa4f252df3" />
<img width="1832" height="894" alt="image" src="https://github.com/user-attachments/assets/48cff353-e19a-4d49-8f4e-d167ce4cd334" />

<img width="1853" height="896" alt="image" src="https://github.com/user-attachments/assets/6fcc1a41-62cf-4af3-b6d6-15eb4495ad87" />
<img width="1853" height="896" alt="image" src="https://github.com/user-attachments/assets/a023369b-8576-4f13-8d12-e3c0fee24960" />
<img width="1860" height="891" alt="image" src="https://github.com/user-attachments/assets/b645945e-c775-4d90-93eb-3ad4518313c3" />
<img width="1860" height="891" alt="image" src="https://github.com/user-attachments/assets/9cfa43cb-9797-4787-8b24-86901f4d574a" />
<img width="1852" height="890" alt="image" src="https://github.com/user-attachments/assets/605a2d8d-6157-4d9e-ac1a-ace662adcffb" />
<img width="1852" height="890" alt="image" src="https://github.com/user-attachments/assets/6982249d-836b-41d6-b9d3-07d8f71ff9cd" />

<img width="1859" height="897" alt="image" src="https://github.com/user-attachments/assets/17794bf3-5453-4d8a-9f61-60ab990e8e6f" />
<img width="1849" height="897" alt="image" src="https://github.com/user-attachments/assets/c0f107d4-d991-4e8f-9050-ff1563613192" />

<img width="1793" height="882" alt="image" src="https://github.com/user-attachments/assets/72caf288-80da-42ec-94e3-855a87904e6b" />








