module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    testMatch: ['**/src/**/*.itest.ts']
};
