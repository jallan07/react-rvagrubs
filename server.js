const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const path = require('path');
const colors = require('colors');
const cookieParser = require('cookie-parser');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect Database
connectDB();

const app = express();

// Body parser
app.use(express.json({ extended: false }));

// cookie parse
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Set static folder
// app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
);
