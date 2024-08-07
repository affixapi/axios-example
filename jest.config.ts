import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  coverageReporters: ['lcov'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'json', 'js'],
  moduleNameMapper: {
    '@fixtures/(.*)': '<rootDir>/src/fixtures/$1',
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  preset: 'ts-jest' || 'ts-jest/presets/default-esm',
  rootDir: './',
  testEnvironment: 'node',
  testMatch: ['**/*.(test|integration).ts', '**/*.mock.(test|integration).ts'],
  // testTimeout: 30 * 1000, // 1 * 60 * 1000,
  testTimeout: 2 * 60 * 1000,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
        useESM: true,
      },
    ],
  },
};

export default config;
