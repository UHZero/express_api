const client = require('./src/server');

const port = 3333;

client.listen(port, () => {
  console.log(`server running at ${port} port!!!`);
});
