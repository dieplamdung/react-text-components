module.exports = {
  roots: ['<rootDir>/packages/react-components'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'test', __dirname, 'packages/react-components/src'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/packages/react-components/src/$1',
  },
};
