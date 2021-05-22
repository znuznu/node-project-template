module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    testMatch: ['**/src/**/*.utest.ts']
};
