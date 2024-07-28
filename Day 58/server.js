const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Replace with your actual Genius API access token
const accessToken = 'Q4t57dl9y6nGjwdIg5E0l0Tu8SyLuGkBad4WCphOKzCvkRjNUWm2azXEOsakyRTE';

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, 'client')));

app.get('/token', (req, res) => {
    res.json({ accessToken });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

