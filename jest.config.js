/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  testEnvironmentOptions: { url: 'http://localhost/' },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!@npm-bbta)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test-utils/file-mock.js',
    '\\.(css|scss)$': '<rootDir>./src/test-utils/styleMock.js',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/'
    })
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'test-utils'],
  setupFilesAfterEnv: ['<rootDir>/src/test-utils/jest.setup.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/core/shared/store/session-storage.reducer.ts',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/reportWebVitals.ts',
    '<rootDir>/src/sherpa-tagged-components.ts'
  ]
};
