require('dotenv').config();
const client = require('./src/server');

const port = process.env.APP_PORT || 3003;

client.listen(port, () => {
  console.log(`server running at ${port} port!!!`);
});
