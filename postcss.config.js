const autoprefixer = require('autoprefixer')

const config = {
  overrideBrowserslist: [
    'since 2015-01-01', // Year the project started
    'safari >= 5',      // To handle webkit driver in Jenkins smoke-tests
    'ie >= 8'           // IE support from the original browser support list
  ]
}

module.exports = {
  plugins: [
    require('autoprefixer')(config)
  ],
  options: {
      sourceMap: true
  }
}
