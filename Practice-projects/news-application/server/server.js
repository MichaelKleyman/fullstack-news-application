const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

//defining the routes

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});