module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: 'src',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: [
      '**/*.(t|j)s',
      '!app.module.ts', // Excluye app.module.ts del informe de cobertura
    ],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "src/app.module.ts", // Excluye app.module.ts del informe de cobertura
    ],
  };
  