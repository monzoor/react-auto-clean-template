const PACKAGE_JSON_CONFIG = {
  scripts: {
    start: 'craco start',
    build: 'craco build',
    test: 'craco test',
  },
  jest: {
    collectCoverageFrom: ['**/utils/*.{js,jsx}'],
    moduleNameMapper: {
      '^@utils(/?)(.*?)$': '<rootDir>/src/utils$1$2',
      '^@constants(/?)(.*?)$': '<rootDir>/src/constants$1$2',
      '^@components(/?)(.*?)$': '<rootDir>/src/components$1$2',
      '^@helpers(/?)(.*?)$': '<rootDir>/src/helpers$1$2',
      '^@actions(/?)(.*?)$': '<rootDir>/src/actions$1$2',
      '^@validations(/?)(.*?)$': '<rootDir>/src/validations$1$2',
      '^@containers(/?)(.*?)$': '<rootDir>/src/containers$1$2',
    },
  },
};
export { PACKAGE_JSON_CONFIG };
