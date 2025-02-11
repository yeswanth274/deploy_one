require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Access environment variables
const apiKey = process.env.API_KEY;
const dbPassword = process.env.DB_PASSWORD;

// Ensure required environment variables are loaded
if (!apiKey || !dbPassword) {
  console.error("Missing required environment variables! Please check your .env file.");
  process.exit(1); // Exit if variables are not found
}

// Simple API endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.get('/api-key', (req, res) => {
  res.json({ apiKey });
});

app.get('/db-password', (req, res) => {
  res.json({ dbPassword });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});