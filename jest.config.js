module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': require.resolve('vue-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('./jest.transform.js')
  },
  globals: {
    'vue-jest': {
      babelConfig: {
        plugins: [require('babel-plugin-transform-es2015-modules-commonjs')]
      }
    }
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom-fifteen',
  testMatch: [
    '**/test/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)'
  ]
}
