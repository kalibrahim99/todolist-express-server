#  Todo list  - Secure Task Management API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

##  Overview
ZenList is a production-ready RESTful API designed for secure task management. Built with **Node.js**, **Express**, and **TypeScript**, the project follows the **MVC (Model-View-Controller)** pattern to ensure scalability and clean separation of concerns. The system is hardened with multiple security layers to protect user data and prevent common web vulnerabilities.

##  Tech Stack
*   **Backend:** Node.js, Express.js.
*   **Language:** TypeScript (Strict typing).
*   **Architecture:** MVC Pattern with Service Layer.
*   **Database:** MongoDB Atlas with Mongoose ODM.
*   **Security & Protection:** 
    *   **JWT (JSON Web Tokens):** Stateless authentication.
    *   **Bcrypt:** Secure password hashing.
    *   **Helmet:** HTTP security header management.
    *   **Rate Limiting:** Protection against DDoS and Brute-force attacks.
    *   **Mongo-Sanitize:** Prevention of NoSQL Injection.
*   **Validation:** Schema validation using **Zod**.
*   **Documentation:** Swagger UI (OpenAPI 3.0).

##  Key Features
-  **Secure Authentication:** Robust user registration and login flow.
-  **User Isolation:** Middleware-level logic ensuring users can only interact with their own data.
-  **Request Validation:** Strict validation for all incoming data (Body, Params, Queries).
-  **Traffic Control:** Integrated rate limiting per route (Auth vs. Tasks).
-  **Interactive API Docs:** Fully documented endpoints available via Swagger UI.

##  API Architecture & Endpoints

### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/users/sign` | Register a new user |
| POST | `/api/users/login` | Login and receive JWT |

### Tasks (Protected Routes)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/tasks` | Retrieve tasks for the logged-in user |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task by ID |
| DELETE | `/api/tasks/:id` | Delete a task by ID |

- **API Documentation:** [Swagger UI](https://todolist-express-server-production.up.railway.app/docs)

##  Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Omar-BEDev/todolist-express-server.git
   cd todolist-express-server
