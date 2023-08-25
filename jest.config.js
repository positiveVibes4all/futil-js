/* https://jestjs.io/docs/configuration */

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  coverageProvider: 'v8',
  coverageReporters: ['lcov'],
  setupFilesAfterEnv: ['./test/setup/init.js'],
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '!<rootDir>/src/**/*.test.js'],
  projects: [
    {
      displayName: 'test',
      testMatch: ['<rootDir>/test/*.js'],
    },
  ],
  reporters: ['default', ['github-actions', { silent: false }]],
}
