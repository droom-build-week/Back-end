require('dotenv').config();

const app = require('./api/server');

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(` *** Server listening on port: ${PORT} *** `);
})