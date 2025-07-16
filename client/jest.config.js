export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],  // <-- change this line
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};
