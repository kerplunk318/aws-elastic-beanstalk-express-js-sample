const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (r, res) => res.se('Testing the build pipeline!'));
=======
app.get('/', (req, res) => res.send('Testing the build pipeline!'));
>>>>>>> parent of 1f89cf3 (Update app.js)

app.listen(port);
console.log(`App running on http://localhost:${port}`);
