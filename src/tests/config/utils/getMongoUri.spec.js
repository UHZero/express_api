const { getMongoUri } = require('../../../config/utils/getMongoUri');

describe('[config/utils] - mongoURI test', () => {
  it('should return the default environment variable', () => {
    const mongoURI = getMongoUri();

    expect(mongoURI).toBe(`${process.env.MONGO_URI}`);
  });
});
