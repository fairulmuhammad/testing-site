const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Aplikasi DevOps berjalan!');
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});

