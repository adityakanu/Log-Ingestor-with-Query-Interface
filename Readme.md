# Log Viewer and Ingestor

This project is a simple log management system with a frontend for log ingestion and a backend for querying and displaying logs.

## Table of Contents

- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [Log Ingestion](#log-ingestion)
- [Log Query Interface](#log-query-interface)

## Setup

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/log-viewer-and-ingestor.git
   cd log-viewer-and-ingestor
    ```

2. **Install dependencies:**

    ```bash

    cd backend
    npm install
    ```

3. **Set up MongoDB:**

    Create a MongoDB Atlas cluster and obtain the connection string.

    Create a .env file in the backend directory and add the MongoDB connection string:

    ```
    env

    MONGODB_URI=your-mongodb-connection-string
    ```

4. **Run the backend server:**

    ```bash

    npm start
    ```

    The backend server will be running at <http://localhost:3000>.

### Frontend Setup

5. **Install dependencies:**

    ```bash

    cd frontend
    npm install
    ```

6. **Run the frontend development server:**

    ```bash

    npm run dev
    ```

    The frontend will be available at <http://localhost:5173>.

## Project Structure

The project is structured into two main parts: the backend (Express server) and the frontend (React application).

    backend: Contains the Express server, MongoDB models, and routes.
    frontend: Contains the React application using Vite.

### Log Ingestion

The log ingestion feature allows you to submit logs to the backend. Navigate to the log ingestion page (/ingest), fill in the log details, and submit the form.

### Log Query Interface

The log query interface (/logs) enables you to search and filter logs based on various criteria such as log level, message, resource ID, timestamp, and more. Select a property, enter a value, and click "Query Logs" to view the filtered logs in a tabular format.

Feel free to explore and enhance the project based on your requirements!

- Make sure to replace placeholders like `your-username` and `your-mongodb-connection-string` with your actual information. Customize the sections and content based on the specifics of your project.
