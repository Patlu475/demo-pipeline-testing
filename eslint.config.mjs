import js from '@eslint/js';

export default [
  js.configs.recommended,

  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        // Enable Jest globals like `test`, `expect`
        test: true,
        expect: true,
        describe: true,
        beforeEach: true,
        afterEach: true
      }
    }
  }
];
