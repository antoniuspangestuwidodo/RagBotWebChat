const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // folder 'public' for index.html

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
