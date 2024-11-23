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

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/commentsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}); 