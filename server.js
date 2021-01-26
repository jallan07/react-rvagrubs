const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Body parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`The server is listening at http://localhost:${PORT}`);
});
