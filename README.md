# Job-Portal-App

Welcome to the **Node.js Job Portal Project**! This project showcases a fully functional job portal web application built using Node.js, Express.js, and MongoDB. Whether you're a developer looking to learn more about Node.js and web application development, or you're simply interested in how a job portal operates, this project will provide valuable insights.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **User Registration & Authentication:**
  - Job seekers and employers can register and log in.
  - JWT-based authentication to secure endpoints.
  
- **Job Postings:**
  - Employers can create, update, and delete job postings.
  - Job seekers can view and search for jobs.

- **Search & Filter:**
  - Users can search and filter job listings based on various criteria like job title, location, and company name.

- **User Dashboard:**
  - Employers can manage their job postings.
  - Job seekers can track their applied jobs.

## Technologies Used

- **Node.js** - Backend runtime environment.
- **Express.js** - Web framework for Node.js.
- **MongoDB** - NoSQL database for storing application data.
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)** - For secure authentication.
- **Swagger** - API documentation tool.
  
## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdelrhmanshata/Job-Portal-App.git
   ```
   
2. **Navigate to the project directory:**
   ```bash
   cd Job-Portal-App
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a .env file in the root directory.
   - Add the following variables:

   ```bash
   PORT= 3000
   DEV_MODE=development
   MONGO_URL=your_mongodb_uri
   DATABASE_LOCAL=your_mongodb_local_uri
   DATABASE_PASSWORD=your_mongodb_password
   JWT_SECRET=your_jwt_secret
   ```

## Usage
- Once the application is up and running, you can interact with it using the following endpoints:

## API Endpoints
- Authentication
  - POST /api/v1/auth/register   - Register a new user (job seeker or employer).
  - POST /api/v1/auth/login      - Log-in a user and receive a JWT.

- Job Postings
  - GET /api/v1/job/get-job      - Get a list of all job postings.
  - POST /api/v1/job/create-job  - Create a new job posting (employer only).

- Update an existing job posting (employer only).
  - PATCH /api/v1/job/update-job/:id

- Delete a job posting (employer only).
  - DELETE /api/v1/job/delete-job/:id

- Search & Filter & Sort & Pagination 
  - GET /api/v1/job/get-job?search= [positionName]                                          - Search for jobs based on keywords.
  - GET /api/v1/job/get-job?workType=["full-time", "part-time", "internship", "contaract"]  - Filter jobs by workType.
  - GET /api/v1/job/get-job?status=["pending", "reject", "interview"]                       - Filter jobs by status.
  - GET /api/v1/job/get-job?sort=["latest","oldest","a-z","z-a"]                            - Filter jobs by sort.
  - GET /api/v1/job/get-job?page=1&limit=10                                                 - Pagination jobs .
  
   

