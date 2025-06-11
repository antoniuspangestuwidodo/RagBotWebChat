const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// ✅ Allow embedding in Microsoft Teams
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "frame-ancestors 'self' https://*.teams.microsoft.com https://*.office.com"
  );
  next();
});

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
