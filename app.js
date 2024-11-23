const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const postsRoute = require('./routes/posts_route');

app.use('/', postsRoute);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}); 