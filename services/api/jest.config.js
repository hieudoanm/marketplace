module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!<rootDir>/src/app.ts',
    '!<rootDir>/src/routes.ts',
    '!<rootDir>/src/server.ts',
    '!<rootDir>/src/swagger.json',
    '!<rootDir>/src/**/*.d.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 70,
      functions: 90,
      lines: 90,
    },
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  verbose: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
};
