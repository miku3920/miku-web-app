export default {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/dist/$1.js',
  },
  moduleFileExtensions: [
    'mjs',
    'js',
  ],
  testEnvironment: 'jest-environment-jsdom',
  transform: {},
  testMatch: ['<rootDir>/test/*.mjs', '<rootDir>/test/**/*.mjs'],
}
