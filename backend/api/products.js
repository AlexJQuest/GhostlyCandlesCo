const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'your_new_password', // Replace with your actual password
  database: 'ghostlycandleco'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the process on connection error
  }
  console.log('Connected to the MySQL database!');
});

// Get products endpoint
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM Products', (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      return res.status(500).json({ error: 'Database query failed', details: err });
    }
    res.json(results); // Send results as JSON
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
