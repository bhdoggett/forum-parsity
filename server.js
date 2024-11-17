const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Serve static files (like your HTML, CSS, JS files)
app.use(express.static('public'));

// Endpoint to get posts (read from posts.json)
app.get('/posts', (req, res) => {
  fs.readFile('posts.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading posts.json:', err);
      res.status(500).send('Error reading posts data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to save posts (write to posts.json)
app.post('/posts', (req, res) => {
  fs.writeFile('posts.json', JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      console.error('Error writing posts.json:', err);
      res.status(500).send('Error saving posts');
      return;
    }
    res.send('Posts saved successfully!');
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

