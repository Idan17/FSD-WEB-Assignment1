const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const postsRoute = require('./src/routes/posts_route');
const commentRoute = require('./src/routes/comment_route');

app.use('/posts', postsRoute);
app.use('/comment', commentRoute);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}); 