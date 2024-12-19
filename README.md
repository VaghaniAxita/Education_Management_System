
# Education Management System API

This is a backend API for an Education Management System built with Node.js and Express.js. It handles user authentication, course management, enrollment, and student progress tracking with role-based access control.


 - Deploy on Render: https://education-management-system-eow1.onrender.com
____________________________________________________




## Tech Stack

- Node.js 
- Express.js 
- MongoDB 
- JWT 
- Bcrypt.js 


## Features

- JWT Authentication: Secure login and signup for users.
- Role-Based Authorization: Admins, Teachers, and - Students have specific permissions.
- Course Management: Create, update, delete, and view courses.
- Enrollment Management: Enroll or remove students from courses.
- Grade Management: Teachers can assign grades; students can view their grades.


___________________________________________________


## Setup

1. Clone the Repository

```bash
 https://github.com/VaghaniAxita/Education_Management_System
```

2. Navigate to the Project Directory:

```bash
  cd backend  
```

3. Run the server:
```bash
  nodemon
```





# Routes

### User Authentication Routes
  
  **Register  User**

- Route: POST /api/auth/register
- Description: Register a new user
- Request Body:
```bash
  {
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "role": "Student"
}

```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
 {
  "message": "User registered successfully"
}
```

**User Login**

- Route: /api/auth/login
- Description:Login an existing user
- Request Body:
```bash
 {
  "email": "john.doe@example.com",
  "password": "password123"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```

**Get All Users**

- Route: GET /api/auth/users
- Description: Fetches all registered users.
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 [
  {
    "_id": "63fa9d435f45b2f6a5e1a8bd",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "Student"
  },
  {
    "_id": "63fa9d435f45b2f6a5e1a8bc",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "Teacher"
  }
]
```
### Course  Routes

**Create Course**

- Route:POST /api/courses
- Request Body:
```bash
 {
  "title": "Full Stack Web Development",
  "description": "Learn to build full stack web applications with Node.js, Express, and React.",
  "duration": "12 weeks",
  "teacher": "John Doe"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
{
  "message": "Course created successfully!",
  "course": {
    "id": 1,
    "title": "Full Stack Web Development",
    "description": "Learn to build full stack web applications with Node.js, Express, and React.",
    "duration": "12 weeks",
    "teacher": "John Doe"
  }
}
```
**Update Course**

- Route:PUT /api/courses/:id
- Request Body:
```bash
 {
  "title": "Updated Course Title",
  "description": "Updated course description.",
  "duration": "16 weeks"
}

```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "Course updated successfully!",
  "course": {
    "id": 1,
    "title": "Updated Course Title",
    "description": "Updated course description.",
    "duration": "16 weeks"
  }
}
```

**Delete a Course**

- Route:DELETE /api/courses/:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "Course deleted successfully!"
}
```
**Get All Courses**

- Route:GET /api/courses
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
{
  "courses": [
    {
      "id": 1,
      "title": "Full Stack Web Development",
      "description": "Learn to build full stack web applications with Node.js, Express, and React.",
      "duration": "12 weeks",
      "teacher": "John Doe"
    },
    {
      "id": 2,
      "title": "Introduction to Machine Learning",
      "description": "Learn the basics of Machine Learning and build predictive models.",
      "duration": "8 weeks",
      "teacher": "Jane Smith"
    }
  ]
}
```

### Enrollment  Routes

**Enroll Student**

- Route:POST /api/enrollment/enroll
- Request Body:
```bash
 {
  "studentId": "63fa9d435f45b2f6a5e1a8bd",
  "courseId": "63fa9d435f45b2f6a5e1a8be"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
 {
  "message": "Student enrolled successfully",
  "course": {
    "_id": "63fa9d435f45b2f6a5e1a8be",
    "title": "Introduction to Programming",
    "enrolledStudents": ["63fa9d435f45b2f6a5e1a8bd"]
  }
}
```

**Get Courses**
- Route: GET /api/enrollment/my-courses
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
[
  {
    "_id": "63fa9d435f45b2f6a5e1a8be",
    "title": "Introduction to Programming"
  }
]
```

**Remove a Student**
- Route: DELETE /api/enrollment/remove
- Request Body:
```bash
{
  "studentId": "63fa9d435f45b2f6a5e1a8bd",
  "courseId": "63fa9d435f45b2f6a5e1a8be"
}
```
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "message": "Student removed from course",
  "course": {
    "_id": "63fa9d435f45b2f6a5e1a8be",
    "title": "Introduction to Programming",
    "enrolledStudents": []
  }
}
```

### Grade Routes

**Assign Grade**
- Route: POST /api/grades/assign
- Request Body:
```bash
{
  "studentId": "63fa9d435f45b2f6a5e1a8bd",
  "courseId": "63fa9d435f45b2f6a5e1a8be",
  "grade": 85
}
```
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "message": "Grade assigned successfully",
  "grade": {
    "_id": "63fa9d435f45b2f6a5e1a8bf",
    "course": "63fa9d435f45b2f6a5e1a8be",
    "student": "63fa9d435f45b2f6a5e1a8bd",
    "grade": 85
  }
}
```

**Get Grades for a Student**
- Route: GET /api/grades/my-grades
- Request Body:
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 [
  {
    "course": {
      "_id": "63fa9d435f45b2f6a5e1a8be",
      "title": "Introduction to Programming"
    },
    "grade": 90
  }
]
```

**Get Grades for a Course**
- Route: GET /api/grades/course/:courseId
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
[
  {
    "student": {
      "_id": "63fa9d435f45b2f6a5e1a8bd",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "grade": 90
  },
  {
    "student": {
      "_id": "63fa9d435f45b2f6a5e1a8bc",
      "name": "Jane Smith",
      "email": "jane@example.com"
    },
    "grade": 85
  }
]
```
  
