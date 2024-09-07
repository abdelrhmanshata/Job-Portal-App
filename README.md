# Job-Portal-App

Welcome to the **Node.js Job Portal Project**! This project showcases a fully functional job portal web application built using Node.js, Express.js, and MongoDB. Whether you're a developer looking to learn more about Node.js and web application development, or you're simply interested in how a job portal operates, this project will provide valuable insights.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

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
- **API Endpoints:**
- Authentication
  - POST /api/auth/register - Register a new user (job seeker or employer).
POST /api/auth/login - Log in a user and receive a JWT.
Job Postings
GET /api/jobs - Get a list of all job postings.
POST /api/jobs - Create a new job posting (employer only).
GET /api/jobs/
- Get details of a specific job posting.
PUT /api/jobs/
- Update an existing job posting (employer only).
DELETE /api/jobs/
- Delete a job posting (employer only).
User Dashboard
GET /api/dashboard - Get user-specific data (e.g., jobs posted by employer, jobs applied to by job seeker).
Search & Filter
GET /api/jobs/search?query= - Search for jobs based on keywords.
GET /api/jobs/filter?location= - Filter jobs by location.
Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project.
Create your Feature Branch (git checkout -b feature/AmazingFeature).
Commit your Changes (git commit -m 'Add some AmazingFeature').
Push to the Branch (git push origin feature/AmazingFeature).
Open a Pull Request.
   
