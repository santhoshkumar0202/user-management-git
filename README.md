# User Management Backend - Express.js + MongoDB

## Description
A RESTful API built with **Express.js** for handling user-related operations such as **user registration** and **user login**. This API utilizes **MongoDB** as the database to store user information and provides **JWT (JSON Web Token)** authentication. The project includes **input validation**, **error handling**, and is designed with clear and well-structured code for easy understanding and further extension.

## Features
- **User Registration**: Allows new users to sign up with their credentials (username, email, password).
- **User Login**: Allows users to authenticate 
- **Validation**: Validates user input for registration and login.
- **Error Handling**: Includes proper error handling for invalid inputs, duplicate entries, and server errors.

## Technologies Used
- **Express.js**: Web framework for Node.js for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: MongoDB ODM (Object Document Mapper) for interacting with the database.
- **dotenv**: For managing environment variables securely.

## Installation

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** installed locally or a **MongoDB Atlas** account if using a cloud database.
  
**Usage**: Instructions on how to use your project after installation, such there care ccouple of apis that you can leverage **registartion**:-post/api/registeruser and **loggin user**:- post/api/loggin. User must be provide three field and those three fields are name,email,password and this is for registration and for login you need to provide two field and they are email and password
 
 **request body sample**
 {
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123"
}

### Steps to Set Up

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/santhoshkumar0202/user-management-backend.git
