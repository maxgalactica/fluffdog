// app.js

const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('HI AMES I LOV U'));

const port = process.env.port || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
