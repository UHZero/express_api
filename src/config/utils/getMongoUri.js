require('dotenv').config();

function getMongoUri() {
  let uri = process.env.MONGO_URI || 'mongodb+srv://USERNAME:PASSWORD@cluster123.abc12.mongodb.net/app';
  return uri;
}

module.exports = {
  getMongoUri,
};
