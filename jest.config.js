module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: 'src',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    // Especifica qué archivos incluir en la recopilación de cobertura
    collectCoverageFrom: [
      '**/*.(t|j)s',
      '!**/node_modules/**',
      '!**/dist/**',
      '!**/src/main.ts',
      '!**/src/app.module.ts',
    ],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
  };
  