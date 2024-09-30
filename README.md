# Cinephiles: Movie Reviews Platform

**Cinephiles** is a full-stack movie reviews platform. Users can browse movies, read and write reviews, and view ratings. The project uses **React** for the frontend and **Node.js/Express** with a **MongoDB** database for the backend.

## Project Structure

```
- backend/                 # Node.js/Express backend
  - src/                   # Backend source files
  - package.json           # Backend dependencies and scripts
- frontend/                # React frontend
  - src/                   # Frontend source files
  - package.json           # Frontend dependencies and scripts
- README.md                # Project documentation
```

## Features

- **Frontend**: React app for displaying movies, reviews, and user interactions.
- **Backend**: Node.js/Express server with API endpoints for managing movies, reviews, and users.
- **Database**: MongoDB for storing movies, reviews, and user data.

## Prerequisites

1. **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
2. **MongoDB**: Ensure you have MongoDB installed and running. You can use a local installation or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cinephiles.git
   cd cinephiles
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up your environment variables for the backend in a `.env` file. An example is shown below:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Usage

### Start the Backend Server

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Start the server:
   ```bash
   npm start
   ```

### Start the Frontend Development Server

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Start the React app:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
