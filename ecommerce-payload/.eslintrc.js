module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
     'prettier/prettier': ['error', {EndOfLine: "auto"}],
     "no-console": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
