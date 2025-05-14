const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Aplikasi DevOps berjalan!');
});

app.listen(port, () => {
<<<<<<< HEAD
  console.log();
});

=======
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
>>>>>>> ae1eddf625085917d38d6056a3c43d1c1490feab
