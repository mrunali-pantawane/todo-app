const express = require('express');
const app = express();
const port = 3000;

let tasks = [];

app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do App!');
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.send('Task added successfully!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
