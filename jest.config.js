module.exports = {
  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text-summary", "lcov"],
  coverageProvider: "v8",

  testEnvironment: "node",

  testMatch: ["**/*.spec.js"],
};