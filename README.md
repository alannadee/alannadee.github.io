# Alanna's Website

A full-stack React application with a Node.js/Express backend.

## Project Structure

```
alannadee.github.io/
├── src/                 # Frontend React application
├── backend/             # Backend Node.js/Express server
├── public/              # Static assets
└── dist/                # Built frontend files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env` (if it exists)
   - Update `MONGO_URI` with your MongoDB connection string
   - Update `PORT` if needed (default: 5000)

4. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. In the root directory, install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:8080`

## Development

- **Frontend**: React with TypeScript, Tailwind CSS, and Webpack
- **Backend**: Node.js with Express, MongoDB, and Mongoose
- **API**: RESTful API with CORS enabled

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/alannasantoso
```

## Scripts

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production 