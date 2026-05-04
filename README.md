# Coinbase Clone – Full-Stack Integration Project

## Project Overview
This project is a full-stack cryptocurrency platform built by integrating a Coinbase clone frontend with a Node.js and MongoDB backend. The system supports user authentication, protected routes, and dynamic cryptocurrency data management through RESTful APIs.

---

## Tech Stack
- Frontend: React (Coinbase Clone UI)
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Authentication: JWT (JSON Web Tokens)
- Deployment: Render / Netlify (or Vercel)

---

## Authentication System (JWT-Based)

### Register User
**Endpoint:** `GET /register` (or POST recommended)

**Fields:**
- Name  
- Email  
- Password  

### Functionality:
- Creates a new user account
- Stores user data securely in MongoDB
- Returns success or error messages based on request outcome

---

### Login User
**Endpoint:** `GET /login` (or POST recommended)

### Functionality:
- Authenticates user using email and password
- Generates a JWT token on successful login
- Stores token securely (preferably HTTP-only cookies)
- Redirects user to homepage after successful login

---

## Protected User Profile Page

### Features:
- Displays user information:
  - Name
  - Email
  - Additional profile details from backend

### Security:
- This page is protected using JWT authentication
- Only accessible to logged-in users
- Unauthorized users are redirected to the login page

---

## Cryptocurrency API Integration

### Get All Cryptocurrencies
**GET /crypto**
- Fetches all available cryptocurrencies from the database

---

### Get Top Gainers
**GET /crypto/gainers**
- Returns cryptocurrencies sorted by highest percentage increase

---

### Get New Listings
**GET /crypto/new**
- Returns recently added cryptocurrencies (newest first)

---

### Add New Cryptocurrency
**POST /crypto**

**Fields:**
- Name  
- Symbol  
- Price  
- Image  
- 24h Change (%)  

### Functionality:
- Adds a new cryptocurrency to MongoDB
- Returns success or error response messages
- Ensures proper validation and storage

---

## Backend Architecture
The backend follows a structured MVC pattern:

- Models → Mongoose schemas  
- Routes → API endpoints  
- Controllers → Business logic  

All features are exposed through RESTful APIs for frontend consumption.

---

## Deployment Instructions

### Backend Deployment
- Push backend code to GitHub Classroom repository
- Deploy backend using Render
- Ensure environment variables are properly configured

### Frontend Integration
- Connect frontend to deployed backend API
- Update API base URL in frontend code

### Frontend Deployment
- Deploy updated frontend using Netlify or Vercel

---

## Submission Requirements
Submit the following:
- Deployed Backend URL  
- Deployed Frontend URL  
- Updated GitHub Repository Link  

Ensure all links are valid and accessible. Invalid submissions will not be graded.

---

## Notes
- JWT authentication must be properly implemented
- All routes must return meaningful success or error responses
- Backend must be connected to MongoDB Atlas or a local MongoDB instance
- Follow clean code and best practices throughout the project