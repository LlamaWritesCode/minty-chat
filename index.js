const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api-key', (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'minty.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
