# Server Setup

## Environment Variables

Create a `.env` file in the `server` directory with the following:

```
MONGODB_URI=mongodb+srv://PraveenPR:Shakthi%40123@cluster0.jf6nwfi.mongodb.net/gtholiday?retryWrites=true&w=majority&appName=Cluster0
```

**Note:** The password is URL-encoded (`@` becomes `%40`)

## Installation

```bash
npm install
```

## Running the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

## Database

The server is configured to use MongoDB Atlas. Make sure:
1. Your IP address is whitelisted in MongoDB Atlas
2. The database name is `gtholiday`
3. The connection string is correct in `.env` file

## Project Structure

```
server/
├── index.js              # Main entry point
├── dp.js                 # Database connection
├── models/               # MongoDB models
├── controllers/          # Business logic
├── routes/               # API routes
└── .env                  # Environment variables (create this)
```

