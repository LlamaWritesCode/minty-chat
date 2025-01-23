const express = require('express');
const dotenv = require('dotenv');
const path = require('path');


// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static('public'));

// Endpoint to expose your API key to the frontend securely
app.get('/api-key', (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'minty.html'));
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
