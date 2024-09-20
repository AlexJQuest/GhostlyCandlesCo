const express = require('express');
const cors = require('cors'); // Import cors
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Use CORS middleware
app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'your_new_password', // Replace with your actual password
  database: 'ghostlycandleco' // Replace with your actual database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// Example route to get products
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
