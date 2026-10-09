import { type Config } from 'prettier'

const config: Config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',

  arrowParens: 'always',
}

export default config
