module.exports = {
    roots: ['<rootDir>/tests'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    projects: [
        {
            displayName: 'node',
            testEnvironment: 'node',
            testMatch: ['<rootDir>/tests/node/**/*.test.ts'],
            slowTestThreshold: 10,
            transform: {
              '^.+\\.(ts|tsx)$': 'ts-jest',
            }
        },
        {
            displayName: 'browser',
            setupFiles: ['jest-canvas-mock'],
            testEnvironment: 'jest-environment-jsdom',
            testMatch: ['<rootDir>/tests/browser/**/*.test.ts'],
            slowTestThreshold: 10,
            transform: {
              '^.+\\.(ts|tsx)$': 'ts-jest',
            }
        }
    ]
};
