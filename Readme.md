
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/adityakanu/Log-Ingestor-with-Query-Interface">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Issue Tracker and Log Ingestor</h3>

  <p align="center">
    <br />
    <a href="https://github.com/adityakanu/Log-Ingestor-with-Query-Interface"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://youtu.be/bKpkh2cvIAo">View Demo</a>
    ·
    <a href="https://github.com/adityakanu/Log-Ingestor-with-Query-Interface/issues">Report Bug</a>
    ·
    <a href="https://github.com/adityakanu/Log-Ingestor-with-Query-Interface/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![Screenshot-Webpage](https://i.postimg.cc/T1rD8rcH/Screenshot-from-2023-11-20-00-06-15.png)](https://postimg.cc/Cnx1knXj)
The project is structured into two main parts: the backend (Express server) and the frontend (React application).

    backend: Contains the Express server, MongoDB models, and routes.
    frontend: Contains the React application using Vite.

### Log Ingestion

The log ingestion feature allows you to submit logs to the backend. Navigate to the log ingestion page (/ingest), fill in the log details, and submit the form.

### Issue Query Interface

The log query interface (/logs) enables you to search and filter logs based on various criteria such as log level, message, resource ID, timestamp, and more. Select a property, enter a value, and click "Query Logs" to view the filtered logs in a tabular format.




### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.


* React
* NodeJS
* Javascript
* Express
* MongoDB



<!-- GETTING STARTED -->
## Getting Started

This project is a simple log management system with a front-end for logging ingestion and a backend for verifying and displaying logs.

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/adityakanu/Log-Ingestor-with-Query-Interface.git
   cd Log-Ingestor-with-Query-Interface
    ```

2. **Install dependencies:**

    ```bash

    cd backend
    npm install
    ```

3. **Set up MongoDB:**

    Create a MongoDB Atlas cluster and obtain the connection string.

    Create a .env file in the backend directory and add the MongoDB connection string:

    ```env

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

    The front end will be available at <http://localhost:5173>.

## Usage

- You can use the Log Ingestor to insert logs or directly send Logs to <http://localhost:3000>.
- The Logs can be viewed in the query interface.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.




<!-- CONTACT -->
## Contact

Your Name - [@adityakanu_](https://twitter.com/adityakanu_) - official.adityakanu@gmail.com

Project Link: https://github.com/dyte-submissions/november-2023-hiring-adityakanu

<p align="right">(<a href="#readme-top">back to top</a>)</p>

