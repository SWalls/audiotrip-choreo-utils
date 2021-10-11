export default {
  cacheDirectory: './jest/cache',
  collectCoverage: true,
  coverageDirectory: './jest/coverage',
  coverageReporters: ['json', 'lcov', ['text', { skipFull: true }], 'clover'],
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.stories.{ts,tsx}',
    '!<rootDir>/src/**/*.test.{ts,tsx}',
    '!<rootDir>/src/**/test-utils/*.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 40,
      lines: 50,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '\\.(?:css|gif|jpg|png|scss)$': '<rootDir>/test-utils/empty.ts',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
