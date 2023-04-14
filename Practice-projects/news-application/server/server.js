const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routerFile = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions)); //one way to use the cors package to enable cors with the proper middleware
// app.use((req, res, next) => {//set the header manually using the res.setHeader Node option.
//   // console.log(req.headers.origin);
//   res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader('Access-Control-Allow-Headers', 'Content-type');
//   if (req.method === 'OPTIONS') {
//       return res.send();   
//}
//   next();
// });

app.use(express.json());//this is middleware that makes sure it parses the body of any request as JSON. Lets us access the req.body property. Important for it to be a JSON payload.
app.use(morgan('dev')); //morgan logging middleware for server logs

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

//defining the routes
app.use('/newsapp', routerFile);

//error handling middleware (404)
app.use((req, res, next) => {
  res.status(404).send({ error: '404 Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
