module.exports = {
  '*.{ts,tsx,js,jsx}': [() => 'yarn lint:ts', 'yarn lint:eslint'],
  '*.{js,jsx,ts,tsx,html,css}': ['yarn lint:prettier'],
  '*.{css,scss,js,ts,jsx,tsx}': ['yarn lint:style']
}
