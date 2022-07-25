require('dotenv').config();

function getMongoUri() {
  let uri = process.env.MONGO_URI || 'mongodb+srv://USERNAME:PASSWORD@cluster123.abc12.mongodb.net/app';
  if (process.env.NODE_ENV === 'test') {
    uri = `${uri}_test`;
  }
  return uri;
}

module.exports = {
  getMongoUri,
};
