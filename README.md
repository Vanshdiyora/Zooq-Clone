# Zooq.app Clone

This is a clone of Zooq.app developed using React.js and Context API for state management. The project includes payment functionality to enable secure transactions, a user-friendly interface for task management, collaboration, and progress tracking. It is designed to be responsive and compatible across both desktop and mobile devices. The backend is built with Node.js and Express, and MongoDB is used as the database, providing a robust and scalable solution.

## Features

- **Progress Tracking**: Track the progress of tasks with visual indicators.
- **Payment Functionality**: Secure transactions using integrated payment gateway.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Backend**: Built with Node.js and Express.
- **Database**: MongoDB for data storage.

## Tech Stack

- **Frontend**: React.js, Context API
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payment Gateway**: razopay


### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/zooq-clone.git
    cd zooq-clone
    ```

2. **Install frontend dependencies:**
    ```bash
    cd client
    npm install
    ```

3. **Install backend dependencies:**
    ```bash
    cd ../server
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `server` directory and add the following:
    ```plaintext
    MONGODB_URI=your_mongodb_uri
    PORT=5000
    PAYMENT_API_KEY=your_payment_api_key
    ```

5. **Run the backend server:**
    ```bash
    cd server
    npm start
    ```

6. **Run the frontend development server:**
    ```bash
    cd ../client
    npm start
    ```

7. Open your browser and navigate to `http://localhost:3000`
