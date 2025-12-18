Overview
    This project is a backend service that provides post office details for a given POSTAL code.
    User Registration, User Login.
Features

    Accepts a username,email and password and register user and login user via rest api endpoint
    Accepts an POSTAL code via a REST API endpoint.
    Fetches details from an external Postal provider (PostalPinCode currently ) with user authentication.



Tech Stack

    Backend: Node.js, Express Js, JsonWebToken
    Database: MongoDB (via Mongoose ODM)
    External API: PostalPinCode 

System Workflow
    Request: Register user /user -- Register a user and issue a token
    Request: Provide a token in header authorization Bearer Token and postalcode to /postal/:postalCode end point --- fetches the detail 
    if Token is not present it give authorization User.

    Already a user

    Request: Login user /user/login -- Login a user and issue a token
    Request: Provide a token in header authorization Bearer Token and postalcode to /postal/:postalCode end point --- fetches the detail 
    if Token is not present it give authorization User.

Project Structure
    src/
        ├── config/         # Database & Redis setup
        ├── controllers/    # Request handling
        ├── middleware/     # Authentication Middleware
        ├── models/         # Mongoose schema (IFSC model)
        ├── routes/         # Express routes
        └── index.js       # Server entry point


Setup & Run
    git clone https://github.com/Majid0899/postalcode-liveintituition.git
    cd postalcode-liveintituition

    Install Dependencies
        npm install
    
    Start MongoDB and Locally or remotely

        Make sure you have MongoDB and Redis installed and running on your machine.
        Default configs:

        MongoDB: mongodb://localhost:27017/ifscdb or remote url and database name
        
    
    Environment Variables
        create a .env file for example
        PORT=5000
        MONGO_URI=mongodb://localhost:27017/ifscdb
        JWT_SECRET_KEY=jwtsecretkey

    Run in development:
        npm run dev
    Run in production
        npm start

Example:
    POST:http://localhost:5000/user
        body:{username,email,password}
    POST:http//localhost:5000/user/login
        body:{username,email}
    GET http://localhost:5000/postal/110062

